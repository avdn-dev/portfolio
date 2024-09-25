#version 300 es

precision highp float;

flat in float c;
out vec4 fragColor;
vec4 color1 = vec4(0.0, 0.424, 0.98, 1.0);
vec4 color2 = vec4(0.404, 0.361, 1.0, 1.0);
vec4 color3 = vec4(0.655, 0.2, 1, 1);
vec4 color4 = vec4(0.859, 0, 0.631, 1);

/* Gradient noise from Jorge Jimenez's presentation: */
/* http://www.iryoku.com/next-generation-post-processing-in-call-of-duty-advanced-warfare */
float gradientNoise(in vec2 uv)
{
    return fract(52.9829189 * fract(dot(uv, vec2(0.06711056, 0.00583715))));
}

void main() {
    if (c < 0.333333333) {
        fragColor = mix(color1, color2, c * 3.0);
    } else if (c < 0.666666666) {
        fragColor = mix(color2, color3, (c - 0.333333333) * 3.0);
    } else {
        fragColor = mix(color3, color4, (c - 0.666666666) * 3.0);
    }

    // To remove color banding
    fragColor += (1.0 / 255.0) * gradientNoise(gl_FragCoord.xy) - (0.5 / 255.0);
}
