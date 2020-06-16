import { all } from 'redux-saga/effects';

import starships from './starships/sagas';

export default function* rootSaga() {
  return yield all([starships]);
}