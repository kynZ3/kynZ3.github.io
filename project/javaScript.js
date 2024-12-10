//JS for index/home page, functional data picker
<!-- Initialize Slick Carousel and jQuery UI Datepicker -->
$(document).ready(function() {
            // Initialize Slick Carousel
            $('.carousel').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                adaptiveHeight: true
            });

            // Initialize Datepicker
            $("#datepicker").datepicker();
 });



// JavaScript for Autocomplete and Search Functionality
// This is js for the search bar on the football page

        $(document).ready(function() {
            // Define keywords for autocomplete suggestions
            const suggestions = [
                "Prince Ave", "Grayson", "Hopewell",
                "amazing speed", "state champs", "game-winning touchdown",
                "agility", "defense", "victory", "conference"
            ];

            // Enable Autocomplete
            $("#search-input").autocomplete({
                source: suggestions
            });

            // Search Functionality
            $("#search-btn").on("click", function() {
                const searchTerm = $("#search-input").val().toLowerCase();
                $(".video-item").each(function() {
                    const keywords = $(this).data("keywords");
                    if (keywords.includes(searchTerm)) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });

            $("#search-input").on("input", function() {
                if ($(this).val() === "") {
                    $(".video-item").show();
                }
            });
        });




        $(document).ready(function() {
            $('.carousel').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                adaptiveHeight: true
            });
        });



/*JS for Search + Carousel */ 
$(document).ready(function() {
    // Initialize Slick Carousel
    $('.carousel').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Autocomplete Suggestions
    const suggestions = [
        "prince ave", "grayson", "hopewell",
        "amazing speed", "state champs", "game-winning touchdown",
        "agility", "defense", "victory", "conference"
    ];

    $("#search-input").autocomplete({
        source: suggestions
    });

    // Search Functionality
    $("#search-btn").on("click", function() {
        const searchTerm = $("#search-input").val().toLowerCase().trim();
        let found = false;

        $(".carousel .slide").each(function(index) {
            const keywords = $(this).data("keywords").toLowerCase();
            if (keywords.includes(searchTerm)) {
                $('.carousel').slick('slickGoTo', index);
                found = true;
                return false; // Exit the loop
            }
        });

        if (!found) {
            alert("No matching highlight found.");
        }
    });

    // Reset carousel when input is cleared
    $("#search-input").on("input", function() {
        if ($(this).val().trim() === "") {
            $('.carousel').slick('slickGoTo', 0); // Reset to the first slide
        }
    });
});






//To get inspirational quotes

var category = 'inspirational'
$("#fetchQuoteBtn").click(function () {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'r8+zkVFFEDo7j95LBv18cw==L8WsTigzxfw8G8Y9'},
        contentType: 'application/json',
        success: function(result) {
            $("#quote").text(result[0].quote)
            console.log(result[0].quote);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
});
