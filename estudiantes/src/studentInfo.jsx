import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconButton  from '@mui/material/Button';

export default function StudentInfo(props) {

  const handleClick = () => {
    alert(`Nombre: ${props.name} ${props.lastname}`);
  };

  return (
    <div className="list-element">
      <img src={props.photo} alt="foto de perfil" className="foto-perfil" />
      <div className="name-lastname-element">
        <h1>{props.name}</h1>
        <h3>{props.lastname}</h3>
      </div>
      <IconButton 
        startIcon={<VisibilityOutlinedIcon />}
        onClick={handleClick}
        style={{ marginRight: "50px" }}
      />
    </div>
  );
}
