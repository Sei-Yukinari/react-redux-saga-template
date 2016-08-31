import { takeEvery, delay } from "redux-saga";
import { put, call, fork } from "redux-saga/effects";
import {
    INCREMENT_ASYNC,
    increment
} from "../actions";

function* incrementAsync() {
  yield call( delay, 1000 );
  yield put( increment() );
}

export default function* counterRoot() {
  yield* takeEvery( INCREMENT_ASYNC, incrementAsync );
}