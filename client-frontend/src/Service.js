import React from 'react'

const Service = ({service}) => {


  return (
    <div>
       <p>{service.kind_of_place}</p>
       <p>{service.description}</p>
       <p>{service.has_wifi ? "Free WiFi" : "No WiFi"}</p>
    </div>
  )
}

export default Service