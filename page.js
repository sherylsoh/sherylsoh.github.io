$(function () {

    // on submitting the form
    $('form').submit(function (event) {
        // prevent the default action of reloading the page
        event.preventDefault();

        var sendData = {};
        $(event.target.nodeName + ' :input').each(function(){
            sendData[this.name] = $(this).val();
        });

        var posting = $.ajax({
            type: 'POST',
            url: $(event.target.nodeName).prop('action'),
            data: sendData
        });

        posting.done(function (response) {
            console.log(response);
            $('.js-form-response').html("Thank you for signing up!");
            $('form :input').each(function(){
                $(this).val('');
            })
            $('.js-hidden').hide();
        });
        posting.fail(function (response) {
            console.log(response);
        });
    });

// RESPONSE ALERT WINDOW-------------------------------------------------------------------------------
/* include the following HTML to use:
<div class="form-group">
    <button type="submit" class="btn btn-default my-btn form-control" id="submit-id">submit</button>                   
    <div class="alert alert-danger alert-dismissible fade in" hidden id="alert-id">
        <button type="button" class="close" id="close-id"><span>&times;</span></button>
        Thank you! I will get in touch.
    </div>
</div>
*/

    // on clicking the X button
    // $('#close-id').click(function(){
    //     // hide the alert panel by adding the hidden property
    //     $('#alert-id').prop('hidden', true);
    //     // optionally reload the webpage
    //     location.reload();
    // });

});


$('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 500);
                return false;
            }
        }
    });

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: window // optional scroll container selector, otherwise use window
  }
);
wow.init();

window.addEventListener('scroll', function(e) {
        if( $(window).scrollTop() <= 50) {
            $('.wow').removeClass('animated');
            $('.wow').removeAttr('style');
            new WOW().init();
        }
});
        