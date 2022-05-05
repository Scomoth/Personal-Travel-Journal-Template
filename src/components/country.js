import React from "react"

export default function Country(props) {
//    let badgeText
/*    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
*/    
    return (
        
        <div className="b1">
            <img 
                className="b1--img"
                src={props.country.imageUrl}  
            />
            <div>
                <span className="b1--location">{props.country.location}</span>
                <span className="b1--googleMapsUrl">{props.country.googleMapsUrl}</span>
                <p className="b1--title">{props.country.title}</p>
                <p className="b1--startDate">{props.country.startDate}-{props.country.endDate}</p>
                <p className="b1--description">{props.country.description}</p>
            </div>
        </div>
    )
}