import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
const API_URL = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
interface Donor{
  id:Number;
  name:String;
  email:String;
  phonenumber:String;
  gender:String;
  age:Number;
  bloodgroup:String;
  weight:String;
  status:Number;

}
interface Bloodrequest{
  id:Number;
  
  patientname:String;
  email:String;
  age:Number;
  reason:String;
  date:String;
  bloodgroup:String;
  units:Number;
  status:Number;
}
@Injectable({
  providedIn: 'root'
})

export class UserService{
  mail:String='';
  constructor(private http: HttpClient,private tokenStorageService: TokenStorageService) { }

  getDonor(): Observable<any> {
    return this.http.get<Donor[]>(API_URL + 'home');
  }
  getById(id:Number): Observable<any> {
    return this.http.get<Donor[]>(API_URL + 'edit/'+id);
  }
  getId(id:Number): Observable<any> {
    return this.http.get<Bloodrequest[]>(API_URL + 'getById/'+id);
  }
  getbystatus():Observable<any> {
    return this.http.get<Donor[]>(API_URL + 'donorrequest');
  }
  getall(mail:String):Observable<any>
  {
    return this.http.get<Bloodrequest[]>(API_URL + 'getall/'+mail);
  }
  checkrequest():Observable<any> {
    return this.http.get<Bloodrequest[]>(API_URL + 'checkrequest');
  }
  findby(bloodgroup:String):Observable<any> {
    return this.http.get<Donor[]>(API_URL + 'home/findby/'+bloodgroup);

  }
  
  addDonor(user:any): Observable<any> {
    return this.http.post(API_URL + 'user', {
      name: user.name,
      email: user.email,
      phonenumber: user.phonenumber,
      date:user.date,
      gender:user.gender,
      age:user.age,
      bloodgroup:user.bloodgroup,
      weight:user.weight,
      status:0
    }, httpOptions);
}
   delete(id: Number): Observable<any> {  
   return this.http.delete(API_URL+ 'home/delete/'+id, { responseType: 'text' });  
}  
rejectDonor(id: Number): Observable<any> {  
  return this.http.delete(API_URL+ 'donorrequest/reject/'+id, { responseType: 'text' });  
}  
  update(id:number,user:any): Observable<Object> {  
  return this.http.post(API_URL+'edit/'+id,{
    
      name: user.name,
      email: user.email,
      phonenumber: user.phonenumber,
      date:user.date,
      gender:user.gender,
      age:user.age,
      bloodgroup:user.bloodgroup,
      weight:user.weight,
      status:1
      }, httpOptions);  
}
acceptDonor(id:Number,details:any):Observable<Object>{
  console.log("re2",details);
  return this.http.post(API_URL + 'donorrequest/accept/'+id,{
    name: details.name,
    email: details.email,
    date:details.date,
    phonenumber: details.phonenumber,
    gender:details.gender,
    age:details.age,
    bloodgroup:details.bloodgroup,
    weight:details.weight,
    status:1

  }, httpOptions);
}

addRequest(user:any): Observable<any> {
  const e = this.tokenStorageService.getUser();
       this.mail = e.email;
       console.log("email",this.mail);
  return this.http.post(API_URL + 'bloodrequest', {
    patientname: user.patientname,
    email:this.mail,
    age:user.age,
    reason: user.reason,
    bloodgroup:user.bloodgroup,
    units:user.units,
    date:user.date,
    status:0
  }, httpOptions);}
acceptRequest(id:Number,user:any):Observable<Object>{
  console.log("re",user);
  
  return this.http.post(API_URL + 'checkrequest/accept/'+id,{
    patientname: user.patientname,
    email:user.email,
    age:user.age,
    reason: user.reason,
    bloodgroup:user.bloodgroup,
    units:user.units,
    date:user.date,
    status:1
  }, httpOptions);
}
rejectRequest(id:Number,user:any):Observable<Object>{

  return this.http.post(API_URL + 'checkrequest/reject/'+id,{
    patientname: user.patientname,
    email:user.email,
    age:user.age,
    reason: user.reason,
    bloodgroup:user.bloodgroup,
    units:user.units,
    date:user.date,
    status:-1
  }, httpOptions);
}
}
