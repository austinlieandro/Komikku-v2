import { Component, OnInit } from '@angular/core';
import { KomikService } from '../komik.service';
import { komikModel } from '../komik.model';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss'],
})
export class FavoritComponent implements OnInit {

  favorit :komikModel[]= []
  user_id:string = "";
  id :string = "";

  constructor(public ks:KomikService, public route:ActivatedRoute, private storage:StorageService) { }

  async ngOnInit() {
    this.user_id = await this.storage.get('user_id');
    this.id = this.route.snapshot.params['id'];
    this.GetFav()
  }

  GetFav(){
    this.ks.GetFavoriteUser(this.user_id).subscribe(
      (data)=>{
        this.favorit = data['data'];
      }
    )
  }

}
