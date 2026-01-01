function berechne() {
    const value = Number(document.getElementById("user-input").value);
    console.log(value)
    const result = value * 10;
     document.getElementById("apfel").innerHTML = result;
  }





// let für Werte die sich ändern. const für konstante Werte
let count = 0
let disp = document.getElementById("display");

function myFunction(){
    console.log("hello world")
    console.log("clicked " + count + " times...")
    count ++; // oder count = count + 1;
    disp.innerHTML = count;
    // disp.style.borderColor = random_rgba();
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
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function crazyAction(){
    console.log("bald ist weihnachten! hohoho")
    let button = document.getElementById("increase-button")
    button.style.borderWidth = "100px";
}