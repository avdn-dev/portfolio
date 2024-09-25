#version 300 es

precision highp float;

in vec2 aVertexPosition;

// Refer to descriptions in shader.js
uniform float inc;
uniform float numCells;
uniform float zoff;
uniform vec2 uMouse;
uniform float mouseInteractionBoundary;

// Permutation table
uniform int perm[256];
uniform vec3 gradP[256];

// Skewing and unskewing factors for 3 dimensions
const float F3 = 1.0 / 3.0;
const float G3 = 1.0 / 6.0;

// Resulting value for color in fragment shader
flat out float c;

/*
 * A speed-improved simplex noise algorithm for 3D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to GLSL by Anh Nguyen.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */
float simplex3(float xin, float yin, float zin) {
    float n0, n1, n2, n3;

    // Skew the input space to determine which simplex cell we're in
    float s = (xin + yin + zin) * F3;
    float i = floor(xin + s);
    float j = floor(yin + s);
    float k = floor(zin + s);

    float t = (i + j + k) * G3;
    float x0 = xin - i + t;
    float y0 = yin - j + t;
    float z0 = zin - k + t;

    // Determine which simplex we are in
    float i1, j1, k1;
    float i2, j2, k2;

    if (x0 >= y0) {
        if (y0 >= z0) {
            i1 = 1.0; j1 = 0.0; k1 = 0.0;
            i2 = 1.0; j2 = 1.0; k2 = 0.0;
        } else if (x0 >= z0) {
            i1 = 1.0; j1 = 0.0; k1 = 0.0;
            i2 = 1.0; j2 = 0.0; k2 = 1.0;
        } else {
            i1 = 0.0; j1 = 0.0; k1 = 1.0;
            i2 = 1.0; j2 = 0.0; k2 = 1.0;
        }
    } else {
        if (y0 < z0) {
            i1 = 0.0; j1 = 0.0; k1 = 1.0;
            i2 = 0.0; j2 = 1.0; k2 = 1.0;
        } else if (x0 < z0) {
            i1 = 0.0; j1 = 1.0; k1 = 0.0;
            i2 = 0.0; j2 = 1.0; k2 = 1.0;
        } else {
            i1 = 0.0; j1 = 1.0; k1 = 0.0;
            i2 = 1.0; j2 = 1.0; k2 = 0.0;
        }
    }

    // Offsets for remaining corners
    float x1 = x0 - i1 + G3;
    float y1 = y0 - j1 + G3;
    float z1 = z0 - k1 + G3;
    float x2 = x0 - i2 + 2.0 * G3;
    float y2 = y0 - j2 + 2.0 * G3;
    float z2 = z0 - k2 + 2.0 * G3;
    float x3 = x0 - 1.0 + 3.0 * G3;
    float y3 = y0 - 1.0 + 3.0 * G3;
    float z3 = z0 - 1.0 + 3.0 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    int i_index = int(i) & 255;
    int j_index = int(j) & 255;
    int k_index = int(k) & 255;

    vec3 gi0 = gradP[(i_index + perm[(j_index + perm[k_index]) % 256]) % 256];
    vec3 gi1 = gradP[(i_index + int(i1) + perm[(j_index + int(j1) + perm[k_index + int(k1)]) % 256]) % 256];
    vec3 gi2 = gradP[(i_index + int(i2) + perm[(j_index + int(j2) + perm[k_index + int(k2)]) % 256]) % 256];
    vec3 gi3 = gradP[(i_index + 1 + perm[(j_index + 1 + perm[k_index + 1]) % 256]) % 256];

    // Calculate the contribution from the four corners
    float t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0.0) {
        n0 = 0.0;
    } else {
        t0 *= t0;
        n0 = t0 * t0 * dot(gi0, vec3(x0, y0, z0));
    }

    float t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0.0) {
        n1 = 0.0;
    } else {
        t1 *= t1;
        n1 = t1 * t1 * dot(gi1, vec3(x1, y1, z1));
    }

    float t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0.0) {
        n2 = 0.0;
    } else {
        t2 *= t2;
        n2 = t2 * t2 * dot(gi2, vec3(x2, y2, z2));
    }

    float t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0.0) {
        n3 = 0.0;
    } else {
        t3 *= t3;
        n3 = t3 * t3 * dot(gi3, vec3(x3, y3, z3));
    }

    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [0,1].
    return (32.0 * (n0 + n1 + n2 + n3) + 1.0) / 2.0;
}

// Maps a value from clip space to the range [0, numCells] for calculating noise
float mapClipSpace(float value) {
    return ((value - (-1.0)) / (1.0 - (-1.0))) * (numCells - 1.0) + 0.0;
}

void main() {
    // gl_Position is the ouput, which we simply return
    gl_Position = vec4(aVertexPosition, 0.0, 1.0);

    float xoff = mapClipSpace(aVertexPosition.x) * inc;
    float yoff = mapClipSpace(aVertexPosition.y) * inc;
    c = simplex3(xoff, yoff, zoff);

    // Vertices around the mouse have their color modified
    float mouseDistance = distance(aVertexPosition, uMouse);
    if (mouseDistance < mouseInteractionBoundary) {
        // Color is more affected the closer the mouse is
        c += pow((mouseDistance - mouseInteractionBoundary) / -mouseInteractionBoundary, 2.5);
        // Clamp color to [0, 1]
        c = min(c, 1.0);
    }
}