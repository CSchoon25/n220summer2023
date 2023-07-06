function setup() {
    createCanvas(650, 300)
  }
  //background
  function draw() {
    background(191)

    //black circles
    noStroke()
    fill(0)

    //25 circles
    var size = 20;
    var space = 25;
    for (var i = 0; i < 25; i++) {
      var x = i * space + size
      var y = height/2

      //if divisible by both, blue square
     if(i % 3 === 0 && i % 5 === 0) {
        fill(0, 0, 255)
        rect(x - 10, y - 10, size, size)
      } //if divisible by 3, purple circle
      else if(i % 3 === 0) {
        fill(150, 0, 200)
        circle(x, y, size)
      } //if divisible by 5, green square
      else if(i % 5 === 0) {
        fill(0, 150, 0)
        rect(x - 10, y - 10, size, size)
      }   //if not divisble by either, black circle
      else {
        fill(0)
        circle(x, y, size)
      }
    }  
  }