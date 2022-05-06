
// $(document).ready(function () {

//     console.log("hello flight")

//     $('#findFlights-btn').on("click", function (e) {
//         e.preventDefault()
//         var resPage = window.open('res.html')
//         resPage.onload = function () {
// let departureTime = $(".departure-input-date").val();
// let arrivalTime = $('.arrival-input-date').val();

// let departureAirport = $('.departure-airport').val();
// let arrivalAirport = $('.arrival-airport').val();
// console.log(departureAirport)

// alert('we open new page')
// }


// const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://skyscanner44.p.rapidapi.com/search-extended?adults=1&origin=" + departureAirport + "&destination=" + arrivalAirport + "&departureDate=" + departureTime + "&currency=EUR",
//     "method": "GET",
//     "headers": {
//         "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
//         "X-RapidAPI-Key": "d900d6eecdmsh4d24d7bb04a0f4dp1badabjsnad948b39d7fe"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
//     $('#all-results').text(JSON.stringify(response))
// });

// })



// })
function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search)
    return parameters.get(parameterName)

}

// const arrivalDate = getParameter('ArrivalDate')
// console.log(arrivalDate)

// const departureDate = getParameter('DepartureDate')
// console.log(departureDate)
// const adultCount = getParameter('adultcount')
// console.log(adultCount)
// const childrenCount = getParameter('childrencount')
// console.log(childrenCount)

// const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://skyscanner44.p.rapidapi.com/search-extended?adults=1&origin=" + departureAirport + "&destination=" + arrivalAirport + "&departureDate=" + departureTime + "&currency=EUR",
//     "method": "GET",
//     "headers": {
//         "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
//         "X-RapidAPI-Key": "d900d6eecdmsh4d24d7bb04a0f4dp1badabjsnad948b39d7fe"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
//     $('#all-results').text(JSON.stringify(response))
// });
