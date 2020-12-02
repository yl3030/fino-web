var pH = $(".picture").width();
$(".pink").css("height",pH);

$(".menu").click(function(){
    $(".menu-box").slideDown(300);
});
$(".menu-box").children(".main").children(".fa-times").click(function(){
    $(".menu-box").slideUp(300);
})