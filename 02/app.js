"use strict";
const students = [
    { fullName: 'Alice Goldman', professor: 'Dr. Smith' },
    { fullName: 'Bob Harley', professor: 'Dr. Smith' },
    { fullName: 'Charlie Meg', professor: 'Dr. Johnson' },
    { fullName: 'David Robinson', professor: 'Dr. Johnson' }
];
const professors = [
    { fullName: 'Dr. Smith', students: ['Alice Goldman', 'Bob Harley'] },
    { fullName: 'Dr. Johnson', students: ['Charlie Meg', 'David Robinson'] }
];
// Type guard to check if a person is a Student
function isStudent(person) {
    return 'professor' in person; // A Student will have a professor field
}
// Type guard to check if a person is a Professor
function isProfessor(person) {
    return 'students' in person; // A Professor will have a students field
}
// Function to find and describe the person
function findPerson(person) {
    var _a;
    const student = students.find(s => s.fullName === person.fullName);
    if (student) {
        return `This is a student: ${student.fullName}, Professor: ${student.professor || 'No professor assigned'}`;
    }
    const professor = professors.find(p => p.fullName === person.fullName);
    if (professor) {
        return `This is a professor: ${professor.fullName}, Students: ${((_a = professor.students) === null || _a === void 0 ? void 0 : _a.join(', ')) || 'No students assigned'}`;
    }
    return 'Person not found';
}
// Testing with Student and Professor
const student1 = { fullName: 'Alice Goldman' };
console.log(findPerson(student1)); // Output: This is a student: Alice Goldman, Professor: Dr. Smith
const professor1 = { fullName: 'Dr. Smith' };
console.log(findPerson(professor1)); // Output: This is a professor: Dr. Smith, Students: Alice Goldman, Bob Harley
const student2 = { fullName: 'Charlie Meg' };
console.log(findPerson(student2)); // Output: This is a student: Charlie Meg, Professor: Dr. Johnson
const professor2 = { fullName: 'Dr. Johnson' };
console.log(findPerson(professor2)); //
