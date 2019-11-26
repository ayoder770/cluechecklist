   $('.yes_default').click(function(){
       if($(this).parent().hasClass('maybe')){
           $(this).siblings('.item_default').addClass('item_yes'); //item box
           $(this).siblings('.item_default').removeClass('item_default'); //item box
           $(this).siblings('.no_default').addClass('no_yes_state'); // no box
           $(this).siblings('.no_default').removeClass('no_default'); //no box
           $(this).parent().removeClass('maybe'); // parent state
           $(this).parent().addClass('affirmative'); //parent state
           // change all siblings to no automatically
           $(this).parent().siblings().children('.item_default').addClass('item_no'); //all sib item boxes
           $(this).parent().siblings().children('.item_default').removeClass('item_default'); //all sib item boxex
           $(this).parent().siblings().children('.yes_default').addClass('yes_no_state'); //all item yes boxes
           $(this).parent().siblings().children('.yes_default').addClass('yes_no_state'); //all item yes boxes
           $(this).parent().siblings('.maybe').addClass('negative'); // parent sib states
           $(this).parent().siblings('.maybe').removeClass('maybe'); //parent sib states
           
       }
   });
    
     $('.no_default').click(function(){
       if($(this).parent().hasClass('maybe')){
           $(this).siblings('.item_default').addClass('item_no'); //item box
           $(this).siblings('.item_default').removeClass('item_default'); //item box
           $(this).siblings('.yes_default').addClass('yes_no_state'); // no box
           $(this).siblings('.yes_default').removeClass('yes_default'); //no box
           $(this).parent().removeClass('maybe'); // parent state
           $(this).parent().addClass('negative'); //parent state
       }
   });  


   //reset row when item is selected
    $('.item_always').click(function(){
        if($(this).parent().hasClass('affirmative')){
            $(this).removeClass('item_yes');
            $(this).addClass('item_default');
            $(this).siblings('.no_yes_state').addClass('no_default'); // no box
            $(this).siblings('.no_yes_state').removeClass('no_yes_state'); //no box
            $(this).parent().removeClass('affirmative'); // parent state
            $(this).parent().addClass('maybe'); //parent state
        } else if($(this).parent().hasClass('negative')){
            $(this).removeClass('item_no'); // item box
            $(this).addClass('item_default'); // item box
            $(this).siblings('.yes_no_state').addClass('yes_default'); // yes box
            $(this).siblings('.yes_no_state').removeClass('yes_no_state'); //yes box
            $(this).parent().removeClass('negative'); // parent state
            $(this).parent().addClass('maybe'); //parent state   
        }  
    });
     var my_card = '<i class="fa fa-home" aria-hidden="true"></i>';
    // my card checkbox
    $('.my_card_box').click(function(){
        if($(this).hasClass('not_my_card')){
           $(this).html(my_card);
           $(this).addClass('my_card');
           $(this).removeClass('not_my_card');
        } else if ($(this).hasClass('my_card')){
           $(this).empty();
           $(this).addClass('not_my_card');
           $(this).removeClass('my_card');
        }
    });
    
// Function to disable "pull-to-refresh" effect present in some webviews.
// Especially Crosswalk 12 and above (Chromium 41+) runtimes.

window.addEventListener('load', function() {
    var lastTouchY = 0 ;
    var maybePreventPullToRefresh = false ;

    // Pull-to-refresh will only trigger if the scroll begins when the
    // document's Y offset is zero.

    var touchstartHandler = function(e) {
        if( e.touches.length != 1 ) {             
            return ;
        }
        lastTouchY = e.touches[0].clientY ;
        // maybePreventPullToRefresh = (preventPullToRefreshCheckbox.checked) && (window.pageYOffset == 0) ;
        maybePreventPullToRefresh = (window.pageYOffset === 0) ;
        //document.getElementById('txtLog').textContent = "maybePreventPullToRefresh: " + maybePreventPullToRefresh;
    };

    // To suppress pull-to-refresh it is sufficient to preventDefault the
    // first overscrolling touchmove.

    var touchmoveHandler = function(e) {
        var touchY = e.touches[0].clientY ;
        var touchYDelta = touchY - lastTouchY ;
        lastTouchY = touchY ;

        if (maybePreventPullToRefresh) {
            maybePreventPullToRefresh = false ;
            //if (touchYDelta > 0) {
                e.preventDefault() ;
                //document.getElementById('txtLog').textContent = "TouchY: " + touchYDelta;
                // console.log("pull-to-refresh event detected") ;
                return ;
            //}
        }

        // if (preventScrollCheckbox.checked) {
        //     e.preventDefault() ;
        //     return ;
        // }

        // if (preventOverscrollGlowCheckbox.checked) {
        //     if (window.pageYOffset == 0 && touchYDelta > 0) {
        //         e.preventDefault() ;
        //         return ;
        //     }
        // }
    };

    document.addEventListener('touchstart', touchstartHandler, false) ;
    document.addEventListener('touchmove', touchmoveHandler, false) ;
}) ;