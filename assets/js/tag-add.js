onload = () => {
    // Courses
    const coursesArticles = document.querySelectorAll('.tag-course');

    coursesArticles.forEach(article => {
        const coursesSpans = article.querySelectorAll('.post-tag');

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

    // Add class to course tag on post page
    function textEqual(text, element) {
        if (element) {
            if (element.textContent == text) {
                return true
            }
        }
        return false
    }
    const postPageTag = document.querySelector(".gh-article-tag");
    if (textEqual("course", postPageTag)) {
        postPageTag.classList.add("post-page-course-tag");
    }
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
            if (span.textContent!= "Read More") {
                span.classList.add('tag-cs-club-span');
            }
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

};
