export const menuApps = [
  {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    paths: [
      {
        d: "M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0",
        dataOriginal: "#bfc9d1",
        fill: "currentColor",
      },
      {
        d: "M192 192h128v128H192zm0 0",
        dataOriginal: "#82b1ff",
        fill: "currentColor",
      },
      {
        d: "M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0",
        dataOriginal: "#bfc9d1",
        fill: "currentColor",
      },
    ],
    label: "All Courses",
    notification: null,
    routerLink:'all-courses',

    isDisabled:false

  },
  {
    viewBox: "0 0 511.441 511.441",
    fill: "currentColor",
    paths: [
      {
        d: "M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z",
      },
      {
        d: "M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z",
      },
    ],
    label: "All Students",
    notification: 3,
    routerLink:'all-students',
    isDisabled:false

  },

  {
    viewBox: "0 0 448 512",
    fill: "currentColor",
    paths: [
      {
        d: "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z",
      },

    ],
    label: "All Attendees",
    notification: 3,
    routerLink:'all-attendees',
    isDisabled:false

  },
];


export const menuSetting  = [
  {
    viewBox: "0 0 576 512",
    fill: "currentColor",
    paths: [
      {
        d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
        dataOriginal: "#bfc9d1",
        fill: "currentColor",
      },

    ],
    label: 'Change Name',
    notification: null,
    routerLink:'',
    isDisabled:true


  },


  {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    paths: [
      {
        d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
      },

    ],
    label: 'Change Email',
    notification: 3,
    routerLink:'',
    isDisabled:true


  },


  {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    paths: [
      {
        d: "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z",
        dataOriginal: "#bfc9d1",
        fill: "currentColor",
      },

    ],
    label: 'Change Password',
    notification: null,
    routerLink:'',
    isDisabled:true

  },
];


export const menuCourses = [
  {
    viewBox: "0 0 488.455 488.455",
    fill: "currentColor",
    paths: [
      {
        d: "M287.396 216.317c23.845 23.845 23.845 62.505 0 86.35s-62.505 23.845-86.35 0-23.845-62.505 0-86.35 62.505-23.845 86.35 0",

      },
      {
        d: "M427.397 91.581H385.21l-30.544-61.059H133.76l-30.515 61.089-42.127.075C27.533 91.746.193 119.115.164 152.715L0 396.86c0 33.675 27.384 61.074 61.059 61.074h366.338c33.675 0 61.059-27.384 61.059-61.059V152.639c-.001-33.674-27.385-61.058-61.059-61.058zM244.22 381.61c-67.335 0-122.118-54.783-122.118-122.118s54.783-122.118 122.118-122.118 122.118 54.783 122.118 122.118S311.555 381.61 244.22 381.61z",

      },

    ],
    label: "Photography",
    notification: null,
    isDisabled:true
  },





  {
    viewBox: "0 0 58 58",
    fill: "currentColor",
    paths: [
      {
        d:"M57 6H1a1 1 0 00-1 1v44a1 1 0 001 1h56a1 1 0 001-1V7a1 1 0 00-1-1zM10 50H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2V8h8v9zm26.537 12.844l-11 7a1.007 1.007 0 01-1.018.033A1.001 1.001 0 0124 36V22a1.001 1.001 0 011.538-.844l11 7a1.003 1.003 0 01-.001 1.688zM56 50h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8V8h8v9z",
      },

    ],
    label: "Video",
    notification: 3,isDisabled:true
  },




  {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    paths: [
      {
        d: "M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 00-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0110.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 00-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z",
      },

    ],
    label: "Illustrations",
    notification: 3,isDisabled:true
  },




  {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    paths: [
      {
        d: "M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z",
      },
      {
        d: "M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z",
      },
    ],
    label: "UI/UX",
    notification: 3,isDisabled:true
  },

  {
    viewBox: "0 0 512 512",
    fill: "currentColor",
    paths: [
      {
        d: "M0 331v112.295a14.996 14.996 0 007.559 13.023L106 512V391L0 331zM136 391v121l105-60V331zM271 331v121l105 60V391zM406 391v121l98.441-55.682A14.995 14.995 0 00512 443.296V331l-106 60zM391 241l-115.754 57.876L391 365.026l116.754-66.15zM262.709 1.583a15.006 15.006 0 00-13.418 0L140.246 57.876 256 124.026l115.754-66.151L262.709 1.583zM136 90v124.955l105 52.5V150zM121 241L4.246 298.876 121 365.026l115.754-66.15zM271 150v117.455l105-52.5V90z",
      },

    ],
    label: "3D/AR",
    notification: 3,isDisabled:true
  },
];


export const   CoursesDisplayedColumns: string[] = ["name", "startDate", "endDate", "days", "hours","delete","edit","info"]

export const     CoursesColumns = [ {matColumnDef: 'name', title: 'name'}, {matColumnDef: 'startDate', title: 'startDate'},  {matColumnDef: 'endDate', title: 'endDate', },  {matColumnDef: 'days', title: 'days', },  {matColumnDef: "hours", title:"hours", },{matColumnDef: 'delete', title: 'delete'},{matColumnDef: 'add', title: 'add'},{matColumnDef: 'edit', title: 'edit'}];

export const   StudentFormsInputs: string[] = ["username","password","address","birthDate", "name", "phone", "studentId"];

export const   CoursesFormsInputs: string[] = ["name", "startDate", "endDate", "days", "hours","info"]

export const  StudentDisplayedColumns: string[] = ["username","password","address","birthDate", "name", "phone", "studentId","delete","edit"];

export const  StudentColumns = [{matColumnDef: 'username', title: 'userName'},{matColumnDef: 'address', title: 'address'},  {matColumnDef: 'studentId', title: 'studentId'},  {matColumnDef: 'name', title: 'Name', },  {matColumnDef: 'phone', title: 'phone', },  {matColumnDef: 'birthDate', title: 'birthDate', },{matColumnDef: 'delete', title: 'delete'},{matColumnDef: 'add', title: 'add'}];

export const  ModalStudentColumns: string[] = ["birthDate", "Name", "phone", "studentId"];

export const  ModalCoursesColumns: string[] = ["name", "startDate", "endDate", "days", "hours"];

export const   ClassAttendeesDisplayedColumns: string[] = ["name", "dateOfArrival", "coursesId", "studentId"]

export const   ClassAttendeesColumns: string[] = ["name", "dateOfArrival", "coursesId", "studentId"]

export const     ClassAttendees = [ {matColumnDef: 'name', title: 'name'}, {matColumnDef: 'dateOfArrival', title: 'dateOfArrival'},  {matColumnDef: 'coursesId', title: 'coursesId', },  {matColumnDef: 'studentId', title: 'studentId', }];

export const   myCoursesDisplayedColumns: string[] = ["name", "startDate", "endDate", "days", "hours"]

export const     myCoursesColumns = [ {matColumnDef: 'name', title: 'name'}, {matColumnDef: 'startDate', title: 'startDate'},  {matColumnDef: 'endDate', title: 'endDate', },  {matColumnDef: 'days', title: 'days', },  {matColumnDef: "hours", title:"hours", }];

export const   BuyCoursesDisplayedColumns: string[] = ["name", "startDate", "endDate", "days", "hours","buy"]

export const     BuyCoursesColumns = [ {matColumnDef: 'name', title: 'name'}, {matColumnDef: 'startDate', title: 'startDate'},  {matColumnDef: 'endDate', title: 'endDate', },  {matColumnDef: 'days', title: 'days', },  {matColumnDef: "hours", title:"hours", }];

export const  ModalBuyCoursesColumns: string[] = ["name", "startDate", "endDate", "days", "hours","buy"];
export const daysOfTheWeek = [
  {value:'Monday',label: 'Monday'},
 {value:'Tuesday',label: 'Tuesday'},
 {value:'Wednesday',label: 'Wednesday'},
 {value:'Thursday',label: 'Thursday'},
 {value:'Friday',label: 'Friday'},
 {value:'Saturday',label: 'Saturday'},
 {value:'Sunday',label: 'Sunday'},


];

export const hoursOfTheDay = [
 {value:'09:00-12:00',label: '09:00-12:00'},
 {value:'14:00-16:00',label: '14:00-16:00'},
 {value:'15:57-17:00',label: '15:57-17:00'},
 {value:'22:46-23:46',label: '22:46-23:46'},
 {value:'16:00-20:00',label: '16:00-20:00'},


];
export const datesOfTheYear = [
  { value: '2023-04-18', label: 'April 18, 2023' },
  { value: '2023-04-19', label: 'April 19, 2023' },
  { value: '2023-04-20', label: 'April 20, 2023' },
  { value: '2023-10-21', label: 'October 21, 2023' },
  { value: '2023-10-22', label: 'October 22, 2023' },
  { value: '2023-10-23', label: 'October 23, 2023' },
];
export const menuArray=[{title:'Setting',menuItems:menuSetting}]
export const menuCatalogForPro=[{title:'Catalog',menuItems:menuApps},{title:'Months Top 5 Courses',menuItems:menuCourses}]
export const menuCatalog=[{title:'Months Top 5 Courses',menuItems:menuCourses}]
