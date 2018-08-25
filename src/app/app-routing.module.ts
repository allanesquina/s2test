import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { RankComponent } from './rank/rank.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'rank',
    component: RankComponent,
  },
  {
    path: '',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
