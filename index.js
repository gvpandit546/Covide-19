function updateData(){
    // fetch us for to scanned a Data.json File
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        rsp.data.forEach(element => {
            // useing element call data
            latitude = element.latitude;
            longitude = element.longitude;

            // Create a draggable Marker (https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/)
            new mapboxgl.Marker({
                draggable: false
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}

// Calling function 
updateData();