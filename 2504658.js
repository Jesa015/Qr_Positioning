const reader = new Html5Qrcode("camera");
let scannerOn = false;

function toggleScanner(){
    scannerOn = !scannerOn;
    if (scannerOn) {
        startScanner();
        mapContainer.style.display = "none";
        btn.innerText = "CANCEL";
    }else {
        stopScanner();
        mapContainer.style.display = "block";
        btn.innerText = "SCAN";
    }
}
function startScanner() {
    reader.start(
        { facingMode: "environment" },
        {},
        function (text) {
            const place = JSON.parse(text);
            showMarkerAt(place.top, place.left, place.name, place.latitude, place.longitude);
            toggleScanner();
        }
    ).catch(function(err){
        console.error(err);
    });
}
function stopScanner() {
    reader.stop();
}  
function showMarkerAt(top, left, name, inStock, price) {
    marker.style.top = top;
    marker.style.left = left;
    document.getElementById("name").innerText = "Name: " + name;
    document.getElementById("latitude").innerText = "latitude: " + latitude;
    document.getElementById("longitude").innerText = "longitude: " + longitude;
    
}

