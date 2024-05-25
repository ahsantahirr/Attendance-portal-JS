// const users = [
//   {
//     name: 'John Doe',
//     fatherName: 'Richard Doe',
//     age: 16,
//     rollNo: '101',
//     class: '10th Grade',
//   },
//   {
//     name: 'Jane Smith',
//     fatherName: 'Robert Smith',
//     age: 15,
//     rollNo: '102',
//     class: '9th Grade',
//   },
//   {
//     name: 'Michael Johnson',
//     fatherName: 'James Johnson',
//     age: 17,
//     rollNo: '103',
//     class: '11th Grade',
//   },
//   {
//     name: 'Emily Davis',
//     fatherName: 'William Davis',
//     age: 14,
//     rollNo: '104',
//     class: '8th Grade',
//   },
//   {
//     name: 'Jessica Brown',
//     fatherName: 'Charles Brown',
//     age: 16,
//     rollNo: '105',
//     class: '10th Grade',
//   },
//   {
//     name: 'Daniel Wilson',
//     fatherName: 'Thomas Wilson',
//     age: 15,
//     rollNo: '106',
//     class: '9th Grade',
//   },
//   {
//     name: 'Sarah Taylor',
//     fatherName: 'Andrew Taylor',
//     age: 17,
//     rollNo: '107',
//     class: '11th Grade',
//   },
//   {
//     name: 'David Lee',
//     fatherName: 'George Lee',
//     age: 14,
//     rollNo: '108',
//     class: '8th Grade',
//   },
//   {
//     name: 'Laura Martin',
//     fatherName: 'Paul Martin',
//     age: 16,
//     rollNo: '109',
//     class: '10th Grade',
//   },
//   {
//     name: 'Kevin White',
//     fatherName: 'Mark White',
//     age: 15,
//     rollNo: '110',
//     class: '9th Grade',
//   },
//   {
//     name: 'Anna Harris',
//     fatherName: 'Steven Harris',
//     age: 17,
//     rollNo: '111',
//     class: '11th Grade',
//   },
//   {
//     name: 'Brian Clark',
//     fatherName: 'Edward Clark',
//     age: 14,
//     rollNo: '112',
//     class: '8th Grade',
//   },
//   {
//     name: 'Sophia Lewis',
//     fatherName: 'Henry Lewis',
//     age: 16,
//     rollNo: '113',
//     class: '10th Grade',
//   },
//   {
//     name: 'Christopher Walker',
//     fatherName: 'Frank Walker',
//     age: 15,
//     rollNo: '114',
//     class: '9th Grade',
//   },
//   {
//     name: 'Grace Hall',
//     fatherName: 'Peter Hall',
//     age: 17,
//     rollNo: '115',
//     class: '11th Grade',
//   },
//   {
//     name: 'Justin Allen',
//     fatherName: 'Patrick Allen',
//     age: 14,
//     rollNo: '116',
//     class: '8th Grade',
//   },
//   {
//     name: 'Olivia Young',
//     fatherName: 'Bruce Young',
//     age: 16,
//     rollNo: '117',
//     class: '10th Grade',
//   },
//   {
//     name: 'Nathan Hernandez',
//     fatherName: 'Larry Hernandez',
//     age: 15,
//     rollNo: '118',
//     class: '9th Grade',
//   },
//   {
//     name: 'Mia King',
//     fatherName: 'Joe King',
//     age: 17,
//     rollNo: '119',
//     class: '11th Grade',
//   },
//   {
//     name: 'Ethan Wright',
//     fatherName: 'Stanley Wright',
//     age: 14,
//     rollNo: '120',
//     class: '8th Grade',
//   },
//   {
//     name: 'Ava Lopez',
//     fatherName: 'Timothy Lopez',
//     age: 16,
//     rollNo: '121',
//     class: '10th Grade',
//   },
//   {
//     name: 'Jacob Scott',
//     fatherName: 'Chris Scott',
//     age: 15,
//     rollNo: '122',
//     class: '9th Grade',
//   },
//   {
//     name: 'Samantha Green',
//     fatherName: 'Shawn Green',
//     age: 17,
//     rollNo: '123',
//     class: '11th Grade',
//   },
//   {
//     name: 'Andrew Adams',
//     fatherName: 'Jason Adams',
//     age: 14,
//     rollNo: '124',
//     class: '8th Grade',
//   },
//   {
//     name: 'Ella Baker',
//     fatherName: 'Ryan Baker',
//     age: 16,
//     rollNo: '125',
//     class: '10th Grade',
//   },
// ];

// var userTable = document.getElementById("usertable")
// var present = document.getElementById("present")
// var absent = document.getElementById("absent")
// var leave = document.getElementById("leave")
// function studentDetail() {
//   userTable.innerHTML = "";
//   for (i = 0; i < users.length; i++) {

//     userTable.innerHTML += `
//     <tr>
//       <td>${i + 1}</td>
//       <td>${users[i].name}</td>
//       <td>${users[i].fatherName}</td>
//       <td>${users[i].age}</td>
//       <td>${users[i].rollNo}</td>
//       <td>${users[i].class}</td>
//       <td onclick = "summary(this)"> <i class="fa-regular fa-square" ></i></td>
//       <td onclick = "summary(this)"> <i class="fa-regular fa-square"></i></td>
//       <td onclick = "summary(this)"> <i class="fa-regular fa-square"></i></td>
//   </tr>
//   `

//   }
// }
// studentDetail();

// function summary(currentElement) {

//   if (currentElement.firstElementChild.className === "fa-regular fa-square") {
//     currentElement.innerHTML = '<i class="fa-solid fa-square-check"></i>'
//   } else {
//     currentElement.innerHTML = '<i class="fa-regular fa-square"></i>'
//   }


// }


const users = [
  { name: 'John Doe', fatherName: 'Richard Doe', age: 16, rollNo: '101', class: '10th Grade' },
  { name: 'Jane Smith', fatherName: 'Robert Smith', age: 15, rollNo: '102', class: '9th Grade' },
  { name: 'Michael Johnson', fatherName: 'James Johnson', age: 17, rollNo: '103', class: '11th Grade' },
  { name: 'Emily Davis', fatherName: 'William Davis', age: 14, rollNo: '104', class: '8th Grade' },
  { name: 'Jessica Brown', fatherName: 'Charles Brown', age: 16, rollNo: '105', class: '10th Grade' },
  { name: 'Daniel Wilson', fatherName: 'Thomas Wilson', age: 15, rollNo: '106', class: '9th Grade' },
  { name: 'Sarah Taylor', fatherName: 'Andrew Taylor', age: 17, rollNo: '107', class: '11th Grade' },
  { name: 'David Lee', fatherName: 'George Lee', age: 14, rollNo: '108', class: '8th Grade' },
  { name: 'Laura Martin', fatherName: 'Paul Martin', age: 16, rollNo: '109', class: '10th Grade' },
  { name: 'Kevin White', fatherName: 'Mark White', age: 15, rollNo: '110', class: '9th Grade' },
  { name: 'Anna Harris', fatherName: 'Steven Harris', age: 17, rollNo: '111', class: '11th Grade' },
  { name: 'Brian Clark', fatherName: 'Edward Clark', age: 14, rollNo: '112', class: '8th Grade' },
  { name: 'Sophia Lewis', fatherName: 'Henry Lewis', age: 16, rollNo: '113', class: '10th Grade' },
  { name: 'Christopher Walker', fatherName: 'Frank Walker', age: 15, rollNo: '114', class: '9th Grade' },
  { name: 'Grace Hall', fatherName: 'Peter Hall', age: 17, rollNo: '115', class: '11th Grade' },
  { name: 'Justin Allen', fatherName: 'Patrick Allen', age: 14, rollNo: '116', class: '8th Grade' },
  { name: 'Olivia Young', fatherName: 'Bruce Young', age: 16, rollNo: '117', class: '10th Grade' },
  { name: 'Nathan Hernandez', fatherName: 'Larry Hernandez', age: 15, rollNo: '118', class: '9th Grade' },
  { name: 'Mia King', fatherName: 'Joe King', age: 17, rollNo: '119', class: '11th Grade' },
  { name: 'Ethan Wright', fatherName: 'Stanley Wright', age: 14, rollNo: '120', class: '8th Grade' },
  { name: 'Ava Lopez', fatherName: 'Timothy Lopez', age: 16, rollNo: '121', class: '10th Grade' },
  { name: 'Jacob Scott', fatherName: 'Chris Scott', age: 15, rollNo: '122', class: '9th Grade' },
  { name: 'Samantha Green', fatherName: 'Shawn Green', age: 17, rollNo: '123', class: '11th Grade' },
  { name: 'Andrew Adams', fatherName: 'Jason Adams', age: 14, rollNo: '124', class: '8th Grade' },
  { name: 'Ella Baker', fatherName: 'Ryan Baker', age: 16, rollNo: '125', class: '10th Grade' },
];

let userTable = document.getElementById("usertable");
let presentCount = document.getElementById("present");
let absentCount = document.getElementById("absent");
let leaveCount = document.getElementById("leave");
let totalstudents = document.getElementById("totalstudents");

totalstudents.innerHTML = users.length;

let present = 0;
let absent = 0;
let leave = 0;

function studentDetail() {
  userTable.innerHTML = "";
  users.forEach((user, index) => {
    userTable.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.fatherName}</td>
      <td>${user.age}</td>
      <td>${user.rollNo}</td>
      <td>${user.class}</td>
      <td onclick="summary(this, 'present')" class= "present"><i class="fa-regular fa-square"></i></td>
      <td onclick="summary(this, 'absent')"  class= "absent"><i class="fa-regular fa-square"></i></td>
      <td onclick="summary(this, 'leave')"  class= "leave"><i class="fa-regular fa-square"></i></td>
    </tr>
    `;
  });
}

function summary(currentElement, type) {
  let row = currentElement.parentElement;
  let cells = row.getElementsByTagName("td");

  for (let i = 6; i <= 8; i++) {
    if (cells[i].firstElementChild.className === "fa-solid fa-square-check") {
      if (i === 6) present--;
      if (i === 7) absent--;
      if (i === 8) leave--;
      cells[i].innerHTML = '<i class="fa-regular fa-square"></i>';
    }
  }

  if (type === 'present') {
    present++;
    currentElement.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  } else if (type === 'absent') {
    absent++;
    currentElement.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  } else if (type === 'leave') {
    leave++;
    currentElement.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  }

  presentCount.textContent = present;
  absentCount.textContent = absent;
  leaveCount.textContent = leave;
}

studentDetail();
