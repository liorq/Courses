import Swal from 'sweetalert2';
import {  datesOfTheYear, daysOfTheWeek, hoursOfTheDay } from './arrays';
import { Courses, User } from './interfaces';

export function getEditUserForm(property: string) {
  return {
    confirmButtonColor: '#000000',
    width: '350px',
    html: `
      <div style="font-size: 21px !important; color: black; margin-bottom: 30px;">Profile Update Form</div>
      <div style="font-size: 15px !important; color: black;">Please enter your password.</div>
      <input id="swal-input2" type="password" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc !important; transition: all 0.2s ease;">
      <div style="font-size: 15px !important; color: black;">Please enter your new ${property}.</div>
      <input id="swal-input3" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" type="text">`,
    focusConfirm: false,
    preConfirm: () => [
      (document.getElementById('swal-input2') as HTMLInputElement)?.value,
      (document.getElementById('swal-input3') as HTMLInputElement)?.value,
    ],
  };
}
export function getAddForm(array:string[],componentName:string) {

  return componentName =="CoursesComponent"?getAddCourseForm(array):getAddUserForm(array)

}
export function getAddUserForm(array:string[]) {

  return {
    confirmButtonColor: '#000000',
    width: '386px',
    html: `


    <div style="font-size: 21px !important; color: black; margin-bottom: 30px;">Add Form</div>
    <div style="font-size: 19px !important; color: black; margin-bottom: 10px;">Please enter the required information</div>
    ${array.slice(0, 5).map((item, index) => `
      <div style="font-size: 15px !important; color: black;"> ${item} </div>
      <input id="swal-input${index+2}" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" type="text">
    `).join('')}

    ${array[5] !== undefined ? `
      <div style="font-size: 15px !important; color: black;"> ${array[5]} </div>
      <input id="swal-input7" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" type="text">

    ` : ''}
  `,
    focusConfirm: false,
    preConfirm: () => {
      let obj :any= {};
      for(let i=0; i<array.length; i++){
        obj[array[i]] = (document.getElementById('swal-input' + (i+2)) as HTMLInputElement)?.value || '';
      }
      return obj;
    }
  }
}


const style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding:0 15px ; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;";


export function getAddCourseForm(array:string[]) {
 const days = daysOfTheWeek

 const  hours= hoursOfTheDay
const dates= datesOfTheYear

  const optionTemplate = (options: any[]) => options.map((option: { value: any; label: any; }) => `<option value="${option.value}">${option.label}</option>`).join('');

  return {
    confirmButtonColor: '#000000',
    width: '386px',
    html: `
    <div class="form-title">Add Form</div>
    <div class="form-subtitle">Please enter the required information</div>

    <div class="form-label">${array[0]}</div>
    <input style="${style}" id="name" class="form-input" type="text">

    <div class="form-label">start</div>
    <select style="${style}" class="form-select" name="dates" id="dates1">
      ${optionTemplate(dates)}
    </select>

    <div class="form-label">end</div>
    <select  style="${style}" class="form-select" name="dates" id="dates2">
      ${optionTemplate(dates)}
    </select>

    <div class="form-label">day</div>
    <select style="${style}" class="form-select" name="days" id="days">
      ${optionTemplate(days)}
    </select>

    <div class="form-label">hours</div>
    <select style="${style}" class="form-select" name="time-range" id="time-range">
      ${optionTemplate(hours)}
    </select>
  `,
    focusConfirm: false,
    preConfirm: () => {
      let obj :any= {};
      obj[array[0]] = (document.getElementById('name') as HTMLInputElement)?.value || '';
      obj[array[1]] = (document.getElementById('dates1') as HTMLInputElement)?.value || '';
      obj[array[2]] = (document.getElementById('dates2') as HTMLInputElement)?.value || '';
      obj[array[3]] = (document.getElementById('days') as HTMLInputElement)?.value || '';
      obj[array[4]] = (document.getElementById('time-range') as HTMLInputElement)?.value || '';

      return obj;
    }
  }
}


export function getEditUserFormForProfessor(user:User) {

const array=["address","birthDate","email","name","password"]
  return {
    confirmButtonColor: '#000000',
    width: '386px',
    html: `
    <div style="font-size: 21px !important; color: black; margin-bottom: 30px;">Edit Form</div>
    <div style="font-size: 19px !important; color: black; margin-bottom: 10px;">Please enter the required information</div>
    ${array.slice(0, 5).map((item, index) => `
      <div style="font-size: 15px !important; color: black;"> ${item} </div>
      <input value="${user[item]}" id="${item}" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" type="text">
    `).join("")}
  `,
    focusConfirm: false,
    preConfirm: () => {
      let obj :any= {};
      for(let i=0; i<array.length; i++){
        obj[array[i]] = (document.getElementById(array[i]) as HTMLInputElement)?.value || '';
      }
      return obj;
    }
  }
}


export function getEditCourseForm(array: string[], element: Courses) {
  const days = daysOfTheWeek;
  const hours = hoursOfTheDay;
  const dates = datesOfTheYear;

  const optionTemplate = (options: any[]) =>
    options
      .map(
        (option: { value: any; label: any; selected?: boolean }) =>
          `<option value="${option.value}" ${
            option.selected ? "selected" : ""
          }>${option.label}</option>`
      )
      .join("");

  const selectElements = [
    {
      name: "startDate",
      label: "start",
      options: dates,
      value: element.startDate,
    },
    {
      name: "endDate",
      label: "end",
      options: dates,
      value: element.endDate,
    },
    {
      name: "days",
      label: "day",
      options: days,
      value: element.days,
    },
    {
      name: "hours",
      label: "hours",
      options: hours,
      value: element.hours,
    },
  ];

  const selectFields = selectElements
    .map(
      (select) => `
      <div class="form-label">${select.label}</div>
      <select style="${style}" class="form-select" name="${select.name}" id="${select.name}">
        ${optionTemplate(
          select.options.map((option) => ({
            value: option.value,
            label: option.label,
            selected: option.value === select.value,
          }))
        )}
      </select>
    `
    )
    .join("");

  return {
    confirmButtonColor: "#000000",
    width: "386px",
    html: `
      <div class="form-title">Add Form</div>
      <div class="form-subtitle">Please enter the required information</div>

      <div class="form-label">${array[0]}</div>
      <input style="${style}" value=${element.name} id="name" class="form-input" type="text">

      ${selectFields}
    `,
    focusConfirm: false,
    preConfirm: () => {
      let obj: any = {};
      obj[array[0]] = (document.getElementById("name") as HTMLInputElement)
        ?.value || "";
      selectElements.forEach((select) => {
        obj[select.name] = (document.getElementById(select.name) as HTMLSelectElement)
          ?.value || "";
      });
      return obj;
    },
  };
}


export async function openModalAndGetInput(value: any) {
  return await Swal.fire(value);
}




export function getCourseSignupInfoForm(attendanceRecords: any[], courses: any[]) {
  const tableStyle = '-webkit-box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.15); box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.15);font-size:14px;';
  let attendanceRows = '';
  let courseRows = '';

  // Display message if there are no attendance records
  if (attendanceRecords.length === 0) {
    attendanceRows = `<tr style="${tableStyle}"><td colspan="3" style="${tableStyle}">No attendance records found.</td></tr>`;
  } else {
    attendanceRows = attendanceRecords.map(record => `
      <tr style="${tableStyle}">
        <td style="${tableStyle}">${record.name}</td>
        <td style="${tableStyle}">${record.dateOfArrival}</td>
        <td style="${tableStyle}">${record.reason}</td>
      </tr>
    `).join("");
  }

  // Display message if there are no courses
  if (courses.length === 0) {
    courseRows = `<tr style="${tableStyle}"><td colspan="3" style="${tableStyle}">No courses found.</td></tr>`;
  } else {
    courseRows = courses.map(course => `
      <tr style="${tableStyle}">
        <td style="${tableStyle}">${course.name}</td>
        <td style="${tableStyle}">${course.startDate}</td>
        <td style="${tableStyle}">${course.endDate}</td>
      </tr>
    `).join("");
  }

  return {
    confirmButtonColor: '#000000',
    width: '483px',
    html: `
    <div  style="font-size:19px;margin-bottom:15px;font-weight:500;">All Attendance Records</div>
      <table style="width:100%;${tableStyle}">
        <tr style="${tableStyle}">
          <th style="${tableStyle}">Name</th>
          <th style="${tableStyle}">Date of Arrival</th>
          <th style="${tableStyle}">Reason</th>
        </tr>
        ${attendanceRows}
      </table>
      <div style="font-size:19px;margin-bottom:15px;font-weight:500;margin-top:15px;">All Courses</div>
      <table style="width:100%;${tableStyle}">
        <tr style="${tableStyle}">
          <th style="${tableStyle}">Name</th>
          <th style="${tableStyle}">Start Date</th>
          <th style="${tableStyle}">End Date</th>
        </tr>
        ${courseRows}
      </table>
      `,

    focusConfirm: false,
    showCancelButton: false,
    confirmButtonText: 'OK'
  };
}








export function getCourseInfoForm(data: any[]) {

  const style='-webkit-box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.15); box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.15);font-size:14px;'
  let tableRows = '';

  if (data.length === 0) {
    tableRows = `<tr style="${style}"><td colspan="3" style="${style}">No attendance records found.</td></tr>`;
  } else {
    tableRows = data.map(item => `
      <tr style="${style}">
        <td style="${style}">${item.studentId}</td>
        <td style="${style}">${item.startDate}</td>
        <td style="${style}">${item.endDate}</td>
      </tr>
    `).join("");
  }



  return {
    confirmButtonColor: '#000000',
    width: '483px',
    html: `
    <div  style="font-size:19px;margin-bottom:15px;font-weight:500;">all of the student's registered</div>
      <table style="width:100%;${style}">
        <tr style="${style}">
          <th style="${style}"> name</th>
          <th style="${style}">start</th>
          <th style="${style}">end</th>
        </tr>
        ${tableRows}
      </table>
      `,

    focusConfirm: false,
    showCancelButton: false,
    confirmButtonText: 'OK'
  };
}
