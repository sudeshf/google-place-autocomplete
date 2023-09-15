import { useEffect, useMemo, useState } from "react";
import BasicTextFields from "../components/textField/basicTextFields";
import { useApp } from "../hooks/useApp";
import { useSelector } from "react-redux";
import { AppState } from "../store/app-store";
import CustomizedList from "../components/list/listBox";
import GoogleMapComponent from "../components/googleMap/googleMap";
import { Box } from "@mui/material";

function App() {
  const key = process.env.REACT_APP_GOOGLE_API_KEY!;
  const center = useMemo(() => ({ lat: 3.1412, lng: 101.68653 }), []);
  const [newLocation, setNewLocation] = useState(center);
  const [searchText, setSearchText] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const { getSuggestedLocations, removeLocations } = useApp();
  const { suggestedLocations = [] }: Partial<AppState> = useSelector(
    (state: any) => state.appReducer
  );

  useEffect(() => {
    const load = async () => {
      getSuggestedLocations({
        searchText: searchText,
        apiKey: key,
      });
    };
    load();
  }, [searchText]);

  const changeAddress = (address: string, lat: number, lng: number) => {
    setAddress(address);
    setSearchText("");
    removeLocations();
    setNewLocation({
      lat: lat,
      lng: lng,
    });
  };

  return (
    <div className="App">
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%", height: "100%" },
        }}
        width="100%"
        height="100%"
        justifyContent="center"
      >
        <GoogleMapComponent center={newLocation} />
        <Box
          display="flex"
          sx={{
            "& .MuiTextField-root": { m: 0, width: "100%", height: "100%" },
          }}
          style={{
            padding: 10,
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
          }}
          width="100%"
          height="auto"
          position="absolute"
          justifyContent="center"
        >
          <BasicTextFields
            onChange={setSearchText}
            address={address}
            searchText={searchText}
          />
        </Box>
        <Box
          display="flex"
          sx={{
            "& .MuiTextField-root": { m: 0, width: "100%", height: "100%" },
          }}
          style={{
            padding: 10,
            left: 0,
            top: 60,
            right: 0,
          }}
          width="100%"
          height="auto"
          position="absolute"
          justifyContent="center"
        >
          {suggestedLocations.length > 0 && (
            <CustomizedList
              locations={suggestedLocations}
              onChange={changeAddress}
            />
          )}
        </Box>
      </Box>
    </div>
  );
}

export default App;
