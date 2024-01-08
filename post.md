# Post Object Information


### Post object attributes
<ul>
    <li>id — the Object ID of the post</li>
    <li>comment_id — The old, pre-1.0 incremental id of a post if present, or else the new Object ID</li>
    <li>title — the title of your site post</li>
    <li>slug — slugified version of the title (used in urls and also useful for class names)</li>
    <li>excerpt — a short preview of your post content</li>
    <li>content — the content of the post</li>
    <li>url — the web address for the post page (see url helper) and special attributes</li>
    <li>feature_image — the cover image associated with the post</li>
    <li>feature_image_alt — alt text for the cover image associated with the post</li>
    <li>feature_image_caption — caption for the cover image associated with the post (supports basic html)</li>
    <li>featured — indicates a featured post. Defaults to false</li>
    <li>page — true if the post is a page. Defaults to false</li>
    <li>meta_title — custom meta title for the post</li>
    <li>meta_description — custom meta description for the post</li>
    <li>published_at — date and time when the post was published</li>
    <li>updated_at — date and time when the post was last updated</li>
    <li>created_at — date and time when the post was created</li>
    <li>primary_author — a formatted link to the first author</li>
    <li>tags — a list of tags associated with the post</li>
    <li>primary_tag — direct reference to the first tag associated with the post</li>
    *** All taken from <a href="https://ghost.org/docs/themes/contexts/post/">https://ghost.org/docs/themes/contexts/post/</a>
</ul>