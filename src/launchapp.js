document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('.sidenav').children[2];
    const aboutPopup = document.querySelector('.form-box.about');
    const closeAboutPopup = document.querySelector('.icon-close-about');

    aboutLink.addEventListener('click', function() {
        aboutPopup.style.display = 'block';
    });

    closeAboutPopup.addEventListener('click', function() {
        aboutPopup.style.display = 'none';
    });
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('focus', function() {
    this.placeholder = '';
});

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

searchInput.addEventListener('blur', function() {
    this.placeholder = 'Search anime...';
});

function search() {
    let input = document.getElementById('searchInput').value;
    if (input) {
        window.location.href = `https://www.google.com/search?q=${input}`;
        document.getElementById('searchInput').value = '';
        return false;
    } else {
        return false;
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("blurDiv").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("blurDiv").style.display = "none";
}