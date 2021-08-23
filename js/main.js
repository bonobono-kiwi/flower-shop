'use strict';
{
  const header = document.getElementById('header');
  const concept = document.getElementById('concept');
  const news = document.getElementById('news');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const wrap = document.getElementById('items-contents-wrap');
  const items = document.getElementById('items');
  const shopInfo = document.getElementById('shop-info');
  const footer = document.getElementById('footer');
  const item1 = document.getElementById('item1-bg');
  const item2 = document.getElementById('item2-bg');
  const item3 = document.getElementById('item3-bg');
  const item1Image = document.getElementById('item1');
  const item2Image = document.getElementById('item2');
  const item3Image = document.getElementById('item3');
  const item1Content = document.getElementById('item1-content');
  const item2Content = document.getElementById('item2-content');
  const item3Content = document.getElementById('item3-content');
  const dots= [];
  const slides = document.querySelectorAll('.item-theme');
  let currentIndex = 0;

  var itemsTopPosition = items.getBoundingClientRect().top;
  var shopInfoTopPosition = shopInfo.getBoundingClientRect().top;
  var footerTopPosition = footer.getBoundingClientRect().top;

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
        items.classList.add('show');
      }
      if(window.pageYOffset +500> shopInfoTopPosition){
        shopInfo.classList.add('show');
      }
      if(window.pageYOffset +500 > footerTopPosition){
        footer.classList.add('show');
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

    //カルーセルここから
    function setupDots(){
      for(let i=0; i<slides.length; i++ ){
        const button = document.createElement('button');
        button.addEventListener('click', ()=>{
          currentIndex= i;
          moveSlides();
          updateSlides();
          updateDots();
        });
        dots.push(button);
        document.getElementById('dots-wrap').appendChild(button);
      }
      dots[0].classList.add('current');
    }

    function updateDots(){
      dots.forEach(dot=>{
        dot.classList.remove('current');
      });
      dots[currentIndex].classList.add('current');

    }

    setupDots();
    updateSlides();

    function updateSlides(){
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
      }else if(currentIndex == -1){
        currentIndex = 2;
        wrap.style.transform = `translateX(${-100 * currentIndex}vw)`;
        item3Image.style.opacity =1;
        item3Content.style.opacity = 1;
      }
    }

    function moveSlides(){
      wrap.style.transform = `translateX(${-100 * currentIndex}vw)`;
    }

    next.addEventListener('click', ()=>{
      currentIndex++;
      moveSlides();
      updateSlides();
      updateDots();
    });
  
    prev.addEventListener('click', ()=>{
      currentIndex--;
      moveSlides();
      updateSlides();
      updateDots();
    });
    //カルーセルここまで

    //ロード後ふわっと現れるアニメーション
    function headerShow(){
      header.classList.add('show');
    }
    function conceptShow(){
      concept.classList.add('show');
    }
    function newsShow(){
      news.classList.add('show');
    }


    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(headerShow,400);
      setTimeout(conceptShow,600);
      setTimeout(newsShow,800);
   });


  }else{

    scrollPc();



  }
  

}
