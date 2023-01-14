import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KomikService } from '../komik.service';
import { StorageService } from '../storage.service';
import { HalamanModel } from '../halaman.model';

@Component({
  selector: 'app-baca',
  templateUrl: './baca.component.html',
  styleUrls: ['./baca.component.scss'],
})
export class BacaComponent implements OnInit {
  halaman: HalamanModel[] = [];

  constructor(public ks:KomikService,public route:ActivatedRoute, private storage:StorageService) { }

  ngOnInit() {
    var id:number=this.route.snapshot.params['id'];
    this.baca(id);
  }

  baca(komiks_id:number){
    this.ks.BacaKomik(komiks_id).subscribe(
      (data) => {
        this.halaman = data['data'];
      }
    )
  }
}
