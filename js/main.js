window.addEventListener("DOMContentLoaded", ()=>{

  const visualWrap = document.querySelector("#visual_wrap")
  const visualLi = document.querySelectorAll("#visual_list>li")
  
  // gsap.set(visualLi[1], {opacity:0}) //첫번째 비주얼 투명도 0
  // gsap.set(visualLi[2], {opacity:0}) //두번째 비주얼 투명도 0

  //let autoplay=null
  let currentIndex=0 //현재 순번
  let nextIndex=1;
  let visualLiLength=visualLi.length
  let visualWidth=visualWrap.offsetWidth
  
  gsap.set(visualLi, {opacity:0})
  gsap.set(visualLi[0], {opacity:1})

  //비주얼부분 일정시간 지나면 첫번째 화면은 서서히 투명도가 0이되고
  //다음 비주얼부분이 보여지게 그다음 3초지나면 다시 투명도 0


  setInterval(slideVisual, 5000)


  function slideVisual(){
    nextIndex=currentIndex+1;
    if(nextIndex>=visualLiLength){
      nextIndex=0;
    }

    gsap.to(visualLi[currentIndex], {opacity:0, duration:3, delay:3,  ease:"power1.out"})
    gsap.to(visualLi[nextIndex], {opacity:1, duration:3, delay:3,  ease:"power1.out"})

    currentIndex=nextIndex; 
  }
  

})

