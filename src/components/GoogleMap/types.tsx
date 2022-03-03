import { Feature, Geometry } from 'geojson'

export namespace Types {
  export type CoordinatesData = {
    id: number
    latitude: number
    longitude: number
  }

  export type MapObject = {
    mapFeatures: Array<Feature<Geometry | null>>
  }
}