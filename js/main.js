lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true
  });


// Dynamic Searcher through Images and Captions
const searchbox = document.getElementById('search');

searchbox.addEventListener('keyup', function() {
    const searchvalue = searchbox.value.toLowerCase();
    console.log(searchvalue);

    $('.photo-wrapper a').each(function() {
      const caption = $(this).attr('data-title').toLowerCase();
      console.log(caption);

      if (caption.indexOf(searchvalue) > -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
});








