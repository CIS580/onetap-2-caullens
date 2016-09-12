"use strict";

/**
 * @module exports the Monster class
 */
module.exports = exports = Monster;

/**
 * @constructor Monster
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function Monster(position) {
  this.frame = 0;
  this.timer = 0;
  this.x = position.x;
  this.y = position.y;
  this.width  = 16;
  this.height = 16;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/smushroom.png');
}

/**
 * @function updates the monster object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Player.prototype.update = function(elapsedTime) {
	this.timer += elapsedTime;
	if(this.timer > 1000/16) {
		this.frame = (frame + 1) % 6;
		this.timer = 0;
	}
	this.x++;
	break;
	}
}

/**
 * @function renders the monster into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Player.prototype.render = function(time, ctx) {
  ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    this.frame*width, 0, this.width, this.height,
    // destination rectangle
    this.x, this.y, this.width, this.height
  );
}