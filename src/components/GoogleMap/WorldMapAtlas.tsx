import React, { useState, useEffect } from 'react'
import { geoEqualEarth, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import { Feature, FeatureCollection, Geometry } from 'geojson'

const uuid = require('react-uuid')

const scale: number = 180
const cx: number = 300
const cy: number = 300
const countriesUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMapAtlas = () => {
  const [geographies, setGeographies] = useState<[] | Array<Feature<Geometry | null>>>([])

  useEffect(() => {
    fetch('/data/world-110m.json').then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston we have a problem: ${response.status}`)
        return
      }
      response.json().then((worldData) => {
        const mapFeatures: Array<Feature<Geometry | null>> = ((feature(worldData, worldData.objects.countries) as unknown) as FeatureCollection).features
        setGeographies(mapFeatures)
      })
    })
  }, [])

  const projection = geoEqualEarth().scale(scale).translate([cx, cy]).rotate([0, 0])

  return (
    <>
      <svg width={scale * 6} height={scale * 6} viewBox="0 0 800 450">
        <g>
          {(geographies as []).map((d, i) => (
            <path
              key={`path-${uuid()}`}
              d={geoPath().projection(projection)(d) as string}
              fill={`rgba(38,50,56,${(1 / (geographies ? geographies.length : 0)) * i})`}
              stroke="aliceblue"
              strokeWidth={0.5}
            />
          ))}
        </g>
      </svg>
    </>
  )
}

export default WorldMapAtlas