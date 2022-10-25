const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchButn=body.querySelector(".search-box")
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchButn.addEventListener("click",()=>{
    sidebar.classList.remove("close");
})


let getMode = localStorage.getItem("status");
if(getMode && getMode==="dark"){
    body.classList.toggle("dark")
}

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        localStorage.setItem = ("mode","dark");
    }else{
        localStorage.setItem = ("mode","light");;
        
    }
});