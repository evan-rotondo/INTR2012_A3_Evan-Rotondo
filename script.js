
function  start(){
    
    $("#menu a:first").click();
      
}

$(window).on("load", start);


function loadpage(e){
   
   e.preventDefault();
   $("#menu a.active").removeClass("active");
   $(this).addClass("active");
    //alert("!");

  
    let href = $(this).attr("href");
    $("#content").load(href);
}

$(document).on("click", "#menu a", loadpage);




