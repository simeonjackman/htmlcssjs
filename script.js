let count = 0
let disp = document.getElementById("display");

function myFunction(){
    console.log("hello world")
    console.log("clicked " + count + " times...")
    count ++;
    disp.innerHTML = count;
}

function changeBackgroundColor(obj){
    document.body.style.backgroundColor = random_rgba()
    console.log(obj)

    // color = document.body.style.backgroundColor
    // if (color != "lightblue"){
    //     document.body.style.backgroundColor = "lightblue"
    // } else {
    //     document.body.style.backgroundColor = "white"
    // }
}


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}