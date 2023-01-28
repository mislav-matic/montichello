let map;

window.addEventListener('DOMContentLoaded', (event) => {
  const menuItems = document.querySelectorAll(
    '#simple-modern .menu-item'
  );

  menuItems.forEach((menuItem) => {
    menuItem.onclick = function () {
      menuItems.forEach((currentItem) => {
        currentItem.children[0].className = 'inactive';
      });

      menuItem.children[0].className = 'active';
    };
  });
});

function showMap(lat, lng) {
  const mapDiv = document.getElementById('map');
  let scrollIntoView = true;

  if (!lat) {
    lat = 40.703129696095225;
    lng = -74.04423279561613;
    scrollIntoView = false;
  }

  // Source: https://developers.google.com/maps/documentation/javascript/adding-a-google-map
  map = new google.maps.Map(mapDiv, {
    mapId: '85bc584fc6c5c51b',
    center: { lat, lng },
    zoom: 8,
  });

  if (scrollIntoView) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    mapDiv.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }

  const svgMarker = {
    path: 'M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
    fillColor: 'blue',
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(0, 20),
  };

  const marker = new google.maps.Marker({
    position: { lat, lng },
    scale: 1.5,
    map: map,
    icon: svgMarker,
  });
}
