// const products = [
//   ['Electronics', 'Laptop', 999],
//   ['Clothing', 'Shirt', 29],
//   ['Electronics', 'Mouse', 25],
//   ['Clothing', 'Pants', 49],
//   ['Electronics', 'Keyboard', 75],
//   ['Clothing', 'Jacket', 89]
// ];


// const result = products.reduce((acc, [category, name, price]) => {
//   if (!acc[category]) acc[category] = [];

//   acc[category].push({ name, price });

//   return acc;
// }, {});

// for (let category in result) {
//   result[category].sort((a, b) => a.price - b.price);
// }

// console.log(result);




const users = [
  {
    id: 1,
    name: 'Alice',
    courses: [
      { title: 'React', rating: 4.5, completed: true },
      { title: 'Node', rating: 3.8, completed: true },
      { title: 'CSS', rating: 4.2, completed: true }
    ]
  },
  {
    id: 2,
    name: 'Bob',
    courses: [
      { title: 'HTML', rating: 3.5, completed: true },
      { title: 'JavaScript', rating: 4.1, completed: false },
      { title: 'MongoDB', rating: 4.3, completed: true }
    ]
  },
  {
    id: 3,
    name: 'Charlie',
    courses: [
      { title: 'React', rating: 4.8, completed: true },
      { title: 'Node', rating: 4.4, completed: true },
      { title: 'Express', rating: 4.0, completed: true }
    ]
  },
  {
    id: 4,
    name: 'David',
    courses: [
      { title: 'CSS', rating: 3.9, completed: true },
      { title: 'HTML', rating: 4.2, completed: false },
      { title: 'JS', rating: 4.0, completed: true }
    ]
  },
  {
    id: 5,
    name: 'Eve',
    courses: [
      { title: 'React', rating: 4.6, completed: true },
      { title: 'Redux', rating: 4.7, completed: true },
      { title: 'TypeScript', rating: 4.5, completed: true }
    ]
  }
];

const result = users.filter(user => {
    const validCourses = user.courses.filter(course => course.completed && course.rating > 4);
    return validCourses.length >= 2 ;
}) 

.map(user => ({
    id: user.id,
    name: user.name
}));
console.log(result);