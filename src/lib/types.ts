import store from "../redux/store"

export type TappDispatch = typeof store.dispatch

export interface TappInitialState {
    navOpen : boolean;
    disktopNotifications:boolean
}