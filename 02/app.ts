type Person = {
  fullName: string;
};

type Student = Person & {
  professor?: string;
};

type Professor = Person & {
  students?: string[];
};

const students: Student[] = [
  { fullName: 'Alice Goldman', professor: 'Dr. Smith' },
  { fullName: 'Bob Harley', professor: 'Dr. Smith' },
  { fullName: 'Charlie Meg', professor: 'Dr. Johnson' },
  { fullName: 'David Robinson', professor: 'Dr. Johnson' }
];

const professors: Professor[] = [
  { fullName: 'Dr. Smith', students: ['Alice Goldman', 'Bob Harley'] },
  { fullName: 'Dr. Johnson', students: ['Charlie Meg', 'David Robinson'] }
];


function isStudent(person: Student | Professor): person is Student {
  return 'professor' in person; 
}

function isProfessor(person: Student | Professor): person is Professor {
  return 'students' in person; 
}

function describePerson(person: Person): string {
  const student = students.find(s => s.fullName === person.fullName);
  if (student) {
    return `This is a student: ${student.fullName}, Professor: ${student.professor || 'No professor assigned'}`;
  }

  const professor = professors.find(p => p.fullName === person.fullName);
  if (professor) {
    return `This is a professor: ${professor.fullName}, Students: ${professor.students?.join(', ') || 'No students assigned'}`;
  }

  return 'Person not found';
}

const student1: Person = { fullName: 'Alice Goldman' };
console.log(describePerson(student1)); 

const professor1: Person = { fullName: 'Dr. Smith' };
console.log(describePerson(professor1)); 


