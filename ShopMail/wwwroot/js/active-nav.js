
  // Thêm sự kiện click vào các liên kết

document.addEventListener("DOMContentLoaded", function () {
    var homeLink = document.querySelector('.menu ul li a[href="/home.html"]');
    if (homeLink) {
        homeLink.parentNode.classList.add("active");
    }
});
    document.addEventListener("DOMContentLoaded", function () {
        var menuLinks = document.querySelectorAll(".menu ul li a");
     

    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", function (event) {
            //event.preventDefault(); 

            var menuItems = document.querySelectorAll(".menu ul li");
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove("active");
            }

           
        });
    }

        var currentURL = window.location.pathname;
        var activeLink;
        if (currentURL == "/home.html" || currentURL == "/") {
            activeLink = document.querySelector('.menu ul li a[href="/home"]');
            console.log(activeLink);
            

        } else {
            activeLink = document.querySelector('.menu ul li a[href="' + currentURL + '"]');

        }  
    if (activeLink) {
        activeLink.parentNode.classList.add("active");
    }
  });
