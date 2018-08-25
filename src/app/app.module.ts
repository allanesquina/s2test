import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';

import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';
import { ModalComponent } from './modal/modal.component';
import { CountdownComponent } from './countdown/countdown.component';
import { EndModalComponent } from './end-modal/end-modal.component';
import { RankComponent } from './rank/rank.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MenuComponent,
    PersonListComponent,
    PersonComponent,
    ModalComponent,
    CountdownComponent,
    EndModalComponent,
    RankComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
