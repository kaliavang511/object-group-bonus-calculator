// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  

  // {
  //   name: 'Atticus',
  //   employeeNumber: '2405',
  //   annualSalary: '47000',
  //   reviewRating: 3
  // },

  // your logic here
  console.log(employee.name)
  let eName = employee.name
  let eEmployeeNumber = employee.employeeNumber
  let eAnnualSalary = Number(employee.annualSalary)
  let eReviewRating = employee.reviewRating

  let bonusPercentage = 0;

  // If rating is <= 2, bonus = 0
  if (eReviewRating <= 2) {
    bonusPercentage = 0
  }

  // If rating is 3, bonus = 4
  if (eReviewRating === 3) {
    bonusPercentage = 4
  }

  // If rating is 4, bonus = 6
  if (eReviewRating === 4) {
    bonusPercentage = 6
  }

  // If rating is 5, bonus = 10
  if (eReviewRating === 5) {
    bonusPercentage = 10
  }

  // If employeeNumber.length is 4, bonus = bonus + 5
  if (eEmployeeNumber.length === 4) {
    bonusPercentage += 5
  }

  // If annualSalary > 65000, bonus = bonus - 1
  if (eAnnualSalary > 65000) {
    bonusPercentage -= 1
  }

  // If bonus > 13, bonus = 13

  if (bonusPercentage > 13) {
    bonusPercentage = 13
  }

  // If bonus < 0, bonus = 0
  if (bonusPercentage < 0) {
    bonusPercentage = 0
  }

  let totalBonus = (bonusPercentage/100) * eAnnualSalary

  let totalCompensation = eAnnualSalary + totalBonus

  
  // return new object with bonus results
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
}


for (let employee of employees) {
  console.group()
  // Call function for each of the employees and console log.
  console.log(calculateIndividualEmployeeBonus(employee))
  console.groupEnd()
}