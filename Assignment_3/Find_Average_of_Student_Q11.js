const students = [
    {
        name: "student1",
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        name: "student2",
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    {
        name: "student3",
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
];


const output = students.map(student => {
    let total = 0;
    let subjects = Object.keys(student).filter(key => key.startsWith('subject'));
    
    for (let subject of subjects) {
        total += student[subject];
    }
    
    let average = total / subjects.length;
    
    return {
        [student.name]: {
            average: average
        }
    };
});

console.log(output);
