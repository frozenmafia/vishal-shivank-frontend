import { Action } from '@ngrx/store';


export enum AppActionTypes{
    LOAD_HOME = '[App] Load Home',
    LOAD_HOME_SUCCESS = '[App] Load Home Success',
    LOAD_HOME_FAIL = '[App] Load Home Fail'
}

export class LoadHome implements Action{
    readonly type = AppActionTypes.LOAD_HOME;
}

export class LoadHomeSuccess implements Action{
    readonly type = AppActionTypes.LOAD_HOME_SUCCESS;
}
export class LoadHomeFail implements Action{
    readonly type = AppActionTypes.LOAD_HOME_FAIL;
    constructor(public payload: string){}
}

export type action = 
    LoadHome | LoadHomeSuccess | LoadHomeFail