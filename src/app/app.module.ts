import { NgModule, isDevMode, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Import Model
import { komikModel } from './komik.model';

// Import Service
import { KomikService } from './komik.service';

// Import Component
import { KomikComponent } from './komik/komik.component';
import { FavoritComponent } from './favorit/favorit.component';
import { KomikdetailComponent } from './komikdetail/komikdetail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StorageService } from './storage.service';
import { IonicStorageModule} from '@ionic/storage-angular'
import { BacaComponent } from './baca/baca.component';
import { CarikomikComponent } from './carikomik/carikomik.component';

const appRoutes:Routes = [
  {path: 'favoritecomic', component:FavoritComponent},
  {path: 'komik', component:KomikComponent},
  {path: 'detail/:id', component:KomikdetailComponent},
  {path: 'baca/:id', component:BacaComponent},
  {path: 'carikomik', component:CarikomikComponent},
];

@NgModule({
  declarations: [AppComponent,KomikComponent,FavoritComponent,KomikdetailComponent, BacaComponent, CarikomikComponent],
  imports: [HttpClientModule,FormsModule ,BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule,RouterModule.forRoot(appRoutes), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  registrationStrategy: 'registerWhenStable:30000'
}), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },KomikService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
