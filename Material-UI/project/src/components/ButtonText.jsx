import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ButtonText = () => {
  return (
    <div>
      <Button color="primary">Hello</Button>
      <Button color="secondary">Hello</Button>
      <Button color="success">Hello</Button>
      <Button color="error">Hello</Button>
      <Button color="info">Hello</Button>
      <Button color="warning">Hello</Button>

      <div style={{ display: "flex", gap: "15px" }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>

      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>

      <Button variant="contained" disabled>
        Disabled
      </Button>

      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>

<div style={{display:"flex", gap:"10px", marginTop:"10px"}}>
      <Button variant="outlined" endIcon={<DeleteIcon />}>
        Delete
      </Button>

      <Button variant="outlined"  startIcon={<EditIcon />}>
        Edit
      </Button>

      <Button variant="outlined" endIcon={<DeleteIcon />} startIcon={<EditIcon />}>
        update
      </Button>

      <Button style={{backgroundColor:"red", color:"white"}} endIcon={<DeleteIcon />} startIcon={<EditIcon />}>
        update
      </Button>
</div>
    </div>
  );
};

export default ButtonText;
