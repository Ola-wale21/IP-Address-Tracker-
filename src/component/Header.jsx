
import {useState, useEffect} from "react";
import axios from "axios"


function Header(props) {
    const[ipAddress, setIpAddress] = useState("");
    const[locationData, setLocationData] = useState(null);

    function handleChange (event){
        const address = event.target.value;
        setIpAddress(address);   
    }

    async function findLocation(data) {
        try {
            const response = await axios.get('https://geo.ipify.org/api/v2/country,city', {
                params: {
                    "apiKey": "at_xbhvMEGQoDcvbV3I572K67PtUuRAG",
                    "ipAddress": data,
                }
            });
            setLocationData(response.data);
           


        }catch(error){
            console.error(error.message);
            alert(`Error code ${error.response.status}, ${error.response.data.messages}`)
        }
    }

    async function handleSearch() {
        await findLocation(ipAddress);
    }

    useEffect(() => {
        if(locationData) {
            props.searchIP(locationData);
             console.log(locationData);
        }
    },[locationData, props])
    
    return <div className="input-area">
            <h1>IP Address Tracker</h1>
            <div className="input-box">
            <label htmlFor="ip-address"></label>
            <input type="text" id='ip-address' placeholder='192.212.174.101' onChange={handleChange} value={ipAddress}/>
            <button type='submit' onClick={handleSearch}> <img src="./images/icon-arrow.svg" alt="icon-arrow" /></button>
            </div>
    </div>
}
export default Header;