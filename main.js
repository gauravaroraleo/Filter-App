function setup() {
    c1 = createCanvas(550, 550)
    v1 = createCapture(VIDEO)
    c1.center()
    v1.hide()
}

function draw() {
    image(v1, 0, 0, 550, 550)
    tint(tc)
    fill("red")
    circle(15, 15, 50)
    circle(535, 15, 50)
    circle(15, 536, 50)
    circle(535, 535, 50)
    fill("green")
    square(30, 10, 50)
        square(50, 10, 50)
        square(80, 10, 50)
    square(110, 10, 50)
    square(140, 10, 50)
    square(170, 10, 50)
    square(200, 10, 50)
    square(230, 10, 50)
    square(260, 10, 50)
    square(290, 10, 50)
    square(320, 10, 50)
    square(350, 10, 50)
    square(380, 10, 50)
    square(410, 10, 50)
    square(440, 10, 50)
    square(471, 10, 50)
    fill("blue")
      square(30, 500, 50)
        square(50, 500, 50)
        square(80, 500, 50)
    square(110, 500, 50)
    square(140, 500, 50)
    square(170, 500, 50)
    square(200, 500, 50)
    square(230, 500, 50)
    square(260, 500, 50)
    square(290, 500, 50)
    square(320, 500, 50)
    square(350, 500, 50)
    square(380, 500, 50)
    square(410, 500, 50)
    square(440, 500, 50)
    square(471, 500, 50)

}
var tc = "";

function choose_color() {
    tc = document.getElementById("cn").value

}

function take_snapshot() {
    save("selfie.png")

}
