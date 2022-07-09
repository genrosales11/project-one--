// // Initialize Google Maps API
// var map;
// // Dummy data to display restaurants in a given area
// var restaurants = [
//     {
//         name: "Hawkers Asian Street Food",
//         lat: 28.560418,
//         lng: -81.364372
//     },
//     {
//         name: "Izziban Sushi & BBQ",
//         lat: 28.5535468,
//         lng: -81.3222981
//     }
// ];



// // Function that displays markers on the map for each restaurant
// function setMarkers(map) {
//     restaurants.forEach(res => {
//         var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(res.lat, res.lng),
//             title: res.name
//         })

//         // To add marker to the map
//         marker.setMap(map);

//         // Add an info window for each marker
//         var infoWindow = new google.maps.InfoWindow({
//             content: res.name
//         })

//         // Clicking at the marker displays the marker's associated restaurant name
//         marker.addListener("click", () => {
//             infoWindow.open({
//                 anchor: marker,
//                 map,
//                 shouldFocus: false
//             })
//         })
//     })
// }

// // Google Maps API function to display map
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 28.538902, lng: -81.378981 },
//         zoom: 12
//     })

//     // Dummy data: for each restaurant in the list, show the marker on the map
//     setMarkers(map);

// }

// window.initMap = initMap;





var searchBtn = document.getElementById("search-btn")
var catSearch = document.getElementById("choose-category")


// var userLocation = "San Francisco"
function cityInput(event) {
    event.preventDefault();

    var userLocation = document.getElementById("city-search").value;
    var category = catSearch.value;

    getData(userLocation, category)
    addCat()
}

// call yelp api
function getData(userLocation, category) {
    let queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${userLocation}&term=${category}`;
    const apiKey = 'S9-0qQhgv6fiYrqXXE9X-TIZd1aepWF1BA6eT6_wQnQXtp8R1SVNuaXBGaZO15-IizPiprlRb6IT7v_gz_Dfl7yzGpZD_sCSnedvAD89GvwKGf85mwqLPWc5JGjIYnYx'



    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${apiKey}`
        },
        data: {
            // term: searchTerm
            // location: userLocation
        }
    }).then(function (data) {
        console.log(data)

        for (i = 0; i < 5; i++) {

            var card = document.createElement("div")
            card.classList.add("card-class")

            var name = document.createElement("h2")
            name.textContent = data.businesses[i].name

            var address = document.createElement("p")
            address.textContent = data.businesses[i].location.display_address

            var image = document.createElement("img")
            image.src = data.businesses[i].image_url

            var price = document.createElement("p")
            price.textContent = data.businesses[i].price

            var ratings = document.createElement("p")
            ratings.textContent = data.businesses[i].rating

            var reviewCnt = document.createElement("p")
            reviewCnt.textContent = data.businesses[i].review_count

            var siteLink = document.createElement("p")
            siteLink.textContent = data.businesses[i].url

            var category = document.createElement("p")
            category.textContent = data.businesses[i].categories[0].title


            card.appendChild(name)
            card.appendChild(address)
            card.appendChild(image)
            card.appendChild(price)
            card.appendChild(ratings)
            card.appendChild(reviewCnt)
            card.appendChild(siteLink)
            card.appendChild(category)
            document.getElementById("card-container").appendChild(card)
        }

    });

}

function addCat() {
    console.log(catSearch.value)
}




searchBtn.addEventListener("click", cityInput)

// bulma dropdown event listener
// var dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener('click', function(event) {
//   event.stopPropagation();
//   dropdown.classList.toggle('is-active');
// });