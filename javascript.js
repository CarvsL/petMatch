function initMap() {
    var companyLocation = { lat: -24.11492267456477, lng: -46.66667252109369 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: companyLocation
    });

    var marker = new google.maps.Marker({
        position: companyLocation,
        map: map,
        title: 'Localização da Minha Empresa'
    });
}
