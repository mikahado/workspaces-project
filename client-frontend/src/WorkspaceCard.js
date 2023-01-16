import React from 'react'
import Review from './Review'
import Service from './Service'

const WorkspaceCard = ({workspace}) => {

const {name, address, reviews, services} = workspace

const service = services.map(s => 
        <Service 
            key={s.id}
            service={s}
        />
    )

const review = reviews.map(r => 
        <Review 
            key={r.id}
            review={r}
        />
    )

const ratings = reviews.map(r => r.rating) 
const ratingsAvg = ratings.reduce((a,b) => a + b) / ratings.length 

  return (
    <div>
        <h2>{name}</h2>
        <p>photo of workspace</p>
        {service}

        <p>{address}</p>
        {/* <p>{kindOfPlace}</p>
        <p>{hasWifi ? "wifi" : "no wifi" }</p> */}
         {review}
    </div>
  )
}

export default WorkspaceCard