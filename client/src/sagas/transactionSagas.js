import { put } from 'redux-saga/effects';
import {
  getTransactionRequest,
  getTransactionSuccess,
  getTransactionError,
} from './../actions/actionCreator';
import * as API from './../api/transactionAPI';

export function * getTransactionSaga () {
  yield put(getTransactionRequest());

  try {
    const { data: transactions } = yield API.getTransactions();

    yield put(getTransactionSuccess(transactions));
  } catch (error) {
    yield put(getTransactionError(error));
  }
}
