"use client"

import React from 'react'
import { Map } from 'react-map-gl';

const MapBox = () => {
  return (
    <div className='bg-white h-5/6 borde rounded-lg overflow-hidden'>
      
{/*  */}

<Map 
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}

      style={{width: '100%', height: 500, borderRadius:10}}
      mapStyle="mapbox://styles/mapbox/streets-v9"

      
    />


    </div>
  )
}

export default MapBox