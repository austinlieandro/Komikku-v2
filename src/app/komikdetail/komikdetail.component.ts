import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { kategoriModel } from '../kategori.model';
import { komenModel } from '../komen.model';
import { komikModel } from '../komik.model';
import { KomikService } from '../komik.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-komikdetail',
  templateUrl: './komikdetail.component.html',
  styleUrls: ['./komikdetail.component.scss'],
})

export class KomikdetailComponent implements OnInit {
  id :string = "";
  judul:String = "";
  deskripsi:String = "";
  url_poster:String = "";
  nilai:number = 0;
  komikDetail :komikModel[]= [];
  kategori:kategoriModel[] = [];
  komens:komenModel[] = [];
  txtKomen:String = "";
  user_id:string = "";
  txtNilai:number = 0;

  constructor(public ks:KomikService,public route:ActivatedRoute, private storage:StorageService) { }

  async ngOnInit() {
    this.SetDataById();
    this.user_id = await this.storage.get('user_id');
    this.id = this.route.snapshot.params['id'];
  }

  SetDataById(){
    var id : number = this.route.snapshot.params['id'];
    this.ks.GetDetail(id.toString()).subscribe(
      (data)=>{
        this.judul = data['data'][0]['judul'];
        this.url_poster = data['data'][0]['url_poster'];
        this.deskripsi = data['data'][0]['deskripsi'];
        this.nilai = data['data'][0]['nilai'];
        this.kategori = data['kategori'];
        this.komens = data['comment'];
      }
    )
  }

  TambahFavorit(){
    var id : number = this.route.snapshot.params['id'];
    this.ks.AddFavorite(this.user_id, id).subscribe(
      (data)=>{
        alert(data['data']); 
      }
    )
  }

  insertKomentar(){
    var komik_id = this.route.snapshot.params['id'];
    var comment = this.txtKomen;
    this.ks.AddKomen(this.user_id, komik_id, comment.toString()).subscribe(
      (data)=>{
        this.komens = data['data'];
        window.location.reload()
      }
    )
  }

  InsertRating(){
    var komik_id = this.route.snapshot.params['id'];
    var rating = this.txtNilai
    this.ks.AddRating(this.user_id, komik_id, rating.toString()).subscribe(
      (data)=>{
        this.nilai = data['data'];
        window.location.reload()
      }
    )
  }
}
