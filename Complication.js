(function () {
  require('https://raw.githubusercontent.com/rozek/banglejs-2-drawroundrect/main/drawRoundRect.js');
  require('https://raw.githubusercontent.com/rozek/banglejs-2-fillroundrect/main/fillRoundRect.js');

  exports.draw = function draw (x,y, Radius, Settings) {
    let halfScreenWidth = g.getWidth() / 2;
    if (x === halfScreenWidth) {
      g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
      g.drawRoundRect(x-2*Radius,y-Radius, x+2*Radius,y+Radius, Radius);

      g.setColor('#808080');
      g.fillRoundRect(x-2*Radius,y-Radius, x+2*Radius,y+Radius, Radius);
    } else {
      g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
      g.drawCircle(x,y, Radius);

      g.setColor('#808080');
      g.fillCircle(x,y, Radius);
    }
  };
})();
