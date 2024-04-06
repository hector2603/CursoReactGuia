export default class StudentService {

  static getStudents() {
    return fetch("https://run.mocky.io/v3/1a8b0e4d-9463-44b2-a4bf-07b45966eacd")
      .then((response) => response.json())
      .then((data) => data.students);
  }
  

  static createStudent(student) {
    return fetch('https://run.mocky.io/v3/67fe68d9-9f13-4521-870e-3c42db9c096b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
    .then(response => response.json());
  }


}