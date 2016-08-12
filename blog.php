<?php
    $xml_files = array_slice(scandir("blog/entries/"), 2);
    $blog_posts = array();
    foreach ($xml_files as $xml) {
        $parse = simplexml_load_file("blog/entries/" . $xml);
        $id = $parse->id;
        $time = $parse->time;
        $title = $parse->title;
        $data = $parse->data;
        $author = $parse->author;
        array_push($blog_posts, new BlogPost($id, $title, $time, $data, $author));
    }

    // Sorts by post ID.
    usort($blog_posts, function($a, $b)
    {
        return $a->id > $b->id;
    });

    class BlogPost {
        function __construct($id, $title, $time, $data, $author) {
            $this->id = $id;
            $this->title = $title;
            $this->time = $time;
            $this->data = $data;
            $this->author = $author;
        }

        function format() {
            ?>
            <div class="blog_post">
                <br>
                <div class="blog_date_text">
                    <span style="font-size: 98pt; font-weight: bold;">
                    <?php
                        $date = DateTime::createFromFormat("Y-m-d", $this->time);
                        echo $date->format("d");
                    ?>
                    </span><br>
                    <span style="font-size: 48pt; float: left;">
                        <?php echo strtoupper($date->format("M")); ?>
                    </span><br>
                    <span style="font-size: 28pt; float: left;">
                        <?php echo $date->format("Y"); ?>
                    </span>
                </div>
                <div class="blog_post_title">
                    <?php echo $this->title; ?>
                </div>
                <div class="blog_post_text">
                    <?php echo $this->data; ?>
                </div>
                <br><hr>
            </div>
            <?php
        }
    }
?>
<div id="blog_page_body">
    <div class="back_arrow" id="back_arrow_blog">
        <a href="javascript:goBack()">
            <img src="/jeff-demanche/open-iconic-master/svg/arrow-circle-bottom.svg" alt="Go Back" height=64>
        </a>
    </div>
    <header id="blog_header">
        Jeff Demanche<br>
    </header>
    <div id="blog_content">
        <?php
            foreach ($blog_posts as $post) {
                $post->format();
            }
        ?>
    </div>
</div>
