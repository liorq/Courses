import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Courses, User } from 'src/app/data/interfaces';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class DbService {

   private apiUrl = 'http://localhost:1012';
   private token:BehaviorSubject<string>=new BehaviorSubject("");
   userName!:string;
  _token = this.token.asObservable();

  constructor(private http: HttpClient,private authSvc:AuthService) { }


//////
async editUserByProfessorHandler(user: User){
    const headers = this.headerInit()

    try {
      const response = await this.http
        .put<any>(`${this.apiUrl}/users/${this.userName||"user"}/changeUser`,user, { headers })
        .toPromise();

      return response;
    } catch (error) {
      return error;
    }

}
async editCourseHandler(course: Courses){
  const headers = this.headerInit()
  console.log(course)
  try {
    const response = await this.http
      .put<any>(`${this.apiUrl}/courses/${course.name}/ChangeCourse`,course, { headers })
      .toPromise();

    return response;
  } catch (error) {
    return error;
  }

}
////////////////////////////////////////////////////////////



async signUp(user:User) {
  try {
    const response:any = await this.http.post(`${this.apiUrl}/signUp` ,user).toPromise();
    return response
  } catch (error) {
    return error;
  }
}

  async signInHandler(userName: string, password: string): Promise<any> {
    const data = {
      username: userName,
      password: password,
    };
        this.userName = userName;
      await this.getUserType(userName,password)

    try {
      const response = await this.http.post<any>(`${this.apiUrl}/login`, data).toPromise();

    this.tokenHandler(response?.access_token)
      return response;
    } catch (error) {
      return error;
    }
  }


  tokenHandler(token:string){
    this.token.next(token);
    localStorage.setItem('token', token);
  }

  async getUserType(userName: string,password:string){
    const data = {
      username: userName,
      password: password,
    };

    try {
      const response = await this.http.post<any>(`${this.apiUrl}/getUserType`, data).toPromise();

      return response;
    } catch (error:any) {
      localStorage.setItem('authLevel',this.authSvc.encryptHandler(error.error.text))
      return error.error;
    }
  }
  async removeUserHandler(userName: string): Promise<any> {
    const requestBody = {
      "username": userName
    };

    try {
      const response = await this.http
        .delete<any>(`${this.apiUrl}/removeUser`, { body: requestBody })
        .toPromise();
      return response;
    } catch (error) {
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
  try {
    const response = await this.http.post(`${this.apiUrl}/courses/${courses.name}`,courses, { headers }).toPromise();
    return response;
  } catch (error) {
    return error;
  }
}
async buyCourseHandler(courses:Courses) {
  const headers = this.headerInit()
  try {
    const response = await this.http.post(`${this.apiUrl}/courses/${courses.CoursesId}/buy`,courses, { headers }).toPromise();
    return response;
  } catch (error) {

    return error;
  }
}

async removeCourseHandler(courseId: string): Promise<any> {
  const headers = this.headerInit()
  try {
    const response = await this.http
      .delete<any>(`${this.apiUrl}/courses/${courseId}`, { headers })
      .toPromise();
    return response;
  } catch (error) {
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
      .put<any>(`${this.apiUrl}/users/${newProperty||"user"}/changePassword`,data, { headers })
      .toPromise();
    return response;
  } catch (error) {
    return error;
  }
}

async ChangeNameHandler(newProperty:string,password:string): Promise<any> {
  const headers = this.headerInit()
  const data= this.getJsonObject(newProperty,password)

  try {
    const response = await this.http
      .put<any>(`${this.apiUrl}/users/${newProperty||"user"}/changeName`,data, { headers })
      .toPromise();

    return response;
  } catch (error) {
    return error;
  }
}

async ChangeUserNameHandler(newProperty:string,password:string): Promise<any> {
  const headers = this.headerInit()
  const data= this.getJsonObject(newProperty,password)

  try {
    const response = await this.http
      .put<any>(`${this.apiUrl}/users/${newProperty||"user"}/changeUserName`, data, { headers })
      .toPromise();
    return response;
  } catch (error) {
    return error;
  }
}
getJsonObject(newProperty:string,password:string){
 return {
    "newProperty": newProperty,
    "password":password
}
}
async getAllTablesData(){
  return  await Promise.all([
    this.getAllCourseHandler(),
    this.getAllUsers(),
    this.getAllUsersAttendees(),
    this.getAllUserCourses(),
  ]);
}


async addAttendeesHandler(course:Courses[]) {
  const headers = this.headerInit();

  try {
    const response:any = await this.http.post(`${this.apiUrl}/api/Students/users/${this.userName}/course/arrival-time` ,course, { headers }).toPromise();
    return response
  } catch (error) {
    return error;
  }
}

}
