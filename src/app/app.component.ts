import { Component } from '@angular/core';
import { komikModel } from './komik.model';
import { KomikService } from './komik.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_id = '';
  isLoggedin = false

  login_user = '';
  login_passwd = '';
  login_error = '';

  constructor(private storage:StorageService, private ks:KomikService) {}

  async ngOnInit() {
    await this.getUser()
  }

  async login() {
    this.ks.login(this.login_user, this.login_passwd).subscribe(
      (data) => {
        if (data['result'] == 'success') {
          this.setUser(data['data'][0]['id']);
          this.getUser();
        } else {
          this.login_error = "Username atau Password salah"
        }
      }
    )
  }

  async setUser(user_id: string) {
    await this.storage.set("user_id", user_id)
  }

  async getUser() {
    let unm = await this.storage.get("user_id")
    this.user_id = unm
    let nul = await this.storage.get("y")
    if (!(unm === nul)) {
      this.isLoggedin = true
      this.user_id = unm
    } else {
      this.isLoggedin = true
      this.user_id = ''
    }
  }

  async logout() {
    await this.storage.remove("user_id");
    this.user_id = '';
    this.isLoggedin = false
  }
  

}
