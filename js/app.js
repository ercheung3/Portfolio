$(() => {
    /* 0: none  1: inline   2: block    3: grid     4: flex */
    const displayType = ["none", "inline", "block", "grid", "flex"];
    const widths = [481, 821];
    let currIndex = 0;
    console.log($);
    console.log("javascript is loaded.");

    carouselImage();
    //checkWindowWidth();
    preload();
    //Check for screen size to add on click to carousel image
    $(window).resize(function () {
        //checkWindowWidth();
    });

    function preload() {
        let element = $(".loading-container");
        element.addClass("hidden");

        $(".loading-container").on("click", function () {
            const element = $(".loading-container");
            element.removeClass("hidden");
            console.log("LOADING CLICK");
        });

        $(".menu-container").on("click", function () {
            const menu = $(".navbar");
            showElement(menu, displayType[4], true);
            console.log("MENU CLICK");
        });

        $(".navbar-list-item").on("click", function () {
            const menu = $(".navbar");
            showElement(menu, displayType[4], true);
            console.log("LINK CLICK");
        });
    }


    function showElement(element, display, animate) {
        let animateText = "";
        if (animate) animateText = "-animated";
        /*
        element.toggle( function() {
            $(".navbar").animate( {
                opacity: 1,
                height: "show"
            }, 2000);
        });
        */
        //element.toggle(`active-${display}${animateText}`);
        if (element.hasClass(`active-${display}${animateText}`)) element.removeClass(`active-${display}${animateText}`);
        else element.addClass(`active-${display}${animateText}`);
    }

    function checkWindowWidth() {
        if ($(window).width() > widths[1]) carouselImage(true);
        else carouselImage(false);
    }

    function carouselImage() {
        let imageLength = $(".carousel-images").children().length;
        $(".next").on("click", function () {
            changeImage(1);
        });

        $(".previous").on("click", function () {
            changeImage(-1);
        });

        $(".carousel-images").on("click", function () {
            changeImage(1);
        })

        //setTimeout(function() {changeImage(1)},1000);

        function changeImage(increment) {
            let currImage = getImage(currIndex);
            currImage.css("display", "none");
            currIndex = mod((currIndex + increment), imageLength);
            currImage = getImage(currIndex);
            currImage.css("display", "block");

        }

        function getImage(index) {
            return $(`.carousel-images img:nth-child(${index + 1})`)
        }

        function mod(num, mod) {
            return ((num % mod) + mod) % mod;
        }
    }

});