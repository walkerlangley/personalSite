//Problem: User when clicking on image opens a new page and is a poor UX
//Solution: Create an overaly with the large image - lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image to overlay
$overlay.append($image);

// A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);



// Capture the click event on a link to an image.
$("#gallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
    
  //Show the overlay
  $overlay.show();


  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

});


//3. When overlay is clicked
$overlay.click(function() {
    $overlay.hide()
});