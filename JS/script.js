 $(function(){
  
     
     $(".navbar a, footer a ").on('click', function(e) {
         
        if (this.hash !== " ") {
    
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate( {
                scrollTop: $(hash).offset().top
        }, 980, function(){
   
        window.location.hash = hash;});
    } 
  });

     
     
});


