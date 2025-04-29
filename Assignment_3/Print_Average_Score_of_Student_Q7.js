const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(function(student) {
        let total = 0;
        for (let i = 0; i < student.scores.length; i++) {
            total = total + student.scores[i];
        }
    
        let average = total / student.scores.length;
    
        return {
            name: student.name,
            average: average
        };
});

console.log(output);
