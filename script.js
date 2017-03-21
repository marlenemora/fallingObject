var $pic = $("#pic"); 

$pic.click(function(){
     $("#pic").css("top", $("#pic").offset().top + 20);
});

setInterval(function(){
    $("#pic").css("top", $("#pic").offset().top + 20);
    
}, 1000);
