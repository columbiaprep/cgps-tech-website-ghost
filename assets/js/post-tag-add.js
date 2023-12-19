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
}
