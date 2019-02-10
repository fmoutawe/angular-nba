import {NgModule} from '@angular/core';
import {PlayerDao} from './dao/player.dao';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [PlayerDao]
})
export class CoreModule {

}
