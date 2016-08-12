<?php

?>
<div id="web_page_body" onload="animation(0);">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300" rel="stylesheet">
    <div class="back_arrow" id="back_arrow_web">
        <a href="javascript:goBack()">
            <h2>BACK</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 8 8">
              <path d="M4 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-1 1h2v3h2l-3 3-3-3h2v-3z" />
            </svg>
        </a>
    </div>
    <div id="web_content">
        <div id="web_slide_1">
            <span id="type_trust_me">trust me</span><br>
            <span id="type_i_got"></span>
        </div>
        <div id="web_slide_2">
            <span id="type_i_build">I build websites</span>
            <span id="type_that_are"></span>
            <div id="svg_browser" >
                <div id="browser_background" style="background-image: url('images/web-browser.svg');"></div>
                <div id="ipad_background"><img src="images/iPad.svg"/></div>
                <span id="svg_browser_url">Loading...</span>
                <div id="svg_site_container">
                    <pre id="svg_browser_content" class="prettyprint"></pre>
                    <div id="svg_browser_site">
                        <div id="site_menu">
                            <svg id="menu_icon" style="top: 20px" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8 8">
                                <path d="M0 0v1h8v-1h-8zm0 2.97v1h8v-1h-8zm0 3v1h8v-1h-8z" transform="translate(0 1)" />
                            </svg>
                        </div>
                        <div id="site_body">
                            <div id="site_body_text"></div>
                            <div id="site_graphics">
                                <svg id="cog_1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8 8">
                                    <path d="M3.5 0l-.5 1.19c-.1.03-.19.08-.28.13l-1.19-.5-.72.72.5 1.19c-.05.1-.09.18-.13.28l-1.19.5v1l1.19.5c.04.1.08.18.13.28l-.5 1.19.72.72 1.19-.5c.09.04.18.09.28.13l.5 1.19h1l.5-1.19c.09-.04.19-.08.28-.13l1.19.5.72-.72-.5-1.19c.04-.09.09-.19.13-.28l1.19-.5v-1l-1.19-.5c-.03-.09-.08-.19-.13-.28l.5-1.19-.72-.72-1.19.5c-.09-.04-.19-.09-.28-.13l-.5-1.19h-1zm.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
                                </svg>
                                <svg id="cog_2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8 8">
                                    <path d="M3.5 0l-.5 1.19c-.1.03-.19.08-.28.13l-1.19-.5-.72.72.5 1.19c-.05.1-.09.18-.13.28l-1.19.5v1l1.19.5c.04.1.08.18.13.28l-.5 1.19.72.72 1.19-.5c.09.04.18.09.28.13l.5 1.19h1l.5-1.19c.09-.04.19-.08.28-.13l1.19.5.72-.72-.5-1.19c.04-.09.09-.19.13-.28l1.19-.5v-1l-1.19-.5c-.03-.09-.08-.19-.13-.28l.5-1.19-.72-.72-1.19.5c-.09-.04-.19-.09-.28-.13l-.5-1.19h-1zm.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="web_slide_3">
            <div id="type_the_question">The question is...</div>
            <div id="type_what_can">...what can <b>I do</b> for you?</div>
            <div id="web_final_content">
                <div id="web_vertical_banner"></div>
                <div id="web_banner_content">
                    <div id="web_info_left">
                        <h1>Jeff Demanche</h1>
                        <p>Freelance web designer and developer.</p>
                    </div>
                    <div id="web_info_right">
                        <div class="web_portfolio_preview">
                            <img src="content/web/cca.jpeg" alt="Cape Cod Abridged"/>
                            <p>Cape Cod Abridged</p>
                        </div>
                        <div class="web_portfolio_preview">
                            <img src="content/web/portfolio.jpg" alt="Portfolio Website"/>
                            <p>My Personal Site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="skip">
            <a href="javascript:skip()">skip this nonsense</a>
        </div>
    </div>
</div>
<!-- Called after web.php is loaded into the main page. -->
<script src="animation-web.js"></script>
<script>
    animation(0);
</script>
