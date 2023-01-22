import React, { useState } from 'react'

const Service = ({service, updateWifiClick}) => {

  const [wifiStatus, setWifiStatus] = useState(true)

  const handleWifiState = () => {
    console.log(wifiStatus)
    handleWifiToggle()
    setWifiStatus(!wifiStatus)
  }


  function handleWifiToggle(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/${service.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: wifiStatus,
      }),
    })
      .then((r) => r.json())
      .then((updatedWifiStatus) => updateWifiClick(updatedWifiStatus));
  }

  return (
    <div>
       <p>{service.kind_of_place}</p>
       <p>{service.description}</p>
       <p>{service.has_wifi ? "Free WiFi" : "No WiFi"}</p>
       <button onClick={handleWifiState}>Edit WiFi</button>
    </div>
  )
}

export default Service