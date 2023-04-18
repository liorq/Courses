import { async } from 'rxjs';
import Swal from 'sweetalert2';



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
export function getAddForm(array:any[],componentName:string) {

  return componentName =="CoursesComponent"?getAddCourseForm(array):getAddUserForm(array)


}
export function getAddUserForm(array:any[]) {
  ///typeOfInput = array
  ///placeholders =array
  ///dayofweek =array
  ////תז לעובד לעשות גנרטור
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

export function getAddCourseForm(array:any[]) {


  return {
    confirmButtonColor: '#000000',
    width: '386px',
    html: `


    <div style="font-size: 21px !important; color: black; margin-bottom: 30px;">Add Form</div>
    <div style="font-size: 19px !important; color: black; margin-bottom: 10px;">Please enter the required information</div>

      <div style="font-size: 15px !important; color: black;"> ${array[0]} </div>
      <input id="name" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" type="text">

    <div style="font-size: 15px !important; color: black; margin-bottom: 10px;">start</div>

    <select style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding:0 15px ; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" name="dates" id="dates1">
    <option value="2023-04-18">April 18, 2023</option>
    <option value="2023-04-19">April 19, 2023</option>
    <option value="2023-04-20">April 20, 2023</option>
    <option value="2023-10-21">October 21, 2023</option>
    <option value="2023-10-22">October 22, 2023</option>
    <option value="2023-10-23">October 23, 2023</option>
  </select>

  <div style="font-size: 15px !important; color: black; margin-bottom: 10px;">end</div>

  <select style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding:0 15px ; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" name="dates" id="dates2">
  <option value="2024-04-18">April 18, 2024</option>
  <option value="2024-04-19">April 19, 2024</option>
  <option value="2024-05-20">May 20, 2024</option>
  <option value="2024-05-21">May 21, 2024</option>
  <option value="2024-02-22">Feb 22, 2024</option>
  <option value="2024-02-23">Feb 23, 2024</option>
</select>



    <div style="font-size: 15px !important; color: black; margin-bottom: 10px;">day</div>

    <select style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding:0 15px ; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" name="days" id="days">
    <option value="monday">Monday</option>
    <option value="tuesday">Tuesday</option>
    <option value="wednesday">Wednesday</option>
    <option value="thursday">Thursday</option>
    <option value="friday">Friday</option>
    <option value="saturday">Saturday</option>
    <option value="sunday">Sunday</option>
  </select>

  <div style="font-size: 15px !important; color: black; margin-bottom: 10px;">hours</div>

    <select style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding:0 15px ; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" name="time-range" id="time-range">
    <option value="09:00-12:00">09:00-12:00</option>
    <option value="14:00-16:00">14:00-16:00</option>
    <option value="15:57-17:00">15:57-17:00</option>

    <option value="16:00-20:00">16:00-20:00</option>
    <option value="20:00-24:00">20:00-24:00</option>
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

