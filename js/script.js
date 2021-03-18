$("#toggle").click(function(){
    $("#nav-btn").slideToggle(1000);
});

var a = document.getElementById('preloder');

function pre(){
    a.style.display = 'none' ;
}


$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');

    }
})

// var b = document.getElementById('bar1');
// var c = document.getElementById('bar2');
// var d = document.getElementById('bar3');
// var toggle = document.getElementById('toggle')

// function close1(){
//         b.style.transform = 'rotate(-40deg)';
//         b.style.position = "absolute";
//         b.style.right = '5px';
//         b.style.top = '50px';
    
        
    
//         d.style.transform = 'rotate(40deg)';
//         d.style.position = "absolute";
//         d.style.right = '5px';
//         d.style.top = '50px';
    
    
//         c.style.display = 'none'; 
    
// }





