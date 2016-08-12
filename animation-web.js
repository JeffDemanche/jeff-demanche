function inByWord(element, words, time, call) {
    $(element).text("");
    var words = words.split(" ");
    for (var i = 0; i < words.length; i++) {
        (function(word) {
            setTimeout(function(){ document.getElementById(element.replace("#", "")).innerHTML += (words[word] + " "); }, (time * word));
            if (word==words.length - 1) {
                call();
            }
        })(i);
    }
}
function inByLetter(element, words, time, call) {
    $(element).html("&nbsp;");
    var letters = words.split("");
    var to;
    for (var i = 0; i < letters.length; i++) {
        (function(letter) {
            to = setTimeout(function(){ $(element).append(letters[letter]);
            if (letter==letters.length - 1) {
                clearTimeout(to);
                call();
            }
        }, (time * letter));
        })(i);
    }
}
function skip() {
    $("#web_slide_1").remove();
    $("#web_slide_2").remove();
    $("#web_slide_3").css("display", "block");
    $("#type_the_question").css("top", "-30%");
    $("#type_what_can").css("opacity", "1.0").css("top", "5%");
    $("#skip").hide();
    $("#back_arrow_web").css("display", "block");
    $("#web_final_content").css("opacity", "1.0");
}
/**
 * This acts as a "scheduler" of animated events.
 */
function animation(phase) {
    switch(phase) {
        case 0:
        // Change viewport and wait for banner to drop.
            viewport = document.querySelector("meta[name=viewport]");
            viewport.content = "initial-scale=0.1";
            viewport.content = "width=700";

            $(".back_arrow").css("display", "none");
            jQuery.get('animation-web.js', function(data) {
                document.getElementById("svg_browser_content").innerHTML = data;
                $.getScript("https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert");
            });
            setTimeout(function(){ animation(1); }, 600);
            break;
        case 1:
        // Bring banner down.
            $("#web_slide_1").animate({top: "35%"}, 1000, "easeOutQuad", function() { animation(2);});
            break;
        case 2:
        // Unfurl banner.
            $("#web_slide_1").animate({height: "250px"}, 1000, "easeOutBounce", function() { animation(3);});
            break;
        case 3:
        // Bring in text by word.
            inByWord("#type_i_got", "i got this", 400, function() {});
            $("#web_slide_2").css("display", "block");
            setTimeout(function() { animation(4); }, 1200);
            break;
        case 4:
        // Send text away to sides.
            $("#type_trust_me").animate({left: "120%"}, 400, "easeInQuad", function() {});
            $("#type_i_got").animate({left: "-120%"}, 400, "easeInQuad", function() { animation(5); });
            break;
        case 5:
        // Refurl banner.
            $("#web_slide_1").animate({height: "0px"}, 800, "easeOutBounce", function() { animation(6);});
            break;
        case 6:
        // Enter beautiful and functional text by word.
            $("#web_slide_1").css("display", "none");
            inByWord("#type_that_are", "that are <b>beautiful</b> and <b>functional</b>.", 200, function(){ animation(7); });
            break;
        case 7:
        // Wait to bring browser in.
            setTimeout(function() { animation(8); }, 500);
            break;
        case 8:
        // Bring in browser, slide 2, and run prettify script.
            $("#web_slide_2").animate({top: "30%"}, 500, "swing", function() {});
            $("#svg_browser").animate({opacity: "1.0"}, 500, "easeInQuad", function() { animation(9); });
            break;
        case 9:
        // Type in browser URL.
            inByLetter("#svg_browser_url", "http://www.jeffdemanche.com/ ", 50, function() { animation(10); });
            break;
        case 10:
        // "I build" flyout and bring browser further up.
            $("#svg_browser_url").css("background-color", "transparent").css("color", "#444");
            $("#type_i_build").animate({top: "-500px"}, 500, "easeInQuad", function() {});
            $("#type_that_are").animate({top: "-500px"}, 500, "easeInQuad", function() {});
            $("#svg_browser_content").animate({height: "514px"}, 1000, "easeOutExpo", function() {});
            $("#web_slide_2").animate({top: "0%"}, 1200, "easeOutExpo", function() { setTimeout(function() { animation(11); }, 1000); });
            break;
        case 11:
        // Blur code, bring up content.
            $("#svg_browser_site").animate({height: "514px"}, 500, "easeInQuad", function() {});
            $("#svg_browser_content").addClass("blurred_content");
            $("#svg_browser_content").animate({height: "0px"}, 700, "linear", function() { animation(12); });
            break;
        case 12:
            setTimeout(function() {
                $("#site_body_text").html("<h1>I DO</h1>");
                setTimeout(function() {
                    $("#site_body_text").append("<p>PHP</p>");
                    setTimeout(function() {
                        $("#site_body_text").append("<p>HTML5</p>");
                        setTimeout(function() {
                            $("#site_body_text").append("<p>JavaScript</p>");
                            setTimeout(function() {
                                $("#site_body_text").append("<p>jQuery</p>");
                                setTimeout(function() {
                                    $("#site_body_text").append("<p>SQL</p>");
                                    setTimeout(function() {
                                        $("#site_body_text").append("<p>CSS</p>");
                                        $("#svg_browser_content").html("");
                                        setTimeout(function() {
                                            animation(13);
                                        }, 600);
                                    }, 400);
                                }, 400);
                            }, 400);
                        }, 400);
                    }, 400);
                }, 400);
            }, 1000);
            break;
        case 13:
            $("#site_menu").animate({width: "60%"}, 500, "easeInQuad", function() {});
            $("#menu_icon").css("fill", "#5046A2");
            $("#site_body_text h1").animate({color: "#EAEAEA"}, 500, "easeInQuad", function() { animation(14); });
            break;
        case 14:
            $("p", "#site_body_text").remove();
            $("#site_body_text").append("<span id=\"adjective_inno\" class=\"do_adjectives\">INTERACTIVE</span><br>");
            $("#site_body_text").append("<span id=\"adjective_anim\" class=\"do_adjectives\">ANIMATED</span><br>");
            $("#site_body_text").append("<span id=\"adjective_insp\" class=\"do_adjectives\">INSPIRED</span>");
            $("#site_body_text p").css("z-index", "3").css("color", "#EAEAEA").css("top", "230px").css("letterSpacing", "9px").css("left", "800px").css("font-size", "14pt");
            $("#adjective_inno").animate({left: "-100px"}, 450, "easeInOutQuint", function() {
                setTimeout(function() {
                    $("#adjective_anim").animate({left: "-100px"}, 250, "easeInOutQuint", function() {
                        setTimeout(function() {
                            $("#adjective_insp").animate({left: "-100px"}, 250, "easeInOutQuint", function() {
                                setTimeout(function() {
                                    animation(15);
                                }, 600);
                            });
                        }, 600);
                    });
                }, 600);
            });
            break;
        case 15:
            $("#browser_background").animate({left: "-800px"}, 1200, "easeInOutQuint", function() { animation(15.1); });
            $("#browser_background").animate({opacity: "0.0"}, 800, "easeInQuint", function() {});
            $("#ipad_background").css("display", "inline");
            $("#svg_site_container").addClass("site_container_ipad_1");
            $("#ipad_background").animate({top: "50px"}, 800, "easeInQuint", function() {});
            $("#svg_browser_url").animate({opacity: "0.0"}, 400, "swing", function() {});
            $(".do_adjectives").remove();
            $("#site_body_text").append("<span id=\"adjective_mobi\" class=\"do_adjectives\">MOBILE</span>");
            break;
        case 15.1:
            $("#adjective_mobi").css("opacity", "1.0");
            $("#adjective_mobi").animate({letterSpacing: "30px"}, 2400, "linear", function() { animation(16); });
            break;
        case 16:
            $("#adjective_mobi").remove();
            $("#svg_browser").css("height", "640px");
            $("#site_menu").css("height", "");
            $("#svg_browser_site").addClass("browser_site_vertical");
            $("#ipad_background img").addClass("ipad_rotated");
            $("#svg_site_container").removeClass("site_container_ipad_1");
            $("#svg_site_container").addClass("site_container_ipad_2");
            $("#cog_1").css("right", "186px").css("top", "176px");
            $("#cog_2").css("right", "116px").css("top", "100px");
            $("#site_body_text h1").css("color", "").css("top", "160px");
            setTimeout(function() { animation(17); }, 800);
            break;
        case 17:
            $("#menu_icon").css("top", "");
            $("#menu_icon").css("bottom", "28px");
            $("#site_menu").append("<span id=\"type_responsive\">RESPONSIVE</span>")
            $("#type_responsive").animate({letterSpacing: "20pt"}, 2200, "linear", function() { animation(18); });
            $("#site_body_text h1").css("color", "#EAEAEA").css("top", "160px");
            $("#site_menu").animate({height: "450px"}, 800, "easeInOutQuint", function() { });
            break;
        case 18:
            // Add slide 3 and remove iPad.
            $("#web_slide_3").css("display", "block");
            $("#web_slide_2").animate({top: "-200%"}, 800, "easeInQuint", function() { setTimeout(function() { animation(19); }, 900); });
            break;
        case 19:
            // Fade in "what can I do".
            $(".back_arrow").css("display", "block");
            $("#skip").hide();
            $("#web_slide_2").remove();
            $("#type_what_can").animate({opacity: "1.0"}, 450, "linear", function() { setTimeout(function() { animation(20); }, 600); });
            break;
        case 20:
            $("#type_the_question").animate({top: "-30%"}, 700, "easeInQuint", function() {
                $("#type_what_can").animate({top: "5%"}, 700, "easeInOutQuad", function() { animation(21); });
                $("#type_what_can").css("z-index", "2");
            });
            break;
        case 21:
            $("#web_final_content").animate({opacity: "1.0"}, 800, "linear", function(){});
            break;
    }
}
