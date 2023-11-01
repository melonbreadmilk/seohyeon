$(document).ready(function(){
  let mobileBtn = $('.mobile-btn'),
      navMobile = $('.nav-mobile'),
      layerMask = $('.layer-mask');
  // Mobile Menu
  mobileBtn.click(function(e){
    e.preventDefault();
    let tmp = $(this).hasClass('mobile-btn-active')
    if(tmp){
      $(this).removeClass('mobile-btn-active')
      navMobile.removeClass('active')
      layerMask.removeClass('active')
    }else{
      $(this).addClass('mobile-btn-active')
      navMobile.addClass('active')
      layerMask.addClass('active')
    }
  })
  // window-mask 클릭시
  layerMask.click(function(){
    mobileBtn.removeClass('mobile-btn-active')
    navMobile.removeClass('active')
    layerMask.removeClass('active')
  })

  // 화면사이즈체크
  $(window).resize(function(){
    let tmp = $(window).width()
    if(tmp > 960) {
      mobileBtn.removeClass('mobile-btn-active')
      navMobile.removeClass('active')
      layerMask.removeClass('active')
    }
  })
  // 주메뉴 클릭시 스크롤
  const $menu = $('header ul li'),
        $contents = $('section')
        console.log($contents)
  $menu.click(function(){
    $(this).addClass('on')
    // 메뉴의 해당 li의 인덱스 번호구하기
    let idx = $(this).index()
    let $section = $contents.eq(idx)
    // 현재선택된 section의 위치정보(top)
    let sectionDistance = $section.offset().top - 114
    console.log(sectionDistance)
    $('html, body').animate({
      scrollTop:sectionDistance
    })
  })
  // 윈도우를 스크롤할 때
  $(window).scroll(function(){
    $contents.each(function(){
      console.log($(this).offset().top, $(window).scrollTop()+114)
      if($(this).offset().top <= $(window).scrollTop()+114) {
        let idx = $(this).index();
        $menu.removeClass("on")
        $menu.eq(idx).addClass("on")
        $('.menu-mobile li').removeClass("active")
        $('.menu-mobile li').eq(idx).addClass("active")
      }
    })
  })
//모바일 메뉴 클릭 시 스크롤
const menuMobile = $('.menu-mobile li')
menuMobile.click(function(){
  // console.log("클릭!")
  $(this).addClass("active")
  let idx = $(this).index()
  // console.log(idx)
  let $section = $contents.eq(idx)
  let sectionDistance = $section.offset().top - 114
  // - header 값
  // console.log(sectionDistance)
  $('html, body').animate({
    scrollTop: sectionDistance
  })
})
})