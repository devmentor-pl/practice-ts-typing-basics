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
function isStudent(person) {
    return 'professor' in person;
}
function getDetails(person) {
    if (isStudent(person)) {
        const student = students.find(student => student.fullName === person.fullName);
        return student ? student.professor || 'No professor assigned' : 'Student not found';
    }
    else {
        const professor = professors.find(p => p.fullName === person.fullName);
        return professor ? professor.students || [] : 'Professor not found';
    }
}
const student1 = { fullName: 'Alice Goldman' };
console.log(getDetails(student1));
const professor1 = { fullName: 'Dr. Smith' };
console.log(getDetails(professor1));
const student2 = { fullName: 'Charlie Meg' };
console.log(getDetails(student2));
const professor2 = { fullName: 'Dr. Johnson' };
console.log(getDetails(professor2));
