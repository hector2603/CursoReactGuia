import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import StudentService from "./services/studentService";

export default function CreateStudent({ onStudentCreated }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const validateName = (name) => {
    return name != "" && name.length < 5;
  };

  const validatePhoto = (photo) => {
    try {
      if (photo == "") return true;
      new URL(photo);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validateName(name) &&
      !validateName(lastname) &&
      validatePhoto(photo)
    ) {
      StudentService.createStudent({ name, lastname, photo }).then(
        () => {
          onStudentCreated({ name, lastname, photo });
          setName("");
          setLastname("");
          setPhoto("");
        }
      );
    } else {
      alert("Por favor, rellene todos los campos correctamente");
    }
  };

  return (
    <div className="create-student-container">
      <h1>Crear estudiante</h1>
      <form className="form-create-student" onSubmit={handleSubmit}>
        <TextField
          required
          error={validateName(name)}
          id="name"
          label="Nombre"
          variant="outlined"
          style={{ margin: 10 }}
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          required
          id="lastname"
          error={validateName(lastname)}
          label="Apellido"
          value={lastname}
          variant="outlined"
          style={{ margin: 10 }}
          onChange={handleLastnameChange}
        />
        <TextField
          required
          id="photo"
          error={!validatePhoto(photo)}
          label="Foto"
          value={photo}
          variant="outlined"
          style={{ margin: 10 }}
          onChange={handlePhotoChange}
        />
        <Button variant="contained" style={{ margin: 10 }} type="submit">
          Crear
        </Button>
      </form>
    </div>
  );
}
