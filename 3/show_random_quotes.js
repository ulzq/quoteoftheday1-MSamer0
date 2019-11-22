/* show_random_quotes.js */


/*
This file works with the stylesheet random_quotes.css
and the demo page random_quotes.html . This HTML
is a sequence of <span> elements, each containing a
quotation split into body and author. Initially, all 
the quotes are invisible, as set by the stylesheet. 
The function showRandomQuotes() below chooses a random 
<span>, fades it in, and then after enough delay for 
the user to read it, fades it out and repeats. 
*/


/* Returns a random integer between min (inclusive) and 
   max (inclusive).
*/
function getRandomInt( min, max ) 
{
  return Math.floor( Math.random() * (max - min + 1) )  
         + min;
   // Using Math.round() will give a non-uniform distribution,
   // according to the author.
   // From 
   // http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range 
}


/* Phases randomly chosen s in and out as described
   in the comment at the top.
*/
function showRandomQuotes() 
{
  // Adapted from 
  // http://stackoverflow.com/questions/12065273/fade-in-out-text-loop-jquery

  var quotes = jQuery( ".quote-container" );
  // All the s.

  var no_of_quotes = quotes.length;

  function showNextQuote() 
  {
    var fade_in_and_out_delay = 2000;

    var reading_time = 5000;
    // Time a quote remains visible. This is long
    // enough to read the longest quote on the
    // website.

    var quote_index = getRandomInt( 0, no_of_quotes-1 );
    // Which <span> to fade in next. This index
    // is zero-based.

    quotes.eq( quote_index ).fadeIn( fade_in_and_out_delay )
        .delay( reading_time )
        .fadeOut( fade_in_and_out_delay, showNextQuote );
    // Fade the quote in, leave it for a bit, fade 
    // it out, and repeat.


  }

  showNextQuote();
  // Show the first quote.

}
