  let Placeholder = require('https://raw.githubusercontent.com/rozek/banglejs-2-complication-placeholder/main/Complication.js');

  let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

  Clockwork.windUp({
    face:  require('https://raw.githubusercontent.com/rozek/banglejs-2-twelve-fold-face/main/ClockFace.js'),
    hands: require('https://raw.githubusercontent.com/rozek/banglejs-2-rounded-clock-hands/main/ClockHands.js'),
    complications:{
      tl:Placeholder.withLabel('tl'),
      r:Placeholder,
    }
  },{
    Foreground:'#FFFFFF', Background:'#000000',
    withDots:true
  });
