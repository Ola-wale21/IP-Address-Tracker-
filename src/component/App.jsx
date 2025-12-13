import { useState} from 'react'
import Header from './Header';
import Map from './Map';
import Location from './Location';
import Footer from './Footer';

function App() {
    const[inputs, setInputs] = useState({
        ip: "", 
        location : {
            city: "",
            region: "", 
            timezone: "", 
            postalCode: "",
            lat: "", 
            lng: "",
        },
        isp: "",
    });

   

   
    function searchIP(inputData){
        setInputs(inputData);

    }

    return <div>
        <div className='header'>
        <Header  searchIP={searchIP} />
        <Location 
        ip={inputs.ip}
        city={inputs.location.city}
        region={inputs.location.region}
        timezone={inputs.location.timezone}
        isp={inputs.isp}
        postalCode={inputs.location.postalCode}/>
        </div>
        
        <Map lat={inputs.location.lat} lng={inputs.location.lng}/>
        <Footer />
    </div>
    
  
}

export default App
