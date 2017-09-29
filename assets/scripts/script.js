console.log("A boilerplate project including full setup for Jekyll, GulpJS, SASS, PostCSS, BrowserSync and deploy to gh-pages using Gulp by Esau Silva.");
$(document).ready(menu);

function menu() {
  $('#menu-icon-shape').on('click', function() {
    $('#menu-icon-shape').toggleClass('active');
    $('#top, #middle, #bottom').toggleClass('active');
    $('#overlay-nav').toggleClass('active');
  });
}
