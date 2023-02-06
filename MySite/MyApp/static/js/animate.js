var moved = false;
function move() {
    var logo = document.getElementById("Logo");
    var position = 0;
    if (!moved) {
        logo.animate({ 'left': '0px' }, { duration, 400});
        moved = true;
    }
}