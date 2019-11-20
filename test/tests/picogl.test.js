///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2019 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////

import {PicoGL} from "../../src/picogl.js";

glTest("PicoGL", (t) => {
    t.ok(PicoGL, "PicoGL was loaded");
    t.ok(typeof PicoGL.FLOAT === "number", "PicoGL.FLOAT is a number");
    t.ok(typeof PicoGL.COMPRESSED_SRGB_S3TC_DXT1_EXT === "number", "PicoGL.COMPRESSED_SRGB_S3TC_DXT1_EXT is a number");
    t.done();
});

glTest("PicoGL.createApp", (t, canvas) => {
    let app = PicoGL.createApp(canvas);

    t.ok(app, "App was created");
    t.ok(typeof PicoGL.WEBGL_INFO.MAX_TEXTURE_UNITS === "number", "WEBGL_INFO initialized");
    t.done();
});
