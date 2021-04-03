$('.register-switch').click(function (){
    $('.moving').css("transform","translateX(-50%)");
   $('.message').html("Hello Friends !");
  
});
$('.login-switch').click(function (){
    $('.moving').css("transform","translateX(0%)");
    $('.message').html("Welcome Back !");
   
});
$('.login-switch').click();
