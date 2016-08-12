$(".banner").hover(
    function() {
        $(this).css("background")
    },
    function() {

    }
);

function queueLoad() {
    animateTable(0);
}

function animateTable(phase) {
    if($(window).width() < 1140) {
        $("#home_page_body").css("overflow-y", "visible");
        $("#section_links").css("top", "50%");
        $("#section_links").css("width", "76%").css("left", "12%");
        $(".banner").css("height", "250px");
    }
    else {
        switch(phase) {
            case 0:
                $("#home_page_body").css("overflow", "hidden");
                $("#section_links").animate({top: "50%"}, 1250, "easeInExpo", function() {animateTable(1);});
                break;
            case 1:
                $("#section_links").animate({width: "76%", left: "12%"}, 1000, "easeOutExpo", function() {animateTable(2);});
                break;
            case 2:
                $(".banner").animate({height: "250px"}, 1000, "easeOutBounce", function() {animateTable(3);});
                $("#home_page_body").css("overflow", "visible");
                break;
        }
    }
}
function goBack() {
    $("#background_image").css("position", "absolute");
    $("#home_page_body").css("display", "block");
    $("#home_page_body").css("z-index", "3");
    $("body").css("overflow", "hidden");
    viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    $("#home_page_body").animate({top: "0%", left: "0%"}, 1000, "easeInOutQuad", function() {
        // Everything here occurs after animation.
        $("#window_up").html("").removeAttr("style");
        $("#window_down").html("").removeAttr("style");
        $("#window_left").html("").removeAttr("style");
        $("#window_right").html("").removeAttr("style");
        $("#background_image").css("position", "fixed");
        $("#home_page_body").css("z-index", "");
        $("body").css("overflow", "visible");
    });
    window.location.hash = '';
}
/**
 * pageFile - "animator.php", for instance, neighborWindow - "#window_left", for instance.
 */
function loadPage(pageFile, neighborWindow) {
    function afterAnimation() {
        $("#home_page_body").css("display", "none");
        $("#background_image").css("position", "fixed");
        $("#home_page_body").css("overflow", "visible");
        $("body").css("overflow", "visible");
    }
    $.ajax({
        url: pageFile,
        data: {},
        error: function() {

        },
        success: function(data) {
            window.scrollTo(0, 0);
            $("#background_image").css("position", "absolute");
            $(neighborWindow).css("display", "inline");
            $(neighborWindow).html(data);
            $("body").css("overflow", "hidden");
            switch(neighborWindow) {
                case "#window_up":
                    $("#home_page_body").animate({top: "100%"}, 1000, "easeInOutQuad", afterAnimation);
                    $("#window_up").animate({top: "0%"}, 1000, "easeInOutQuad", function() {});
                    if (pageFile == "web.php")
                        window.location.hash = 'web';
                    else if (pageFile == "blog.php")
                        window.location.hash = 'blog';
                    break;
                case "#window_left":
                    $("#home_page_body").animate({left: "100%"}, 1000, "easeInOutQuad", afterAnimation);
                    $("#window_left").animate({left: "0%"}, 1000, "easeInOutQuad", function() {});
                    window.location.hash = 'animator';
                    break;
                case "#window_right":
                    $("#home_page_body").animate({left: "-100%"}, 1000, "easeInOutQuad", afterAnimation);
                    $("#window_right").animate({left: "0%"}, 1000, "easeInOutQuad", function() {});
                    window.location.hash = 'photographer';
                    break;
                case "#window_down":
                    $("#home_page_body").animate({top: "-100%"}, 1000, "easeInOutQuad", afterAnimation);
                    $("#window_down").animate({top: "0%"}, 1000, "easeInOutQuad", function() {});
                    window.location.hash = 'musician';
                    break;
            }
        }
    });
}
