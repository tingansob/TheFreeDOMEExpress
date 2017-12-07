var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');
/*
c.fillStyle = "pink";
c.fillRect(100, 100, 10, 10);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 200);
c.strokeStyle = "yellow";
c.stroke();

// arc / circle
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.stroke();
console.log(canvas);
for (var i = 0; i < 150; i++ ) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2, false);
    c.strokeStyle = "rgb(155,212,57)";
    c.stroke();
}
*/
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "rgb(44,46,191)";
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
animate()
console.log(canvas);
