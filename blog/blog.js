document.getElementById('theme').addEventListener('change', function (event) {
    if (event.target.checked) {
        document.body.classList.replace('light-theme', 'dark-theme');
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
    }
});

document.querySelectorAll('.tag-content').forEach(tag => {
    tag.addEventListener('click', function () {
        const tagType = this.getAttribute('data-tag');
        document.querySelectorAll('.post').forEach(post => {
            if (post.getAttribute('data-tags').split(',').includes(tagType)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

