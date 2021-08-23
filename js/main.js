'use strict';
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const wrap = document.getElementById('items-contents-wrap');
  const items = document.getElementById('items');
  const item1 = document.getElementById('item1-bg');
  const item2 = document.getElementById('item2-bg');
  const item3 = document.getElementById('item3-bg');
  const item1Image = document.getElementById('item1');
  const item2Image = document.getElementById('item2');
  const item3Image = document.getElementById('item3');
  const item1Content = document.getElementById('item1-content');
  const item2Content = document.getElementById('item2-content');
  const item3Content = document.getElementById('item3-content');
  let currentIndex = 0;

  var itemsTopPosition = items.getBoundingClientRect().top;

  function show1(){
    item1Image.style.opacity = 1;
    item1Content.style.opacity = 1;
  }
  function show2(){
    item2Image.style.opacity = 1;
    item2Content.style.opacity = 1;
  }
  function show3(){
    item3Image.style.opacity = 1;
    item3Content.style.opacity = 1;
  }

  
  function scrollSmartPhone(){
    window.addEventListener('scroll', ()=>{
      if(window.pageYOffset+650 > itemsTopPosition){
        item1Image.style.opacity = 1;
        item1Content.style.opacity = 1;
        item2Image.style.opacity = 1;
        item2Content.style.opacity = 1;
        item3Image.style.opacity = 1;
        item3Content.style.opacity = 1;
      }
    });
  }

  function scrollPc(){
    window.addEventListener('scroll', ()=>{
      if(window.pageYOffset+550 > itemsTopPosition){
        setTimeout(show1, 500);
        setTimeout(show2, 600);
        setTimeout(show3, 700);
        
        item1.style.left = 0;
        item2.style.left = 0;
        item3.style.left = 0;
      }
    });
  }






  var windowWidth = window.innerWidth;
  //スマホ画面
  if(windowWidth < 1025){

    scrollSmartPhone();

    next.addEventListener('click', ()=>{
      currentIndex++;
      wrap.style.transform = `translateX(${-100 * currentIndex}vw)`;
      item1Image.style.opacity =0;
      item1Content.style.opacity = 0;
      item2Image.style.opacity = 0;
      item2Content.style.opacity =0;
      item3Image.style.opacity = 0;
      item3Content.style.opacity = 0;
      if(currentIndex==0){
        item1Image.style.opacity =1;
        item1Content.style.opacity = 1;
      }else if(currentIndex == 1){
        item2Image.style.opacity = 1;
        item2Content.style.opacity =1;
      }else if(currentIndex == 2){
        item3Image.style.opacity = 1;
        item3Content.style.opacity = 1;
      }else if(currentIndex == 3){
        currentIndex = 0;
        wrap.style.transform = `translateX(${-100 * currentIndex}vw)`;
        item1Image.style.opacity =1;
        item1Content.style.opacity = 1;
      }
    });
  
    prev.addEventListener('click', ()=>{
      currentIndex--;
      wrap.style.transform = `translateX(${-100 * currentIndex}vw)`;
      item1Image.style.opacity =0;
      item1Content.style.opacity = 0;
      item2Image.style.opacity = 0;
      item2Content.style.opacity =0;
      item3Image.style.opacity = 0;
      item3Content.style.opacity = 0;
      if(currentIndex==0){
        item1Image.style.opacity =1;
        item1Content.style.opacity = 1;
      }else if(currentIndex == 1){
        item2Image.style.opacity = 1;
        item2Content.style.opacity =1;
      }else if(currentIndex ==2){
        item3Image.style.opacity = 1;
        item3Content.style.opacity = 1;
      }else if(currentIndex == -1){
        currentIndex = 2;
        wrap.style.transform = `translateX(${-100 * currentIndex}vw)`;
        item3Image.style.opacity = 1;
        item3Content.style.opacity = 1;  
      }
    });
  }else{

    scrollPc();



  }
  

}
