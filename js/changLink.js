//call back function example
//$('body').hide().fadeIn(4000, function(){alert("done");});

/* how jquery event working */

$('h1').click(function(e){
    $(this).text("Hide the image")
    $('img').hide();
    $('body').children('p').slideToggle();

});

//play with jQuery .each function

//update teh image link
$('img').each(function(){
    var path = $(this).attr('src');
    //console.log(path);
    var newpath = "img/" + path;
    $(this).attr("src", newpath);
    console.log(newpath);

});
//update the anchor link ---- all links go to google.com
$('a').each(function(){
    //$(this).css
    var link = $(this).attr('href');
    console.log(link);
    var newlink = "gooogle.com";
    $(this).attr("href", newlink);

});


//console.log("I am here");