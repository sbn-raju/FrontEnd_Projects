let btn = document.querySelector('button');
btn.addEventListener('click',function (){
    let color = getrandomcolor();
    let heading = document.querySelector('h1');
    heading.innerText = color;
    let div = document.querySelector('div');
    div.style.backgroundColor = color;
});



function getrandomcolor(){
    let red = Math.floor(Math.random() * 255);
    let yellow = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    
  let color = `rgb(${red},${yellow},${green})`
  return color;
}