import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) {}
      //Forbind backend til frontend

      apiUrl = 'http://localhost:3000/user'

      //Hent al data
      getAllData():Observable<any>
      {
        return this._http.get(`${this.apiUrl}`);
      }

      //opret data
      createData(data:any):Observable<any>{
        console.log(data,'createapi=>');

        return this._http.post(`${this.apiUrl}`,data);
      }

      //slet data
      deleteData(id:any):Observable<any>
      {
          let ids = id;
          return this._http.delete(`${this.apiUrl}/${ids}`);
      }

      //opdater data
      updateData(data:any,id:any):Observable<any>
      {
        let ids = id;
        return this._http.put(`${this.apiUrl}/${ids}`,data);
      }

      //hent enkel data
      getSingleData(id:any):Observable<any>
      {
        let ids = id;
        return this._http.get(`${this.apiUrl}/${ids}`);
      }
}
