onload = () => {
    // Robotics
    const roboticsArticles = document.querySelectorAll('.tag-robotics');

    roboticsArticles.forEach(article => {
        const roboticsSpans = article.querySelectorAll('span');

        roboticsSpans.forEach(span => {
            span.classList.add('tag-robotics-span');
        });
    });
    // CS Club

    const csClubArticles = document.querySelectorAll('.tag-cs-club');

    csClubArticles.forEach(article => {
        const csClubSpans = article.querySelectorAll('span');

        csClubSpans.forEach(span => {
            span.classList.add('tag-cs-club-span');
        });
    });
    // Girls Who Code

    const girlsWhoCodeArticles = document.querySelectorAll('.tag-girls-who-code');

    girlsWhoCodeArticles.forEach(article => {
        const girlsWhoCodeSpans = article.querySelectorAll('span');

        girlsWhoCodeSpans.forEach(span => {
            span.classList.add('tag-girls-who-code-span')

        });
    });

    // Courses

    const coursesArticles = document.querySelectorAll('.tag-course');

    coursesArticles.forEach(article => {
        const coursesSpans = article.querySelectorAll('span');

        coursesSpans.forEach(span => {
            span.classList.add('tag-courses-span')
        });
    });

    // Course post title class add for margin top subtract
    coursesArticles.forEach(article => {
        const coursesTitles = article.querySelectorAll('.post-title');

        coursesTitles.forEach(span => {
            span.classList.add('course-post-title')
        });
    });

    // get height of post-top in course articles
    var postTopMarginIntPlusString = "";
    coursesArticles.forEach(article => {
        const postTops = article.querySelectorAll('.post-top');
        postTops.forEach(postTop => {
            const postTopHeight = postTop.offsetHeight;
            postTopMarginIntPlusString = "-" + postTopHeight.toString() + "px";
        });
    });


    const coursePostTitles = document.querySelectorAll('.course-post-title');
    coursePostTitles.forEach(title => {
        title.classList.add('course-post-title-margin-top');
    });
    console.log(postTopMarginIntPlusString);
    $('.course-post-title-margin-top').css('margin-top', postTopMarginIntPlusString);
    
};
