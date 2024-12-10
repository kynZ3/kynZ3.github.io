$(document).ready(function () {
    // Initialize Slick Carousel
    $(".carousel").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
    });

    // Initialize Datepicker
    if ($("#datepicker").length) {
        $("#datepicker").datepicker();
    }

    // Autocomplete and Search Functionality for Football Page
    if ($(".football-videos").length) {
        const footballSuggestions = [
            "Prince Ave", "Grayson", "Hopewell",
            "amazing speed", "state champs", "game-winning touchdown",
            "agility", "defense", "victory", "conference"
        ];

        // Enable Autocomplete
        $("#search-input").autocomplete({
            source: footballSuggestions,
        });

        // Search Functionality
        $("#search-btn").on("click", function () {
            const searchTerm = $("#search-input").val().toLowerCase().trim();
            let found = false;

            $(".video-item").each(function () {
                const keywords = $(this).data("keywords").toLowerCase();
                if (keywords.includes(searchTerm)) {
                    $(this).show();
                    found = true;
                } else {
                    $(this).hide();
                }
            });

            // Show alert if no match is found
            if (!found) {
                alert("No matching highlight found.");
            }
        });

        // Reset videos when input is cleared
        $("#search-input").on("input", function () {
            if ($(this).val().trim() === "") {
                $(".video-item").show();
            }
        });
    }

    // Autocomplete and Search + Carousel Functionality
    if ($(".carousel .slide").length) {
        const carouselSuggestions = [
            "Prince Ave", "Grayson", "Hopewell",
            "amazing speed", "state champs", "game-winning touchdown",
            "agility", "defense", "victory", "conference"
        ];

        $("#search-input").autocomplete({
            source: carouselSuggestions,
        });

        $("#search-btn").on("click", function () {
            const searchTerm = $("#search-input").val().toLowerCase().trim();
            let found = false;

            $(".carousel .slide").each(function (index) {
                const keywords = $(this).data("keywords").toLowerCase();
                if (keywords.includes(searchTerm)) {
                    $(".carousel").slick("slickGoTo", index);
                    found = true;
                    return false; // Break the loop after finding a match
                }
            });

            if (!found) {
                alert("No matching highlight found.");
            }
        });

        $("#search-input").on("input", function () {
            if ($(this).val().trim() === "") {
                $(".carousel").slick("slickGoTo", 0); // Reset to the first slide
            }
        });
    }

    // Fetch Inspirational Quotes
    
    $("#fetchQuoteBtn").click(function () {
    const category = "inspirational";
    $.ajax({
        method: "GET",
        url: `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        headers: { "X-Api-Key": "r8+zkVFFEDo7j95LBv18cw==L8WsTigzxfw8G8Y9" },
        success: function (result) {
            if (result && result.length > 0) {
                $("#quote").text(`"${result[0].quote}"`);
                $("#author").text(`- ${result[0].author}`);
            } else {
                $("#quote").text("No quotes found. Please try again later.");
            }
        },
        error: function (jqXHR) {
            console.error("Error fetching quote:", jqXHR.responseText);
            $("#quote").text("Error retrieving quote. Try again later.");
            },
        });
    });
});
