import axios from "axios";
import { IGetLocations } from "../interfaces/app-interface";


class ApiService {
  route: string;
  constructor() {
    this.route = '';
  }
  getSuggestedLocations = async(data: IGetLocations) => {
    return await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${data.searchText}&key=${data.apiKey}`,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
  };
}
const service = new ApiService();

export default service;
