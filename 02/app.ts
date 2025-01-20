type Student = {
    fullName: string;
    professor?: string;
  };
  
  type Professor = {
    fullName: string;
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
  
 
  function getDetails(person: Student | Professor): string | string[] {
    if (isStudent(person)) {
      const student = students.find(student => student.fullName === person.fullName);
      return student ? student.professor || 'No professor assigned' : 'Student not found';
    } else {
      const professor = professors.find(p => p.fullName === person.fullName);
      return professor ? professor.students || [] : 'Professor not found';
    }
  }
  

  const student1: Student = { fullName: 'Alice Goldman' };
  console.log(getDetails(student1));
  

  const professor1: Professor = { fullName: 'Dr. Smith' };
  console.log(getDetails(professor1));
  

  const student2: Student = { fullName: 'Charlie Meg' };
  console.log(getDetails(student2)); 
  

  const professor2: Professor = { fullName: 'Dr. Johnson' };
  console.log(getDetails(professor2)); 