

// 문서 정리 이벤트
$(function() {

    // 메인 메뉴 - 마우스 올렸을 때
    $('.mainmenu').on('mouseover', function() {
        
        $('header').addClass('active')
        $('.submenu').removeClass('active')
        $(this).children('.submenu').addClass('active')
    })

    // 메인 메뉴 - 마우스 벗어날 때
    $('.mainmenu').on('mouseleave', function() {
        $('header').removeClass('active')
        $('.submenu').removeClass('active')
    })

})