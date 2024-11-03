// Read the .glsl file contents, using Vite's '?raw' import mechanism that imports the
// file as a string.
import fragmentShaderSource from './frag.glsl?raw'
import vertexShaderSource from './vert.glsl?raw'

// Values for tuning display of noise algorithm
const numCells = 500
// Inverse blob size
const inc = 0.002
// Blob speed
const zinc = 0.006
// Initial "time" offset
let zoff = 0.0
// Mouse coordinates for interactivity
let mouse = { x: 0, y: 0 }
const mouseInteractionBoundary = 1.0
onmousemove = (event) => {
  const [displayWidth, displayHeight] = canvasToDisplaySizeMap.get(canvas)
  mouse.x = event.clientX / displayWidth
  mouse.y = event.clientY / displayHeight
}

/*
 * Part of a speed-improved simplex 3D noise algorithms.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */
function Grad (x, y, z) {
  this.x = x
  this.y = y
  this.z = z
}

Grad.prototype.dot3 = function (x, y, z) {
  return this.x * x + this.y * y + this.z * z
}

let grad3 = [
  new Grad(1, 1, 0),
  new Grad(-1, 1, 0),
  new Grad(1, -1, 0),
  new Grad(-1, -1, 0),
  new Grad(1, 0, 1),
  new Grad(-1, 0, 1),
  new Grad(1, 0, -1),
  new Grad(-1, 0, -1),
  new Grad(0, 1, 1),
  new Grad(0, -1, 1),
  new Grad(0, 1, -1),
  new Grad(0, -1, -1)]

let p = [
  151,
  160,
  137,
  91,
  90,
  15,
  131,
  13,
  201,
  95,
  96,
  53,
  194,
  233,
  7,
  225,
  140,
  36,
  103,
  30,
  69,
  142,
  8,
  99,
  37,
  240,
  21,
  10,
  23,
  190,
  6,
  148,
  247,
  120,
  234,
  75,
  0,
  26,
  197,
  62,
  94,
  252,
  219,
  203,
  117,
  35,
  11,
  32,
  57,
  177,
  33,
  88,
  237,
  149,
  56,
  87,
  174,
  20,
  125,
  136,
  171,
  168,
  68,
  175,
  74,
  165,
  71,
  134,
  139,
  48,
  27,
  166,
  77,
  146,
  158,
  231,
  83,
  111,
  229,
  122,
  60,
  211,
  133,
  230,
  220,
  105,
  92,
  41,
  55,
  46,
  245,
  40,
  244,
  102,
  143,
  54,
  65,
  25,
  63,
  161,
  1,
  216,
  80,
  73,
  209,
  76,
  132,
  187,
  208,
  89,
  18,
  169,
  200,
  196,
  135,
  130,
  116,
  188,
  159,
  86,
  164,
  100,
  109,
  198,
  173,
  186,
  3,
  64,
  52,
  217,
  226,
  250,
  124,
  123,
  5,
  202,
  38,
  147,
  118,
  126,
  255,
  82,
  85,
  212,
  207,
  206,
  59,
  227,
  47,
  16,
  58,
  17,
  182,
  189,
  28,
  42,
  223,
  183,
  170,
  213,
  119,
  248,
  152,
  2,
  44,
  154,
  163,
  70,
  221,
  153,
  101,
  155,
  167,
  43,
  172,
  9,
  129,
  22,
  39,
  253,
  19,
  98,
  108,
  110,
  79,
  113,
  224,
  232,
  178,
  185,
  112,
  104,
  218,
  246,
  97,
  228,
  251,
  34,
  242,
  193,
  238,
  210,
  144,
  12,
  191,
  179,
  162,
  241,
  81,
  51,
  145,
  235,
  249,
  14,
  239,
  107,
  49,
  192,
  214,
  31,
  181,
  199,
  106,
  157,
  184,
  84,
  204,
  176,
  115,
  121,
  50,
  45,
  127,
  4,
  150,
  254,
  138,
  236,
  205,
  93,
  222,
  114,
  67,
  29,
  24,
  72,
  243,
  141,
  128,
  195,
  78,
  66,
  215,
  61,
  156,
  180]
let perm = new Array(256)
let gradP = new Array(256)

// Seed the noise
const seeded = function simplexSeed (seed) {
  if (seed > 0 && seed < 1) {
    // Scale the seed out
    seed *= 65536
  }

  seed = Math.floor(seed)
  if (seed < 256) {
    seed |= seed << 8
  }

  for (let i = 0; i < 256; i++) {
    let v
    if (i & 1) {
      v = p[i] ^ (seed & 255)
    } else {
      v = p[i] ^ ((seed >> 8) & 255)
    }

    perm[i] = v
    gradP[i] = grad3[v % 12]
  }

  return true
}(Math.random())

const canvas = document.querySelector('canvas')
const canvasToDisplaySizeMap = new Map([[canvas, [100, 100]]]);

// The main function that sets everything up and starts the animation loop
(function () {
  if (!(canvas instanceof HTMLCanvasElement))
    throw new Error('No canvas found')

  // Initialise the WebGL2 context
  const gl = canvas.getContext('webgl2')

  // Only continue if WebGL is available and working
  if (!gl) throw new Error('Could not initialize Web2GL')

  // Initialize a new shader program, by compiling the vertex & fragment shaders,
  // linking them, and looking up data location.
  const program = function initializeProgram () {
    // Uploads the shader source (vertex or fragment) and compile the shader
    function loadShader (
      type /* gl.VERTEX_SHADER or gl.FRAGMENT_SHADER */,
      source /* the .glsl source */,
    ) {
      const shader = gl.createShader(type)
      if (!shader) throw new Error('could not create shader')

      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(
          gl.getShaderInfoLog(shader) ?? 'could not compile shader')
      }

      return shader
    }

    const vertShader = loadShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragShader = loadShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

    const program = gl.createProgram()

    if (!program) {
      gl.deleteShader(vertShader)
      gl.deleteShader(fragShader)
      throw new Error('could not create shader program')
    }

    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteShader(vertShader)
      gl.deleteShader(fragShader)
      const errorMessage = gl.getProgramInfoLog(program)
      gl.deleteProgram(program)
      throw new Error(errorMessage ?? 'could not link program')
    }

    gl.useProgram(program)

    return program
  }()

  // Look up attributes & uniforms
  const shaderInputs = function lookupShaderInputs () {
    // Look up the locations for attribute & uniforms
    const aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition')

    if (aVertexPosition < 0)
      throw new Error('shader attribute aVertexPosition not found')

    const perm = gl.getUniformLocation(program, 'perm')
    const gradP = gl.getUniformLocation(program, 'gradP')
    const inc = gl.getUniformLocation(program, 'inc')
    const numCells = gl.getUniformLocation(program, 'numCells')
    const zoff = gl.getUniformLocation(program, 'zoff')
    const uMouse = gl.getUniformLocation(program, 'uMouse')
    const mouseInteractionBoundary = gl.getUniformLocation(program,
      'mouseInteractionBoundary')

    return {
      aVertexPosition,
      perm,
      gradP,
      inc,
      numCells,
      zoff,
      uMouse,
      mouseInteractionBoundary,
    }
  }()

  // Generate vertex data for a rectangle covering the whole canvas using clip coordinates.
  const vertices = function generateTriangleVertices () {
    const cellSize = 2 / numCells
    const vertices = []

    // For each rectangular cell, create two triangles
    for (let y = 0; y < 2; y += cellSize) {
      for (let x = -1; x < 1; x += cellSize) {
        // First triangle
        vertices.push(x, 1 - y)
        vertices.push(x, 1 - (y + cellSize))
        vertices.push(x + cellSize, 1 - y)

        // Second triangle
        vertices.push(x, 1 - (y + cellSize))
        vertices.push(x + cellSize, 1 - (y + cellSize))
        vertices.push(x + cellSize, 1 - y)
      }
    }

    return new Float32Array(vertices)
  }()

  // Create a Vertex Buffer Object to send vertex data to the vertex shader.
  const vbo = gl.createBuffer()
  if (!vbo) throw new Error('Could not create VBO')
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo)

  // Load the data
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

  // Bind the data in the VBO to the vertex shader's 'aVertexPosition' attribute.
  gl.vertexAttribPointer(
    shaderInputs.aVertexPosition,
    2 /* values per vertex (X & Y) */,
    gl.FLOAT /* the values are floats (32bits) */,
    false /* do not normalize the values */,
    0 /* assume contiguous data & infer stride (2 * sizeof float)*/,
    0 /* start at offset = 0 */,
  )

  // Enable attributes since they are disabled by default
  gl.enableVertexAttribArray(shaderInputs.aVertexPosition)

  // Set up the all the uniforms for the vertex shader
  gl.uniform1iv(shaderInputs.perm, perm)
  gl.uniform3fv(shaderInputs.gradP, gradP.flatMap(g => [g.x, g.y, g.z]))
  gl.uniform1f(shaderInputs.inc, inc)
  gl.uniform1f(shaderInputs.numCells, numCells)
  gl.uniform1f(shaderInputs.zoff, zoff)
  gl.uniform2f(shaderInputs.uMouse, mouse.x, mouse.y)
  gl.uniform1f(shaderInputs.mouseInteractionBoundary, mouseInteractionBoundary)

  function resizeCanvasToDisplaySize (canvas) {
    // Get the size the browser is displaying the canvas in device pixels.
    const [displayWidth, displayHeight] = canvasToDisplaySizeMap.get(canvas)

    // Check if the canvas is not the same size.
    const needResize = canvas.width !== displayWidth ||
      canvas.height !== displayHeight

    if (needResize) {
      // Make the canvas the same size
      canvas.width = displayWidth
      canvas.height = displayHeight
    }

    return needResize
  }

  function render () {
    resizeCanvasToDisplaySize(gl.canvas)
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    // Inject the current "time" and mouse coordinates into vertex shader
    gl.uniform1f(shaderInputs.zoff, zoff)
    gl.uniform2f(shaderInputs.uMouse, mouse.x * 4 - 1, -(mouse.y * 4 - 1))

    // With bound buffer, draw the data
    // NOTE: because our the vertices cover the entire canvas gl.clear() isn't required
    // since every pixel will be rewritten
    gl.drawArrays(
      gl.TRIANGLES /* draw triangles */,
      0 /* Start at 0th value in VBO */,
      numCells * numCells * 6/* draw enough vertices to fill canvas */,
    )

    // Ask the browser to call us back soon
    requestAnimationFrame(render)
  }

  // Call render function to kick-start the animation loop
  requestAnimationFrame(render)

  // Increment zoff to advance the animation
  setInterval(() => {zoff += zinc}, 1000 / 60)

  // Resize observer to ensure canvas is always fills window
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      let width
      let height
      let dpr = window.devicePixelRatio
      if (entry.devicePixelContentBoxSize) {
        // NOTE: Only this path gives the correct answer. The other 2 paths are an imperfect fallback
        // for browsers that don't provide anyway to do this
        width = entry.devicePixelContentBoxSize[0].inlineSize
        height = entry.devicePixelContentBoxSize[0].blockSize
        dpr = 1 // it's already in width and height
      } else if (entry.contentBoxSize) {
        if (entry.contentBoxSize[0]) {
          width = entry.contentBoxSize[0].inlineSize
          height = entry.contentBoxSize[0].blockSize
        } else {
          // legacy
          width = entry.contentBoxSize.inlineSize
          height = entry.contentBoxSize.blockSize
        }
      } else {
        // legacy
        width = entry.contentRect.width
        height = entry.contentRect.height
      }
      const displayWidth = Math.round(width * dpr)
      const displayHeight = Math.round(height * dpr)
      canvasToDisplaySizeMap.set(entry.target, [displayWidth, displayHeight])
    }
  })
  resizeObserver.observe(canvas, { box: 'content-box' })
})()