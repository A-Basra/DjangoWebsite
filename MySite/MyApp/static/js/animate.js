var moved = false;
function move() {
    while (!moved){
        var logo = document.getElementById("Logo");
            logo.animate([
            { 'left': '50vw' , 'top': '25vh'},
            { 'left': '5vw', 'top':'7.5vh'}
            ],
            { duration: 1000});
            logo.style.left = "5vw"
            logo.style.top = "7.5vh"
            moved = true;
        }
    return true;
}
expanded =false
function expandBg(){
    var bg = document.getElementById("background");
    if (!expanded) {
        bg.animate([
        { 'width': '1vw'},
        { 'width': '90vw'}
        ],
        { duration: 1000});
        bg.style.width = "90vw"
        expanded = true;
    }
}