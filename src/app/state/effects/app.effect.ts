import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthServicesService } from 'src/app/services/auth-services/auth-services.service';
import * as appActions from '../actions/app.action';
@Injectable()
export class AppEffects{
    constructor(
        private action$ : Actions,
        private auth : AuthServicesService
    ){}

    @Effect()
    loadhome$:Observable<Action> = this.action$.pipe(
        ofType<appActions.LoadHome>(
            appActions.AppActionTypes.LOAD_HOME
        ),
        mergeMap((action:appActions.LoadHome)=>
            this.auth.load_home_page().pipe(
                map(
                    x=>new appActions.LoadHomeSuccess()
                ),
                catchError(err=>of(new appActions.LoadHomeFail(err))
            ))
    ));
                }