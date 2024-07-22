// // Granin setting
// var granimInstance = new Granim({
//     element: '#logo-canvas',
//     direction: 'left-right',
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#EB3349', '#F45C43'],
//                 ['#FF8008', '#FFC837'],
//                 ['#4CB8C4', '#3CD3AD'],
//                 ['#24C6DC', '#514A9D'],
//                 ['#FF512F', '#DD2476'],
//                 ['#DA22FF', '#9733EE']
//             ],
//             transitionSpeed: 2000
//         }
//     }
// });
// Glide setting for responsive 
  const config = {
    type: "carousel",
    perView: 3,
    breakpoints:{
        800: {
          perView: 2,
        
        }
        }
      }
  ;
  new Glide('.glide', config).mount()

// AOS setting
AOS.init();

//Leaf setting(for Map)
var map = L.map('map').setView([43.6532, -79.3832], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([43.6532, -79.3832]).addTo(map);
