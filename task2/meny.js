  $("#menu").load("menu1.html",function(){
    $(".nav-link").each(function(){
        if(this.href===window.location.href){
            $(this).addClass("active")
        }
    })


  });

  $(".card").hover(
    function(){$(this).addClass("shadow")},
    function(){$(this).removeClass("shadow")}
    )