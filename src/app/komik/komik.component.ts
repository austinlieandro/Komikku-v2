import { Component, OnInit, Input } from '@angular/core';
import { komikModel } from '../komik.model';
import { KomikService } from '../komik.service';


@Component({
  selector: 'app-komik',
  templateUrl: './komik.component.html',
  styleUrls: ['./komik.component.scss'],
})
export class KomikComponent implements OnInit {
  
  // @Input() komik : komikModel[] = [];
  komik :komikModel[]= []

  constructor(public ks:KomikService) { }

  listKomik(){
    this.ks.GetKomik().subscribe(
      (data)=>{
        this.komik = data;
      }
    )
  }

  ngOnInit() {
    this.listKomik()
  }

}
