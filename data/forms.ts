import Swal from 'sweetalert2';
import {  datesOfTheYear, daysOfTheWeek, hoursOfTheDay } from './arrays';
import { Courses } from './interfaces';

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




////תאריך התחלה סוף שעה ושם של הקורס זה מה שיכול לערוך
////יש את זה כבר לא צריך לייבא את זה! רק לשלוח את זה
export function editCourseForm(array:string[],element:Courses) {
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
     <input style="${style}" value=${element.name} id="name" class="form-input" type="text">

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


export async function openModalAndGetInput(value: any) {
  return await Swal.fire(value);
}

