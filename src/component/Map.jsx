import { useEffect, useState } from "react";
import L from "leaflet"


function Map(props) {
    const [initialLocation, setInitialLocation] = useState(false);


 useEffect(() => {
        var map = L.map('map', {zoomControl: true}).setView([props.lat, props.lng], 13);
        var marker = L.marker([props.lat, props.lng]).addTo(map);

        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        
        const showCurrentLocation = () => {
            map.locate({setView: true, maxZoom: 16});
        }
        function onLocationFound(e) {
                var radius = e.accuracy;

                if(!initialLocation){
                    L.marker(e.latlng).addTo(map)
                    .bindPopup("you're within "+ radius + " meters from this point").openPopup();

                    L.circle(e.latlng, radius).addTo(map);
                     setInitialLocation(e.latlng);
                }
            }
        map.on('locationfound', onLocationFound);

    if(!props.lat|| !props.lng){
        showCurrentLocation();
    }else {
         const ipLocation = [props.lat, props.lng];
      map.setView(ipLocation, 13);
      L.marker(ipLocation).addTo(map).bindPopup("IP Address Location").openPopup();
    }


   
    return () => {
        map.off('locationfound', onLocationFound);
        map.remove();
    }; 
   

    }, [props.lat, props.lng]);

    return <div id="map"></div>
}

export default Map;