document.addEventListener("DOMContentLoaded", ()=>{

  const headerWrap=document.querySelector("#header_wrap")
  const mainMenu=document.querySelectorAll("#mainmenu_list>li>a")
  const subMenu=document.querySelectorAll(".submenu_list")

  let selectedmenu=null
  let openHeight=300 //메인메뉴 마우스 올렸을시 헤더웹300
  let closeHeight=150 // 헤더웹 마우스 나갔을시 헤더웹 150


  for(item of mainMenu){
    item.addEventListener("mouseenter", subMenuOpen)
  }
  for(item of subMenu){
    item.addEventListener("mouseenter", subMenuEffect)
  }
  headerWrap.addEventListener("mouseleave", subMenuClose)

  function subMenuOpen(){
    activateMenu(this)
  }

  function activateMenu(menu){
    if(selectedmenu!=null && selectedmenu!=menu){
      selectedmenu.parentElement.classList.remove("selected")
    }

    if(selectedmenu!=menu){
      selectedmenu=menu
      selectedmenu.parentElement.classList.add("selected")
    }

    gsap.to(headerWrap, {height:openHeight, duration:0.5 , ease:"power1.out"})

  }
  function subMenuClose(){ //마우스가 헤더영역을 벗어났을때 서브메뉴 닫히게
    gsap.to(headerWrap, {height:closeHeight, duration:0.5 , ease:"power1.out"})
  }
  function subMenuEffect(){ //서브메뉴 영역에 마우스가 옮겨졌을때 잡히는 배경화면 영역도 바뀌게
    activateMenu(this)
  }

})

