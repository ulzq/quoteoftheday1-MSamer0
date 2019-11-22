var quotes = [
  "Either you run the day or the day runs you!",
  "Strength is Weakness",
  "Feel the code",
  "May the source be with you",
  "DCI, everything is possible ;)",
  "Whether you think you or you think you can’t, you’re right",
  "Aim for failure and you always succeed"
]
var para = document.getElementById ("quote")
function mayFunction (){
    para.innerHTML= quotes[Math.round(Math.random()*7)]
}
var loader = document.createElement("div")
loader.classList.add("loader")
loader.style.border ="16px solid #F3F3F3";
loader.style.borderRadius ="50%";
loader.style.borderBottom = "16px solid blue";
loader.style.borderTop = "16px solid red";
loader.style.width = "120px";
loader.style.height = "120px";
loader.style.webkitAnimation = "spin 2s linear infinite";
loader.style.animation = "spin 2s linear infinite";
document.body.append(loader)
var loaderScreen
showLoadingScreen = () =>{
  loaderScreen = document.createElement('div')
  loaderScreen.classList.add('error')
  loaderScreen.innerHTML = 'hehehehe youe there i want say you are crazy'
  var button = document.createElement('button')
  button.innerText = 'reset'
  button.addEventListener('click',reset)
  loaderScreen.append(button)
  document.body.append(loaderScreen)
}
reset = (event)=>{
  loaderScreen.remove()
}
showLoadingScreen()
setTimeout(hideLoadingScreen,3000)
