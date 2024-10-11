let count = 0
let disp = document.getElementById("display");

function myFunction(){
    console.log("hello world")
    console.log("clicked " + count + " times...")
    count ++;
    disp.innerHTML = count;
}
