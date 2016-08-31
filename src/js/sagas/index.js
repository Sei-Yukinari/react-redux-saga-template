import { fork } from "redux-saga/effects";
import counterRoot from './counter'

export default function* rootSaga() {
  yield fork( counterRoot );
}