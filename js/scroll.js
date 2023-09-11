window.addEventListener("load", ()=>{

    const quickServiceText=document.querySelector("#quickservice_text")
    const quickServiceList=document.querySelectorAll("#quickservice_list>li")
    
    const artspaceButton=document.querySelector("#artspace_button")
    const artspaceInfoTitle=document.querySelector("#artspace_info_title")
    const artspaceInfoText=document.querySelector("#artspace_info_text")
    const artspaceLearnmore=document.querySelector("#artspace_learnmore")
    const artspaceList=document.querySelectorAll("#artspace_contents_list>li")
    
    const festivalTitle=document.querySelector("#festival_maintitle")
    const festivalSubText=document.querySelector("#festival_subtext")
    const festivalList=document.querySelectorAll("#festival_list>li")

    const cultureWrap=document.querySelector("#culture")
    const prevBtn=document.querySelector("#prev_btn")
    const nextBtn=document.querySelector("#next_btn")

    const partnerList=document.querySelectorAll("#partner_list>li")
    
    const newsletterWrap=document.querySelector("#newsletter")

    const aboutWrap=document.querySelector("#about")

   


    
    window.addEventListener("scroll", scrollWindowEvent)
   
    function scrollWindowEvent(){
        
        let scrollHeight=window.pageYOffset

        //퀵서비스 영역
        if(scrollHeight>200){
            gsap.to(quickServiceText, {opacity:1, duration:5, ease:"power1.out", onComplete:()=>{}})
            
            for(i=0; i<quickServiceList.length; i++){
                gsap.to(quickServiceList[i], {opacity:1, top:0, duration:1.5, delay:i*0.2, ease:"power1.out"})
            }
        }else if(scrollHeight<200){
            gsap.to(quickServiceText, {opacity:0, duration:0.5, ease:"power1.out"})
            
            for(i=0; i<quickServiceList.length; i++)
                gsap.to(quickServiceList[i], {opacity:0, top:-100, duration:1.5, delay:i*0.2, ease:"power1.out"})
        }



        //아트 스페이스 영역
        if(scrollHeight>500){
            gsap.to(artspaceButton, {opacity:1, duration:1, ease:"power1.out"})

            gsap.to(artspaceInfoTitle, {opacity:1, duration:1, ease:"power1.out", onComplete:()=>{
               gsap.to(artspaceInfoText, {opacity:1, duration:0.5, ease:"power1.out", onComplete:()=>{
                for(i=0; i<artspaceList.length; i++){
                    gsap.to(artspaceList[i], {opacity:1, duration:1, delay:i*0.5, ease:"power1.out", onComplete:()=>{
                        gsap.to(artspaceLearnmore, {opacity:1, duration:3, delay:1, ease:"power1.out"})
                    }})
                }
               }})
            }})
        }

        //축제 영역
        if(scrollHeight>1200){
            gsap.to(festivalTitle, {opacity:1, duration:1, ease:"power1.out"})
            gsap.to(festivalSubText, {opacity:1, duration:1, ease:"power1.out", onComplete:()=>{
                for(i=0; i<festivalList.length; i++){
                   gsap.to(festivalList[i], {opacity:1, top:0, duration:1, delay:i*0.5, ease:"power1.out"})
                }
            }})
        }else if(scrollHeight<1000){
            gsap.to(festivalTitle, {opacity:0, duration:1, ease:"power1.out"})
            gsap.to(festivalSubText, {opacity:0, duration:1, ease:"power1.out"})
                for(i=0; i<festivalList.length; i++){
                    gsap.to(festivalList[i], {opacity:0, top:150, duration:1, delay:i*0.5, ease:"power1.out"})
                }
        }

        //컬쳐 슬라이드 영역
        if(scrollHeight>1900){
            gsap.to(cultureWrap, {opacity:1, duration:2.5, ease:"power1.out"})
            gsap.to(prevBtn, {opacity:1, duration:2.5, ease:"power1.out"})
            gsap.to(nextBtn, {opacity:1, duration:2.5, ease:"power1.out"})
        }else if(scrollHeight<1900){
            gsap.to(cultureWrap, {opacity:0, duration:1.5, ease:"power1.out"})
            gsap.to(prevBtn, {opacity:0, duration:1.5, ease:"power1.out"})
            gsap.to(nextBtn, {opacity:0, duration:1.5, ease:"power1.out"})
        }

        //협력 파트너사 영역
        if(scrollHeight>2600){
            for(i=0; i<partnerList.length; i++){
                gsap.to(partnerList[i], {opacity:1, top:0, duration:1.5, delay:i*0.3})
            }
        }else if(scrollHeight<2500){
            for(i=0; i<partnerList.length; i++){
                gsap.to(partnerList[i], {opacity:0, top:-100, duration:1.5, delay:i*0.3})
            }
        }

        //뉴스 레터 영역
        if(scrollHeight>2700){
            gsap.to(newsletterWrap, {opacity:1, duration:3, ease:"power1.out"})
        }else if(scrollHeight<2600){
            gsap.to(newsletterWrap, {opacity:0, duration:1, ease:"power1.out"})
        }

        //어바웃 footer영역
        if(scrollHeight>3000){
            gsap.to(aboutWrap, {opacity:1, duration:3, ease:"power1.out"})
        }else if(scrollHeight<2900){
            gsap.to(aboutWrap, {opacity:0, duration:1, ease:"power1.out"})
        }
    }
})

