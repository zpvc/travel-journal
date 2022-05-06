import React from 'react';
import Pin from '../pin.png';
export default function Destination (props) {
   let destinations = props.data.map((dest) =>
       <div className="Destination">
           <div className="Destination--ImgSection">
            <img className="Destination--Img" srcSet={dest.imageUrl} width={125} height={167} alt="Destination of {dest.location}" />
           </div>
           <div className="Destination--TextSection text-left">
               <span><img className="Destination--Img--Pin" srcSet={Pin} width={7} height={9.55} alt="" /> {dest.location} <a target="_blank" rel="noreferrer" href={dest.googleMapsUrl} >View on Google Maps </a></span>
               <h2>{dest.title}</h2>
               <p><strong>{dest.startDate} - {dest.endDate}</strong></p>
               <p>{dest.description}</p>

           </div>

       </div>
   );
    return (
        <div className="DestinationBlock">
            {destinations}
        </div>
    )
}
