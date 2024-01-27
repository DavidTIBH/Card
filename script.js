function toggleMode(){
const html = document.documentElement
html.classList.toggle('Light')
//pegar a tag img
const img = document.querySelector(".avatar img")
//substituir a imagem
if(html.classList.contains("Light")){
    //se tiver light mode, adicionar a imagem light
img.setAttribute("src","./assets/avatar-light.png")
}else{
//set tiver sem light mode, manter a imagem normal    
img.setAttribute("src","./assets/avatar-dark.png")
}
}