import React, {useState} from 'react'

const Service = ({service, updateWifiClick}) => {

  return (
    <div>
       <p>{service.kind_of_place}</p>
       <p>{service.description}</p>
       <p>{service.has_wifi ? "Free WiFi" : "No WiFi"}</p>
       <button onClick={updateWifiClick}>Edit WiFi</button>
    </div>
  )
}

export default Service