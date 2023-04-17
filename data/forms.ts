import Swal, { SweetAlertResult } from 'sweetalert2';



export function getEditUserForm(property: string) {
  return {
    confirmButtonColor: '#000000',
    width: '350px',
    html: `
      <div style="font-size: 21px !important; color: black; margin-bottom: 30px;">Profile Update Form</div>
      <div style="font-size: 15px !important; color: black;">Please enter your password.</div>
      <input id="swal-input2" type="text" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc !important; transition: all 0.2s ease;">
      <div style="font-size: 15px !important; color: black;">Please enter your new ${property}.</div>
      <input id="swal-input3" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" type="text">`,
    focusConfirm: false,
    preConfirm: () => [
      (document.getElementById('swal-input2') as HTMLInputElement)?.value,
      (document.getElementById('swal-input3') as HTMLInputElement)?.value,
    ],
  };
}
export function getAddUserForm(array:any[]) {
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
      <div style="font-size: 15px !important; color: black;"> ${array[6]} </div>
      <input id="swal-input8" style="display: inline-block; width: 260px; height: 43px; border-radius: 10px; margin: 5px auto; padding: 15px; box-sizing: border-box; font-size: 0.8em; outline: none; border: 1.5px solid #cccccc; transition: all 0.2s ease;" type="password">
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
export const messages={
  Deleted:{

    text: 'Item Successfully Removed.',
    confirmButtonColor: '#000000',
    width: '350px',
    imageAlt: 'Custom image',
  },
  UserNotFound:{

    text: 'User or password incorrect.',
    confirmButtonColor: '#000000',
    width: '350px',
    imageAlt: 'Custom image',
  }
}
export async function getDeletedForm(){
 return {

  text: 'Item Successfully Removed.',
  confirmButtonColor: '#000000',
  width: '350px',
  imageAlt: 'Custom image',
}
}
export async function getUserNotFoundObj(){
  return {

   text: '"User or password incorrect".',
   confirmButtonColor: '#000000',
   width: '350px',
   imageAlt: 'Custom image',
 }
 }
export async function openModalAndGetInput(value: any) {
  return await Swal.fire(value);
}

// export async function verifyPassword(userPassword:string){
//   const password: any =await openModalAndGetInput(swalObj.verifyPassword);

// if (password?.value != userPassword) {
//   Swal.fire(`Incurrent password: try again`);
//   return;
// }
// return password;
// }
