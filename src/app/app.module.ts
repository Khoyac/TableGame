import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TableroComponent} from "./components/tablero/tablero.component";
import {RouterModule} from "@angular/router";
import { CardInfoComponent } from './components/card-info/card-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { CardComponent } from './components/card/card.component';
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    CardInfoComponent,
    PlayerInfoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
