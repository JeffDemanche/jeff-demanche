<?php
    $page = "";
    if (isset($_GET['page'])) {
        $page = $_GET['page'];
    }

    function getImageContent($type) {
        $files = scandir("content/images/");
        $more_accurate = array();
        foreach ($files as $file) {
            if (0 === strpos($type, explode("_", basename($file))[0])) {
                array_push($more_accurate, $file);
            }
        }
        return "content/images/" . $more_accurate[rand(0, count($more_accurate)-1)];
    }

    $web_image = getImageContent("web");
    $photography_image = getImageContent("photography");
    $animation_image = getImageContent("animation");
    $musician_image = getImageContent("musician");
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Jeff Demanche - Designer, Animator, and Musician</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link type="text/css" rel="stylesheet" href="css/main.css"/>
        <link type="text/css" rel="stylesheet" href="css/web.css"/>
        <link type="text/css" rel="stylesheet" href="css/web2.css"/>
        <link type="text/css" rel="stylesheet" href="css/animator.css"/>
        <link type="text/css" rel="stylesheet" href="css/photographer.css"/>
        <link type="text/css" rel="stylesheet" href="css/musician.css"/>
        <link type="text/css" rel="stylesheet" href="css/blog.css"/>
        <link href='https://fonts.googleapis.com/css?family=IM+Fell+English' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Harmattan" rel="stylesheet">
        <script src="jquery-3.0.0.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
        <script src="load_content.js"></script>
        <script>
            if (window.location.hash) {
                if(window.location.hash.substring(1) == "web") {
                    loadPage('web.php', '#window_up');
                } else if (window.location.hash.substring(1) == "animator") {
                    loadPage('animator.php', '#window_left');
                } else if (window.location.hash.substring(1) == "photographer") {
                    loadPage('photographer.php', '#window_right');
                } else if (window.location.hash.substring(1) == "musician") {
                    loadPage('musician.php', '#window_down');
                } else if (window.location.hash.substring(1) == "blog") {
                    loadPage('blog.php', '#window_up');
                }
            }
        </script>
    </head>
    <body onload="queueLoad()">
        <div id="home_page_body">
            <div id="background_image">
            </div>
            <div id="personal_info">
                <table id="header_info_table">
                    <tr>
                        <td id="name_cell">
                            <h1>Jeff<br>Demanche</h1>
                        <td>
                        <td id="separator_cell">
                            <div id="separator">|</div>
                        </td>
                        <td id="general_info_cell">
                            (508) 524-2974<br>
                            A digital creative.<br>
                            Studying computer science.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a id="blog_link" href="javascript:loadPage('blog.php', '#window_up');">Read my blog.</a>
                        </td>
                    </tr>
                </table>
            </div>
            <table id="section_links">
                <tr id="table_row_titles">
                    <td class="occ_cell">Web Designer</td>
                    <td class="occ_cell">3D Animator</td>
                    <td class="occ_cell">Photographer</td>
                    <td class="occ_cell">Musician</td>
                </tr>
                <tr id="table_row_content">
                    <td class="banner_container" id="web_designer_banner">
                        <!-- Web designer flyout -->
                        <a id="web_des_link" href="javascript:loadPage('web.php', '#window_up')">
                            <div class="banner">
                                <div class="banner_background" style="background-image: url('<?php echo $web_image; ?>');"></div>
                                <div class="banner_content">
                                    <span class="mobile_cell_header">Web Designer</span>
                                    <p><b>Passionate</b> and <b>bold</b>.</p>
                                    <span style="font-size: 120pt;">Do.</span>
                                </div>
                            </div>
                            <div class="triangle_down_left"></div>
                        </a>
                    </td>
                    <td class="banner_container" id="animator_banner">
                        <!-- Animator flyout -->
                        <a id="animator_link" href="javascript:loadPage('animator.php', '#window_left')">
                            <div class="banner">
                                <div class="banner_background" style="background-image: url('<?php echo $animation_image; ?>');"></div>
                                <div class="banner_content">
                                    <span class="mobile_cell_header">3D Animator</span>
                                    <p><b>Inspired</b>.</p>
                                    <span style="font-size: 120pt;">Make.</span>
                                </div>
                            </div>
                            <div class="triangle_down_left"></div>
                        </a>
                    </td>
                    <td class="banner_container" id="photographer_banner">
                        <!-- Photographer flyout -->
                        <a id="photo_link" href="javascript:loadPage('photographer.php', '#window_right')">
                            <div class="banner">
                                <div class="banner_background" style="background-image: url('<?php echo $photography_image; ?>');"></div>
                                <div class="banner_content">
                                    <span class="mobile_cell_header">Photographer</span>
                                    <p><b>Visionary</b>.</p>
                                    <span style="font-size: 120pt;">See.</span>
                                </div>
                            </div>
                            <div class="triangle_down_left"></div>
                        </a>
                    </td>
                    <td class="banner_container" id="musician_banner">
                        <!-- Musician flyout -->
                        <a id="musician_link" href="javascript:loadPage('musician.php', '#window_down')">
                            <div class="banner">
                                <div class="banner_background" style="background-image: url('<?php echo $musician_image; ?>');"></div>
                                <div class="banner_content">
                                    <span class="mobile_cell_header">Musician</span>
                                    <p><b>Expressive</b>.</p>
                                    <span style="font-size: 120pt;">Play.</span>
                                </div>
                            </div>
                            <div class="triangle_down_left"></div>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
        <div id="window_up" class="surrounding_windows"></div>
        <div id="window_left" class="surrounding_windows"></div>
        <div id="window_down" class="surrounding_windows"></div>
        <div id="window_right" class="surrounding_windows"></div>
    </body>
</html>
