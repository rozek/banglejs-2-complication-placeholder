(function () {
  require('https://raw.githubusercontent.com/rozek/banglejs-2-drawroundrect/main/drawRoundRect.js');

  exports.draw = function draw (x,y, Radius, Settings) {
    let halfScreenWidth = g.getWidth() / 2;
    if (x === halfScreenWidth) {
      g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
      g.drawRoundRect(x-3*Radius,y-Radius, x+3*Radius,y+Radius, Radius);
    } else {
      g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
      g.drawCircle(x,y, Radius);
    }
  };
})();
