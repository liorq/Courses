import {  ClassAttendees, User } from "./interfaces";


export const whatAppSvg=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
export const deleteIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
`;
export const addIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>`;
export const UsersData: User[] = [
  {
    name: "John",
    birthDate: "1995-07-01",
    address: "123 Main St, Anytown USA",
    userName: "johndoe",
    isStudent: true,
    studentId: "12345",
    password: "password123",
    phone: "+2 (555) 155-1555",
    delete:deleteIcon,
    add:addIcon
  },
  {
    name: "Jane",
    birthDate: "1992-05-18",
    address: "456 Oak Ln, Anytown USA",
    userName: "janedoe",
    isStudent: true,
    studentId: "67890",
    password: "password456",
    phone: "+3 (333) 555-5555",
    delete:deleteIcon,
    add:addIcon


  },
  {
    name: "Bob",

    birthDate: "1980-02-15",
    address: "789 Maple Dr, Anytown USA",
    userName: "bobsmith",
    isStudent: true,
    studentId: "97537",
    password: "password789",
    phone: "+1 (111) 555-5555",
    delete:deleteIcon,
    add:addIcon


  },
  {
    name: "Sally",
    birthDate: "1985-11-12",
    address: "987 Pine St, Anytown USA",
    userName: "sallyjones",
    isStudent: true,
    studentId: "24680",
    password: "passwordabc",
    phone: "+1 (2342) 555-5555",
    delete:deleteIcon,
    add:addIcon


  },
  {
    name: "Mark",

    birthDate: "1998-03-22",
    address: "321 Elm Ave, Anytown USA",
    userName: "marklee",
    isStudent: true,
    studentId: "13579",
    password: "passworddef",
    phone: "+1 (111) 555-5555",
      delete:deleteIcon,
    add:addIcon



  },
  {
    name: "Emily",
    birthDate: "1996-08-30",
    address: "246 Main St, Anytown USA",
    userName: "emilyjohnson",
    isStudent: true,
    studentId: "86420",
    password: "passwordghi",
    phone: "+1 (999) 555-5555",
    delete:deleteIcon,
    add:addIcon


  },
  {
    name: "David",
    birthDate: "1991-12-05",
    address: "135 Oak Ln, Anytown USA",
    userName: "davidwilliams",
    isStudent: true,
    studentId: "97538",
    password: "passwordjkl",
    phone: "+1 (888) 555-5555",
    delete:deleteIcon,
    add:addIcon


  },
  {
    name: "Karen",
    birthDate: "1979-04-25",
    address: "864 Maple Dr, Anytown USA",
    userName: "karenbrown",
    isStudent: true,
    studentId: "97532",
    password: "passwordmno",
    phone: "+1 (988) 555-5555",
    delete:deleteIcon,
    add:addIcon


  },
  {
    name: "Tom",
    birthDate: "1982-09-10",
    address: "579 Pine St, Anytown USA",
    userName: "tomtaylor",
    isStudent: true,
    studentId: "97531",
    password: "passwordpqr",
    phone: "+1 (565) 555-5555",
    delete:deleteIcon,
    add:addIcon


  }]

  export const myCourses: any[] = [
    {
      name: "Photography",
      startDate: "2023-05-01",
      endDate: "2023-07-15",
      CoursesId:'svvssvvssvvsvs',
      days: "Mon, Wed",
      hours: "10:00-12:00",
      report:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>'
      ,buy:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'

    },
    {
      name: "Video",
      startDate: "2023-04-20",
      endDate: "2023-06-15",
      days: "Tue, Thu",
      CoursesId:'svssvvssv',

      hours: "18:00-19:30",
      report:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>'
      ,buy:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'



    },]

    export const buyIcon ='<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'

    export const reportIcon ='<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>'


  export const CoursesData: any[] = [
    {
      name: "Photography",
      startDate: "2023-05-01",
      endDate: "2023-07-15",
      days: "Mon, Wed",
      hours: "10:00-12:00",
      delete:deleteIcon,
      add:addIcon


    },
    {
      name: "Video",
      startDate: "2023-04-20",
      endDate: "2023-06-15",
      days: "Tue, Thu",
      hours: "18:00-19:30",
      delete:deleteIcon,
      add:addIcon


    },
    {
      name: "Illustrations",
      startDate: "2023-05-10",
      endDate: "2023-08-30",
      days: "Mon, Wed",
      hours: "15:00-16:30",
      delete:deleteIcon,
      add:addIcon


    },
    {
      name: "UI/UX",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      days: "Tue, Thu",
      hours: "14:00-16:00",
      delete:deleteIcon,
      add:addIcon


    },
    {
      name: "3D/AR",
      startDate: "2023-05-15",
      endDate: "2023-07-31",
      days: "Mon, Wed",
      hours: "19:00-21:00",
      delete:deleteIcon,
      add:addIcon


    },

  ]


  export const deleteModal = {
    id: 'ex1',
    xmlns:"http://www.w3.org/2000/svg",
    viewBox:"0 0 384 512",
    d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    message: 'Are you sure you want to delete record?',

  };
  export const addModal = {
    id: 'ex1',
    xmlns:"http://www.w3.org/2000/svg",
    viewBox:"0 0 384 512",
    d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    message: 'Please provide accurate information in all required fields.',

  };

  export const errorMessages = {
    password:
      'The password needs to contain at least 8 characters, at least one uppercase letter, at least one number, and at least one special character',
    age: 'You must be at least 12 years old to signup.',
    email: 'Invalid email address. Please enter a valid email address.',
    lastName: 'Last name must be at least 4 characters.',
    firstName: 'First name must be at least 4 characters.',
  };





  export const attendees: ClassAttendees[] = [
    {
      name: "John Doe",
      DateOfArrival: "2022-01-01",
      CoursesId: "course-123",
      studentId: "student-456"
    },
    {
      name: "Jane Smith",
      DateOfArrival: "2022-01-02",
      CoursesId: "course-123",
      studentId: "student-789"
    },
    {
      name: "Bob Johnson",
      DateOfArrival: "2022-01-03",
      CoursesId: "course-456",
      studentId: "student-101",
    }
  ];
