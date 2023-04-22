
     export const DatePickerForm={
  date:"",
  coursesName:"",
  hours:"",
  reason:"",
  Absentee:"",
  disabled:true,
  courseDay:""
  }


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
    phone:'Invalid phone number. Please enter a valid  phone number.'
  };



  export const messages={


    CreatedSuccessfully:{

      text: 'Created successfully.',
      confirmButtonColor: '#000000',
      width: '350px',
      imageAlt: 'Custom image',
    },
    FailedToCreate:{

      text: 'Failed to create.',
      confirmButtonColor: '#000000',
      width: '350px',
      imageAlt: 'Custom image',
    },


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
    },
    boughtSuccessfully:{
      confirmButtonColor: '#000000',
      width: '350px',
      text: 'bought successfully.',

    },
    FailedToPurchase:{
      confirmButtonColor: '#000000',
      width: '350px',
      text: 'Failed to Purchase .',

    } ,

    AttendanceReportingFailed:{
      confirmButtonColor: '#000000',
      width: '350px',
      text: 'Attendance reporting failed.',

    },
    AttendanceReportSucceed:{
      confirmButtonColor: '#000000',
      width: '350px',
      text: 'Attendance reporting Succeed.',

    },
        changesSucceed:{
          confirmButtonColor: '#000000',
          width: '350px',
          text: ' changes have been applied.',

        },
        changesUnsuccessful: {
          confirmButtonColor: '#000000',
          width: '350px',
          text: 'Changes have not been applied.',
        },

        invalidForm:{
          confirmButtonColor: '#000000',
        width: '350px',
          text:"Some of the fields have not been filled."
        }
  }
