var SideScroller = SideScroller || {};

//title screen
SideScroller.MainMenu = function(){};

SideScroller.MainMenu.prototype = {
  init: function(score) {
    var score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
   },
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'castle');
    
    //give it speed in x
    this.background.autoScroll(-20, 0);

    //start game text
    var text = "HTML5 Game for Muse Headband";
    var style = { font: "30px Trebuchet MS", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);

    //start game text
    var text = "Tap to begin";
    var style = { font: "15px Trebuchet MS", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2 + 75, text, style);
    t.anchor.set(0.5);

    //highest score
    text = "High score: "+this.highestScore;
    style = { font: "15px Trebuchet MS", fill: "#fff", align: "center" };
  
    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 150, text, style);
    h.anchor.set(0.5);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.playerScore = 0;
      this.game.state.start('Game', true, false, "0");
    }
  }
};