onload = () => {
    const articles = document.querySelectorAll('.tag-robotics');

    articles.forEach(article => {
        const spans = article.querySelectorAll('span');

        spans.forEach(span => {
            span.classList.add('tag-robotics-span');
        });
    });

}
