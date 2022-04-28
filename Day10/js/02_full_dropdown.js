

// 문서 정리 이벤트
$(function() {

    // 메인 메뉴 - 마우스 올렸을 때
    $('.mainmenu').on('mouseover', function() {
        // 선택한 메인 메뉴의 번호
        let index = $(this).index()
        let no = index + 1
        // :nth-of-type(n) : n 번째의 요소를 선택 - 1부터 시작
        // $('.submenu:nth-of-type(' + no +')').eq(index).stop().slideDown()
        // eq(index) : 여러 요소 중에서 index 번째의 요소를 선택
        // $('.submenu').eq(index).stop().slideDown()
    })

    // 메인 메뉴 - 마우스 벗어날 때
    $('.mainmenu').on('mouseleave', function() {
        let index = $(this).index()
        let no = index + 1
        // eq(index) : 여러 요소 중에서 index 번째의 요소를 선택
        // $('.submenu').eq(index).stop().slideUp()
        // $('.submenu:nth-of-type(' + no +')').eq(index).stop().slideUp()
    })

    // 메인 메뉴 - 클릭할 때
    $('.mainmenu').on('click', function() {
        let index = $(this).index()
        let no = index + 1

        // 선택한 메인메뉴에 'active' 클래스 추가
        $('.submenu').removeClass('active')
        $('.submenu').eq(index).addClass('active')      

        // 'active' 클래스를 제외하고 모두 숨김
        $('.submenu').not('.active').stop().hide()
        // 클릭한 메뉴만 슬라이드 전환
        $('.submenu').eq(index).stop().slideToggle()
    })
})