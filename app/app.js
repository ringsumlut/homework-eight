var userVarName = "Variable";
var homeContent = `<div class="home"><p>This is Home Page.</p></div>`;
var aboutContent = `<div class="about"><p>This is About Page.</p></div>`;
var productsContent = `<div class="about"><p>This is Products Page.</p></div>`;
var contactContent = `<div class="about"><p>This is Contact Page.</p></div>`;

function init() {
   $("nav a").click(function(e){

    let btnId = this.id;
    let contentID = btnId + "Content";

    $("#section-title").html(eval(contentID));
    //$("#app").append(btnId);
    //$("#app").prepend(btnId);
   });  


   $('nav a').click(function(e) {
       $("#sectionMain").css("background", "#" + changeBackground());
   });
   function changeBackground() {
       return Math.floor(Math.random()*12345678).toString(16);
   }

   $('.navbar a').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
    });
}


$(document).ready(function() {
    init();
});


