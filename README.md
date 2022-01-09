# banglejs-2-complication-placeholder #

just a placeholder for the complications of an analog clock on Bangle.js 2

Instead of a real "complication", this module just draws a placeholder for such a complication into the face of an analog clock running on a [Bangle.js 2](https://www.espruino.com/Bangle.js2).

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let Complication = require('https://raw.githubusercontent.com/rozek/banglejs-2-complication-placeholder/main/Complication.js');
```

Whenever needed, the module's exported `draw` method will then be invoked as follows:

```
Complication.draw(x,y, Radius, Settings);
```

## License ##

[MIT License](LICENSE.md)
