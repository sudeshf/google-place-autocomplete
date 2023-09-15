import { useDispatch } from "react-redux";
import { setLoactions, setLoading } from "../store/app-store";
import { IGetLocations } from "../interfaces/app-interface";
import apiService from "../services/apiService";

export const useApp = () => {
  const dispatch = useDispatch();

  const getSuggestedLocations = (data: IGetLocations) => {
    dispatch(setLoading({ loading: true }));
    return apiService
      .getSuggestedLocations(data)
      .then((r) => {
        const { results } = r.data;
        if (results) {
          const formattedResult = results.map((item: any) => {
            return {
              place_id: item.place_id,
              name: item.name,
              icon: item.icon,
              formatted_address: item.formatted_address,
              geometry: {
                lat: item.geometry.location.lat,
                lng: item.geometry.location.lng,
              },
            };
          });
          dispatch(setLoactions({ data: formattedResult }));
          return;
        }
        throw new Error("Loading location failed");
      })
      .catch((e) => {
        return false;
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };

  const removeLocations = () => {
    dispatch(setLoactions({ data: [] }));
    return;
  };

  return {
    getSuggestedLocations,
    removeLocations,
  };
};
