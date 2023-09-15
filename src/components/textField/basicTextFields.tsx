import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  onChange: (name: string) => void;
  address: string;
  searchText: string;
}

const BasicTextFields = ({ onChange, address, searchText }: Props) => {
  const setName = (e: any) => {
    onChange(e.currentTarget.value);
  };
  return (
    <Box
      display="flex"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0, width: "25ch" },
        bgcolor: "background.paper",
      }}
      noValidate
      autoComplete="off"
      justifyContent="center"
    >
      <TextField
        id="outlined-basic"
        value={searchText}
        placeholder={address.trim().length > 0 ? address : "Search locations"}
        onChange={setName}
        color="secondary"
      />
    </Box>
  );
};

export default BasicTextFields;
