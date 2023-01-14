import { Injectable } from '@angular/core';
import { komikModel } from './komik.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KomikService {
  komikList : komikModel[] = [];
  constructor(private http:HttpClient) { }

  GetKomik():Observable<any>{
    return this.http.get("https://ubaya.fun/hybrid/160420079/api/komiklist.php");
  }

  GetFavorit():Observable<any>{
    return this.http.get("https://ubaya.fun/hybrid/160420079/api/favorituser.php");
  }

  GetDetail(id :string):Observable<any>{
    let body = new HttpParams()
    body = body.set('komik_id', id)
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/detailkomik.php",body);
  }

  KategorisDetail(id :number):Observable<any>{
    let body = new HttpParams()
    body = body.set('id', id)
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/carikategori.php",body);
  }

  AddKomen(users_id :string, komiks_id:number, comment:string):Observable<any>{
    let body = new HttpParams()
    body = body.set('komiks_id', komiks_id)
    body = body.set('users_id', users_id)
    body = body.set('comment', comment)
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/add_komen.php",body);
  }

  login(users_id :string, user_password :string):Observable<any>{
    let body = new HttpParams()
    body = body.set('user_id', users_id)
    body = body.set('user_password', user_password)
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/login.php",body);
  }

  BacaKomik(komiks_id:number):Observable<any>{
    let body = new HttpParams()
    body = body.set('komiks_id', komiks_id)
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/halaman.php", body);
  }

  AddFavorite(users_id:string, komiks_id:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('komik_id', komiks_id);
    body = body.set('user_id', users_id);
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/addfavorite1.php",body);
  }

  GetFavoriteUser(users_id:string):Observable<any> {
    let body = new HttpParams();
    body = body.set('users_id', users_id);
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/favoritusers.php",body);
  }

  AddRating(users_id:string, komiks_id:number, nilai:string):Observable<any>{
    let body = new HttpParams()
    body = body.set('komiks_id', komiks_id)
    body = body.set('users_id', users_id)
    body = body.set('nilai', nilai)
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/addrating.php",body);
  }

  GetKategori():Observable<any>{
    return this.http.get("https://ubaya.fun/hybrid/160420079/api/kategori.php");
  }

  CariKomik(keyword:string):Observable<any>{
    let body = new HttpParams()
    body = body.set('keyword', keyword)
    return this.http.post("https://ubaya.fun/hybrid/160420079/api/searchkomik.php", body);
  }
}
