import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { kategoriModel } from '../kategori.model';
import { komikModel } from '../komik.model';
import { KomikService } from '../komik.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-carikomik',
  templateUrl: './carikomik.component.html',
  styleUrls: ['./carikomik.component.scss'],
})
export class CarikomikComponent implements OnInit {
  kategori: kategoriModel[] = [];
  komik: komikModel[] = [];
  txtSearch = "";
  search = "";
  id :string = "";
  judul:String = "";
  deskripsi:String = "";
  url_poster:String = "";
  nilai:number = 0;
  txtKomen:String = "";
  user_id:string = "";
  kategori_id:number = 0

  constructor(private ks:KomikService, public route:ActivatedRoute, private storage:StorageService) { }

  async ngOnInit() {
    // this.SetDataById();
    this.CariKategori();
    this.user_id = await this.storage.get('user_id');
    this.id = this.route.snapshot.params['id'];
  }

  CariKategori(){
    this.ks.GetKategori().subscribe(
      (data) =>{
        this.kategori = data['data'];
      }
    )
  }

  SetDataById(){
    this.ks.KategorisDetail(this.kategori_id).subscribe(
      (data)=>{
        this.komik = data['data'];
      }
    )
  }

  CariKomik(){
    this.ks.CariKomik(this.txtSearch).subscribe(
      (data) =>{
        this.komik = data['data'];
      }
    )
  }

}
