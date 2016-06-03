$(function() {
  //5つ以下だった場合、liを繰り返す
  var itemLength = $('.mainvisual-list li').length;
  var $item = $('.mainvisual-list li');
  var itemClone = $('.mainvisual-list li').clone();
  var $thumb = $('.mainvisual-thumbs img');
  var thumbClone = $('.mainvisual-thumbs img').clone();

  if(itemLength <= 5 && itemLength >= 3) {
    for(var i = 0; i < itemLength; i++) {
      $item.clone().appendTo('.mainvisual-list');
      //$('.mainvisual-list').append(itemClone);
    }
    for(var i = 0; i < itemLength; i++) {
      $thumb.clone().appendTo('.mainvisual-thumbs');
      //$('.mainvisual-thumbs').append(thumbClone);
    }
  } else if(itemLength <= 2) {
    for(var i = 0; i < itemLength * 6; i++) {
      $item.clone().appendTo('.mainvisual-list');
    }
    for(var i = 0; i < itemLength * 6; i++) {
      $thumb.clone().appendTo('.mainvisual-thumbs');
    }
  }

  //carouFredSel
  $('.mainvisual-thumbs').carouFredSel({
    synchronise: ['.mainvisual-list', false, true],
    auto: true,
    width: 650,
    items: {
      visible: 5,
      start: -2
    },
    scroll: {
      items : 1,
        onBefore: function( data ) {
          data.items.old.eq(2).removeClass('selected');
          data.items.visible.eq(2).addClass('selected');
        }
    },
    prev: ".slide-arrow.left",
    next: ".slide-arrow.right"
  });
  $('.mainvisual-list').carouFredSel({
    auto: true,
    items : 1,
    scroll: {
      fx: 'scroll'
    }
  });

  $('.mainvisual-thumbs img').click(function() {
       $('.mainvisual-thumbs').trigger( 'slideTo', [this, -2] );
   });
   $('.mainvisual-thumbs img:eq(2)').addClass('selected');

});
