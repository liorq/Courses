import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Courses, User } from 'src/app/data/interfaces';
import { addIcon, deleteIcon } from 'src/app/data/objects';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

   private apiUrl = 'http://localhost:1012';
   private token:BehaviorSubject<string>=new BehaviorSubject('');
   userName!:string;
  _token = this.token.asObservable();

  constructor(private http: HttpClient) { }

async signUp(user:User) {

  try {
    const response:any = await this.http.post(`${this.apiUrl}/signUp` ,user).toPromise();
    return response
  } catch (error:any) {
    return error;
  }
}

  async signInHandler(userName: string, password: string): Promise<any> {

    const data = {
      username: userName,
      password: password,
    };
        this.userName = userName;

    try {
      const response = await this.http.post<any>(`${this.apiUrl}/login`, data).toPromise();

      this.token.next(response?.access_token);
      localStorage.setItem('token', response?.access_token);
      return response;
    } catch (error: any) {
      return error;
    }
  }
  async removeUserHandler(userName: string): Promise<any> {
    console.log(userName)
    const requestBody = {
      "username": userName
    };

    try {
      const response = await this.http
        .delete<any>(`${this.apiUrl}/removeUser`, { body: requestBody })
        .toPromise();
      return response;
    } catch (error: any) {
      return error;
    }
  }

 async getAllUsersAttendees():Promise<any> {

  const headers = this.headerInit()


  try {
    const response = await this.http.get(`${this.apiUrl}/api/Students/users/attendees`, { headers })?.toPromise();
    return response;
  } catch (error) {
    return error;
  }
}


 async addCourseHandler(courses:Courses) {
  const headers = this.headerInit()
  courses.add=addIcon;
  courses.delete=deleteIcon
  try {
    const response = await this.http.post(`${this.apiUrl}/courses/${courses.name}`,courses, { headers }).toPromise();
    return response;
  } catch (error) {
    return error;
  }
}
async buyCourseHandler(courses:Courses) {
  const headers = this.headerInit()
  console.log(courses)
  try {
    const response = await this.http.post(`${this.apiUrl}/courses/${courses.name}/buy`,courses, { headers }).toPromise();
    return response;
  } catch (error) {

    return error;
  }
}


async removeCourseHandler(courseId: string): Promise<any> {
  console.log(courseId)
  const headers = this.headerInit()


  try {
    const response = await this.http
      .delete<any>(`${this.apiUrl}/courses/${courseId}`, { headers })
      .toPromise();
    return response;
  } catch (error: any) {
    return error;
  }
}
async getAllCourseHandler(): Promise<any>{

    const headers = this.headerInit();

    try{
    const response= this.http.get(this.apiUrl,{headers}).toPromise()
    return response
    }
    catch(error){
    return false;
    }

}

async getAllUserCourses(): Promise<any> {

  const headers = this.headerInit()


  try {
    const response = await this.http.get(`${this.apiUrl}/users/${this.userName}/courses`, { headers })?.toPromise();
    return response;
  } catch (error) {
    return false;
  }
}



headerInit (){
  return  new HttpHeaders({
    'Authorization': 'Bearer ' + (this.token.getValue()||localStorage.getItem('token'))
  });

}
getAllUsers():Promise<any>|any{
  const headers = this.headerInit();

  try{
  const response= this.http.get(`${this.apiUrl}/api/Students`).toPromise()
  return response
  }
  catch(error){
  return error;
  }
}


async ChangeUserPropertyHandler(propertyToChange: string,newProperty:string,password:string): Promise<any> {
switch(propertyToChange){
  case 'changePassword':
    return await this.ChangePasswordHandler(newProperty,password);
 case 'changeEmail':
  return await this.ChangeUserNameHandler(newProperty,password);
 case 'changeName':
  return await this.ChangeNameHandler(newProperty,password);
}
}

async ChangePasswordHandler(newProperty:string,password:string): Promise<any> {
  const headers = this.headerInit()
  const data= this.getJsonObject(newProperty,password)

  try {
    const response = await this.http
      .put<any>(`${this.apiUrl}/users/${newProperty}/changePassword`,data, { headers })
      .toPromise();
    return response;
  } catch (error: any) {
    return error;
  }
}

async ChangeNameHandler(newProperty:string,password:string): Promise<any> {
  const headers = this.headerInit()
  const data= this.getJsonObject(newProperty,password)


  try {
    const response = await this.http
      .put<any>(`${this.apiUrl}/users/${newProperty}/changeName`,data, { headers })
      .toPromise();
    return response;
  } catch (error: any) {
    return error;
  }
}

async ChangeUserNameHandler(newProperty:string,password:string): Promise<any> {
  console.log("newProperty",newProperty)
  const headers = this.headerInit()
 const data= this.getJsonObject(newProperty,password)

  try {
    const response = await this.http
      .put<any>(`${this.apiUrl}/users/${newProperty}/changeUserName`, data, { headers })
      .toPromise();
      const token=localStorage.getItem('token');
      
    if(response&&token){
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userName = decodedToken.name;
      await this.signInHandler(userName,password)
    }
    return response;
  } catch (error: any) {
    return error;
  }
}
getJsonObject(newProperty:string,password:string){
 return {
    "newProperty": newProperty,
    "password":password
}
}
}
