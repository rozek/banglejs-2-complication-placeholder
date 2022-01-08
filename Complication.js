(function () {
  require('https://raw.githubusercontent.com/rozek/banglejs-2-fillroundrect/main/fillRoundRect.js');

  exports.draw = function draw (x,y, Radius, Settings) {
    g.setColor('#808080');

    let halfScreenWidth = g.getWidth() / 2;
    if (x === halfScreenWidth) {
      g.fillRoundRect(x-2*Radius,y-Radius, x+2*Radius,y+Radius, Radius);
    } else {
      g.fillCircle(x,y, Radius);
    }
  };
})();
