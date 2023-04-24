import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TableroComponent} from "./components/game/tablero/tablero.component";
import {RouterModule, Routes} from "@angular/router";
import { CardInfoComponent } from './components/game/card-info/card-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerInfoComponent } from './components/game/player-info/player-info.component';
import { CardComponent } from './components/game/card/card.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { LobbyComponent } from './components/web/lobby/lobby.component';
import { LoginComponent } from './components/web/login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lobby', component: LobbyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    CardInfoComponent,
    PlayerInfoComponent,
    CardComponent,
    LobbyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    DragDropModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
