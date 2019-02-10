import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractDao} from './abstract.dao';

@Injectable()
export class PlayerDao extends AbstractDao {
    constructor(private httpClient: HttpClient) {
        super();
    }

    getAll() {
        return this.httpClient.get(this.path + 'players');
    }
}
