
$("#second-btn").on("click", function(){
    $(".window_second_row_2").fadeIn(1000);
    $(".window_second_row_1").hide(500);
    $(".window_second_row_3").hide(500);
    $("#third-btn").removeClass("btn_active");
    $("#first-btn").removeClass("btn_active");
    $(this).addClass("btn_active")
})
$("#first-btn").on("click", function(){
    $(".window_second_row_1").fadeIn(1000);
    $(".window_second_row_2").hide(500);
    $(".window_second_row_3").hide(500);
    $("#third-btn").removeClass("btn_active");
    $("#second-btn").removeClass("btn_active");
    $(this).addClass("btn_active")
})
$("#third-btn").on("click", function(){
    $(".window_second_row_3").fadeIn(1000);
    $(".window_second_row_2").hide(500);
    $(".window_second_row_1").hide(500);
    $("#second-btn").removeClass("btn_active");
    $("#first-btn").removeClass("btn_active");
    $(this).addClass("btn_active");
})