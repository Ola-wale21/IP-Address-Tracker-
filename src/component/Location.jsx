import React from "react";

function Location (props){

    return <div className="location-parent">
            <div className='location'>
            <section>
             <p className="title">IP ADDRESS</p>
             <p className="result">{props.ip}</p>
            </section>
         <hr />
         <section>
            <p className="title">LOCATION</p>
            <p className="result">{props.city}, {props.region} <br />{props.postalCode}</p>
            </section>
         <hr />
         <section>
            <p className="title">TIMEZONE</p>
            <p className="result">UTC {props.timezone}</p>
         </section>
         <hr />
         <section>
            <p className="title">ISP</p>
            <p className="result">{props.isp}</p>
        </section>
        </div>
        </div>
} 
export default Location;