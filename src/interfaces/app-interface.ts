export interface IGetLocations {
  apiKey?: string;
  searchText: string;
}

export interface IFormattedLocation {
  place_id: string;
  name: string;
  icon: string;
  formatted_address: string;
  geometry: {
    lat: number,
    lng: number,
  }
}
