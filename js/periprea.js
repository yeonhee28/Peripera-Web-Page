$(function () {
    // 접속한 브라우저의 가로길이 가져오기
    let deivceWidth = $(window).width();

    // 태블릿과 모바일에서 메뉴 버튼을 클릭하면 내비게이션이 오른쪽에서 나타남
    $(".menu_icon").click(function () {
        $(".menu").animate({ 'right': 0 });
    });

    // 태블릿과 모바일에서 닫기 버튼을 클릭하면 내비게이션이 오른쪽으로 사라짐
    $(".close_icon").click(function () {
        $(".menu").animate({ 'right': "-100vw" });
    });

    //만약 접속한 브라우저의 가로길이가 1440미만이면 메뉴는 아코디언 메뉴로 작동함.
    if (deivceWidth < 1400) {
        $("nav > ul > li > a").click(function (e) {
            e.preventDefault();
            //만약 클릭한 메뉴에 active클래스 없다면
            if ($(this).attr("class") != "active") {
                // 모든 메뉴에서 acive를 제거
                $("nav > ul > li > a").removeClass("active");
                // 클릭한 메뉴만 active설정
                $(this).addClass("active");
                // 모든 서브 메뉴는 들어감
                $("nav .sub").slideUp();
                // 클릭한 메뉴의 다음 형제 객체(서브메뉴)만 나옴
                $(this).next().slideDown();
                // 클릭한 메뉴에 active클래스 설정되어있다면
            } else {
                // 클릭한 메뉴에서 active 제거
                $(this).removeClass("active");
                // 클릭한 메뉴의 다음형제 객체(서브메뉴)만 들어감
                $(this).next().slideUp();
            }
        });
        //접속한 기기의 가로길이가 1400px이상이면 주메뉴에 마우스 오버했을 때 서브메뉴와 서브메뉴배경이 나타나고,
        //마우스 아웃했을 때 서브메뉴와 서브메뉴 배경이 사라짐
    } else {
        $("nav>ul>li>a").mouseenter(function () {
            $(".sub").stop().slideDown();
            $(".sub_bg").stop().slideDown();
        });
        $("header").mouseleave(function(){
            $(".sub").stop().slideUp();
            $(".sub_bg").stop().slideUp();
        });

    }
    // 관련 사이트 (family 사이트)
    $(".family_title a").click(function(e){
        e.preventDefault();
        $(this).find("span").css("transform", "rotateZ(-180deg)")
        $(".family_list").slideDown();
    });
    $(".family_title a").mouseleave(function(){
        $(this).find("span").css("transform", "rotateZ(0deg)")
        $(".family_list").slideUp();
    });


});