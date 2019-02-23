class dot {
  constructor(x_pos, y_pos) {
    this.dot_height = 50;
    this.dot_width = 50;
    this.x_pos = x_pos;
    this.y_pos = y_pos;
  }
  update() {
    ellipse(this.x_pos, this.y_pos, this.dot_height, this.dot_width);
  }

}
