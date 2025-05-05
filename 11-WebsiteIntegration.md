# Website Integration

Javascript as language is powerful but it's integration with web where it shines the most.

## Web APIs

In browser there is way more then just Javascript Engine. Whole range of [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) can be used.

Some of them can be used only in secured context **HTTPS**.

### Picture-in-Picture

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API)

Can be used for example on youtube videos.

### WebGL

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

Rendering 2D and 3D objects in browser.

### Web Speech

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

Using voice synthesizer to read parts of website.

## Window

Window is global object for web. Window contains **document** for current website (more in 12-DOM.md) and many useful functions for manipulating website and browser itself.

Windows is specific for current open tab - it is not possible from one to manipulate other, but there are options how to share information from one to another and act upon it.

### location

### localstorage

### alert

### fetch

### setInterval, setTimeout

Function `setInterval()` allows to run code periodically and function `setTimeout()` allows to run code after set time. This two functions operate quite similarly and are one of few ways how to run scripts (functions in them) independently.

Note: Execution context may be different then expected so `this` may return unexpected values.

Note: Timing on these functions is not exact.

Example in 11_WebsiteIntegration_RunningFunctions folder.
