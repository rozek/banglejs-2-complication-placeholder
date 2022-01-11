(function () {
  require('https://raw.githubusercontent.com/rozek/banglejs-2-drawroundrect/main/drawRoundRect.js');

  function drawWithLabel (Label, x,y, Radius, Settings) {
    let halfScreenWidth = g.getWidth() / 2;

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.setFont('Vector', 18);
    g.setFontAlign(0,0);

    if (x === halfScreenWidth) {
      g.drawRoundRect(x-3*Radius,y-Radius, x+3*Radius,y+Radius, Radius);
    } else {
      g.drawCircle(x,y, Radius);
    }

    if (Label != null) {
      g.drawString(Label, x+2,y); // as font alignment does not work properly...
    }
  }

  exports.draw = drawWithLabel.bind(this,null);

  exports.withLabel = function withLabel (Label) {
    return { draw:drawWithLabel.bind(this,Label) };
  };
})();
