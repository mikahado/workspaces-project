import React, {useState} from 'react'

const Service = ({service, handleUpdateWifi}) => {

  return (
    <div>
       <p>{service.kind_of_place}</p>
       <p>{service.description}</p>
       <p>{service.has_wifi ? "Free WiFi" : "No WiFi"}</p>
       <button onClick={handleUpdateWifi}>Edit WiFi</button>
    </div>
  )
}

export default Service