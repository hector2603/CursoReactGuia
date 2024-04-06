import React, { useEffect, useState } from "react";
import StudentInfo from "./studentInfo";
import CreateStudent from "./createStudent";
import StudentService from "./services/studentService";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getStudents().then(setStudents);
  }, []);

  const handleStudentCreated = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className="home-container">
      <div className="half">
        <CreateStudent onStudentCreated={handleStudentCreated} />
      </div>
      <div className="half">
        {students.map((student, index) => (
          <StudentInfo
            key={index}
            photo={student.photo}
            name={student.name}
            lastname={student.lastname}
          />
        ))}
      </div>
    </div>
  );
}
