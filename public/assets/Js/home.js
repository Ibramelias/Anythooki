
function responsiveNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = 'topnav'
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('solid')
            $('.topnav').addClass('solid2');
        } else {
            $('.navbar').removeClass('solid');
            $('.topnav').removeClass('solid2')
        }
    })






    $('#lodging-btn').on("click", function (e) {
        e.preventDefault()
        var cityName = $('.city').val();
        var arrivalDate = $('.arrival-date').val();
        var departureDate = $('.departure-date').val();
        console.log(arrivalDate)



        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://skyscanner44.p.rapidapi.com/search-hotel?locationId=95673383&adults=1&rooms=1&checkin=" + arrivalDate + "&checkout=" + departureDate + "&currency=EUR",
            "method": "GET",
            "headers": {
                "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
                "X-RapidAPI-Key": "d900d6eecdmsh4d24d7bb04a0f4dp1badabjsnad948b39d7fe"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    })



})
