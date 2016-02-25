var ball = {
  x: 20,
  y: 200,
  size: 15,
  speed: {
    x: 8,
    y: 8
  },

  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.x += this.speed.x; // this line is the same as: this.x = this.x + 1;
    this.y +=this.speed.y;
  },

  checkForBounce: function () {
    if (this.x > width - this.size / 2) this.bounceX();
    if (this.x < this.size / 2) this.bounceX();
    if (this.y > height - this.size / 2) this.bounceY();
    if (this.y < this.size / 2) this.bounceY();

  },

  bounce: function () {
    this.bounceX();
    this.bounceY();// your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
  },

  bounceX: function() {
    this.speed.x *= -1
  },

  bounceY: function() {
    this.speed.y *=-1
  }
};

var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(50); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
};
