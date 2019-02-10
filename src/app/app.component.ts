import {Component, OnInit} from '@angular/core';
import {PlayerDao} from './core/dao/player.dao';
import {IPlayer} from './core/model/player';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'nba';
    players: IPlayer;

    constructor(private playerDao: PlayerDao) {

    }

    ngOnInit(): void {
         this.playerDao.getAll().subscribe((response: {data: IPlayer}) => {
             this.players = response.data;
         });
    }
}
