window.addEventListener("DOMContentLoaded", ()=>{
  
  const reservationWrap=document.querySelector("#culture_reservation")
  const cultureList=document.querySelector("#culture_list")
  const cultureLi=document.querySelectorAll("#culture_list>li")
  const prevBtn=document.querySelector("#prev_btn")
  const nextBtn=document.querySelector("#next_btn")
  const dot=document.querySelectorAll("#dot_list>li")
  



  
  let reservationWrapWidth=reservationWrap.offsetWidth
  let cultureLiLength=cultureLi.length
  // alert(cultureLiLength) 5
  let currentIndex=0; // 현재순번 0
  let selectedDot=dot[0]
  let autoSlide=null
 

  gsap.set(cultureLi, {opacity:0})
  gsap.set(cultureLi[0], {opacity:1})

  
  gsap.set(cultureLi, {left:reservationWrapWidth, opacity:0})
  gsap.set(cultureLi[0], {left:0, opacity:1})

  // cultureList.prepend(cultureList.lastElementChild)

  nextBtn.addEventListener("click", addVisualSlide)
  prevBtn.addEventListener("click", removeVisualSlide)
  for(item of dot){
    item.addEventListener("mouseenter", enterDot)
  }
  
  reservationWrap.addEventListener("mouseenter", stopAutoPlay)
  reservationWrap.addEventListener("mouseleave", startAutoPlay)

  window.addEventListener("resize", reservationResize) //리사이즈 할때


  function reservationResize(){
    reservationWrapWidth=reservationWrap.offsetWidth
    // alert(reservationWrapWidth)
  }
  autoPlay()

  function stopAutoPlay(){ //마우스 올라가면 멈춤
    clearInterval(autoSlide)
  }
  function startAutoPlay(){ // 마우스 떠나가면 다시시작
    autoPlay()
  }


  function enterDot(){
    nextIndex=getIndex(this)
    // alert(nextIndex)
    activateDot(nextIndex)
    // nextVisualSlide(nextIndex)
    // prevVisualSlide(nextIndex)
    if(nextIndex>currentIndex){
      nextVisualSlide(nextIndex)
    }else if(nextIndex<currentIndex){
      prevVisualSlide(nextIndex)
    }
  }
  function getIndex(checkMenu){
    let selectIndex=0
    while((checkMenu=checkMenu.previousElementSibling)!=null){
      selectIndex++
    }
    // alert(selectIndex)
    return selectIndex
  }
  function activateDot(index){
    if(selectedDot!=null && selectedDot!=dot[index]){
      selectedDot.classList.remove("selected")
    }

    if(selectedDot!=dot[index]){
      selectedDot=dot[index]
      selectedDot.classList.add("selected")
    }
  }


  function nextVisualSlide(index){
    // alert("text")
    gsap.to(cultureLi[currentIndex], {left:-reservationWrapWidth, opacity:0, duration:0.5, ease:"power1.out"})
    
    gsap.set(cultureLi[index], {left:reservationWrapWidth, opacity:0})
    gsap.to(cultureLi[index], {left:0, opacity:1, duration:0.5, ease:"power1.out"})

    currentIndex=index
  }
  function prevVisualSlide(index){
    gsap.to(cultureLi[currentIndex], {left:reservationWrapWidth, opacity:0, duration:0.5, ease:"power1.out"})

    gsap.set(cultureLi[index], {left:-reservationWrapWidth, opacity:0})
    gsap.to(cultureLi[index], {left:0, opacity:1, duration:0.5, ease:"power1.out",})

    currentIndex=index
  }

  function addVisualSlide(){
    nextIndex=currentIndex+1
    if(nextIndex>=cultureLiLength){
      nextIndex=0
    }
    nextVisualSlide(nextIndex)
    activateDot(nextIndex)
  }
  function removeVisualSlide(){
    nextIndex=currentIndex-1
    if(nextIndex<0){
      nextIndex=cultureLiLength-1
    }
    prevVisualSlide(nextIndex)
    activateDot(nextIndex)
  }

  function autoPlay(){
    autoSlide=setInterval(addVisualSlide, 5000)
  }

})