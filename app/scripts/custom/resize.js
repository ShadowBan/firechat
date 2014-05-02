function updateSidebar() {
  var $height = document.documentElement.clientHeight,
      $offset = jQuery('nav.navbar').height();
      jQuery('div#flow > div').css({'min-height': ($height - $offset - 2)});
}

$(window)
  .load(function() {
      updateSidebar();
  })
  .resize(function(){
      updateSidebar();
  });