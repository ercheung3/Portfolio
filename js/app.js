$( () => {
    /* 0: none  1: inline   2: block    3: grid     4: flex */
    const displayType = ["none","inline","block","grid","flex"];

    console.log($);
    console.log("javascript is loaded.");

    $(".menu-container").on("click",function() {
        const menu = $(".navbar");
        showElement(menu,displayType[4],true);
        console.log("MENU CLICK");
    });
    $(".navbar-list-item").on("click",function() {
        const menu = $(".navbar");
        showElement(menu,displayType[4],true);
        console.log("LINK CLICK");
    });
    function showElement(element,display,animate) {
        let animateText = "";
        if(animate) animateText = "-animated";
        /*
        element.toggle( function() {
            $(".navbar").animate( {
                opacity: 1,
                height: "show"
            }, 2000);
        });
        */
        //element.toggle(`active-${display}${animateText}`);
        if(element.hasClass(`active-${display}${animateText}`)) element.removeClass(`active-${display}${animateText}`);
        else element.addClass(`active-${display}${animateText}`);
    }
});