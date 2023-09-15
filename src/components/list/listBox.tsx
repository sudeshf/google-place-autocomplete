import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import PlaceIcon from "@mui/icons-material/Place";

interface Props {
  locations: any[];
  onChange: (address: string, lat: number, lng: number) => void;
}

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const CustomizedList = ({ locations, onChange }: Props) => {
  const setAddress = (address: string, lat: number, lng: number) => {
    onChange(address, lat, lng);
  };
  return (
    <Box
      display="flex"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      justifyContent="center"
      maxHeight="500px"
      overflow="hidden"
    >
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={3} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <Box
              sx={{
                bgcolor: "rgba(71, 98, 130, 0.2)",
                pb: 0,
                pt: 0,
                overflow: "auto",
                maxHeight: 300,
              }}
            >
              {locations.map((item, index) => (
                <ListItemButton
                  key={index}
                  sx={{ py: 1, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                  onClick={() => {
                    setAddress(
                      item.formatted_address,
                      item.geometry.lat,
                      item.geometry.lng
                    );
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <PlaceIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.formatted_address}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default CustomizedList;
