$( function () {
  var
    count = 333,
    block = $( '.count' ),
    interval = setInterval( function () {
      count++;
      
      block.text( count );
      
      if( count === 999 ) {
      	clearInterval( interval );
      }
  	}, 5000 );
  
  block.text( count );
} );
