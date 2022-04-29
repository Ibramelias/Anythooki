
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
        window.open('res.html')
        var cityName = $('.city').val();
        var arrivalDate = $('.arrival-date').val();
        var departureDate = $('.departure-date').val();
        var adultCount = $('#adultcount').val()
        var roomCount = $('#roomcount').val()
        console.log(cityName)
        console.log(arrivalDate)
        console.log(departureDate)
        console.log(adultCount)
        console.log(roomCount)





        // const settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://skyscanner44.p.rapidapi.com/search-hotel?locationId=95673383&adults=" + adultCount + "&rooms=" + roomCount + "&checkin=" + arrivalDate + "&checkout=" + departureDate + "&currency=USD",
        //     "method": "GET",
        //     "headers": {
        //         "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
        //         "X-RapidAPI-Key": "d900d6eecdmsh4d24d7bb04a0f4dp1badabjsnad948b39d7fe"
        //     }
        // };

        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });

    })



})
