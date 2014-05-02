function updateSidebar() {
  var $height = document.documentElement.clientHeight,
      $offset = jQuery('nav.navbar').height();
      jQuery('div#flow > div').css({'min-height': ($height - $offset - 2)});
}

$(window)
  .load(function() {
      altert("IM LOADING YOUR WINDOW!");
      updateSidebar();
  })
  .resize(function(){
      updateSidebar();
  });