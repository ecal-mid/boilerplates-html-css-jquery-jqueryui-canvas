var canvas;
var ctx;
var w = 700;
var h = 700;
var r = 0;
var g = 10;
var prtcles = [];
//
$(document).ready(function() {
  Setup();
});
//
function Setup() {
  // jquery if needed
  canvas = document.getElementById('canvas');
  canvas.width = w;
  canvas.height = h;
  //
  ctx = canvas.getContext("2d");
  //
  window.requestAnimationFrame(Draw2)
}


function Draw() {
  //
  r+=0.01;
  //console.log(r);
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  //
  ctx.translate(w/2, h/2);
  ctx.rotate(r);
  ctx.fillStyle= "#0000ff";
  ctx.fillRect(-100,-100,200,200);
  //
  ctx.restore();
  //console.log("Ready");
  //
  window.requestAnimationFrame(Draw)
}











function Draw3() {
  //
  if(g<100) {

    g+=0.1;
  }
  //console.log(r);
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  //
  for(var i=0; i<g; i++) {
      ctx.strokeStyle= "#000";
      ctx.beginPath();
      ctx.moveTo(i*w/g,0);
      ctx.lineTo(i*w/g,h);
      ctx.stroke();
  }
  for(var i=0; i<g; i++) {
      ctx.strokeStyle= "#000";
      ctx.beginPath();
      ctx.moveTo(0,i*h/g);
      ctx.lineTo(w,i*h/g);
      ctx.stroke();
  }
  //
  ctx.restore();
  //console.log("Ready");
  //
  window.requestAnimationFrame(Draw3);
}












function Draw2() {
  //
  r+=0.001;
  //console.log(r);
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  //
  for(var i=0; i<10; i++) {
    ctx.translate(100, 0);
    ctx.rotate(r);
    ctx.scale(0.9, 0.9);
    ctx.fillStyle= "#0000ff";
    ctx.fillRect(-100,-20,200,40);
  }
  //
  ctx.restore();
  //console.log("Ready");
  //
  window.requestAnimationFrame(Draw2)
}




function Prtcle() {
    this.pos = {x: 0, y:0};
    this.vel = {x: Math.random()*2, y:Math.random()*2};
}
Prtcle.prototype.move = function() {
  this.pos.x+=this.vel.x;
  this.pos.y+=this.vel.y;
};
Prtcle.prototype.draw = function() {
  ctx.save();
  ctx.translate(this.pos.x, this.pos.y);
  ctx.fillStyle= "#0000ff";
  ctx.fillRect(-10, 10, 20, 20);
  ctx.restore();
};



function Draw4() {
  //
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  prtcles.push(new Prtcle());
  for(var i=0; i<prtcles.length; i++) {
    prtcles[i].move();
    prtcles[i].draw();
  }
  ctx.restore();

  window.requestAnimationFrame(Draw4)
}
