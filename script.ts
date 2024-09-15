const toggle_Button= document.getElementById("toggle-skills") as HTMLButtonElement;
const skill=document.getElementById("skills")as HTMLElement;
toggle_Button.addEventListener('click',()=>{
    if(skill.style.display === "none"){
        skill.style.display = "block"
    }
    else{
        skill.style.display ="none"
    }
});