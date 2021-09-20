export type CashCoins = {
  cashCoin: string;
  currency: string;
  currencyAmount: string;
  currencyExchangeRate: string;
  maxCurrencyAmount: string;
  minCurrencyAmount: string;
  withdrawSubCode?: number;
  withdrawSubMsg?: string;
};

export enum CashoutRecordStatus {
  PROCESSING = 0,
  APPROVED = 1,
  REJECTED = 2,
}

export type CashoutRecord = {
  currency: string;
  currencyAmount: string;
  createTime: number; // in second
  status: CashoutRecordStatus;
  uid: number;
  withdrawalId: number;
};

export type CashoutRegion = {
  name: string;
  code: string;
};

export type WithdrawInfo = {
  bankAccount: string;
  bankBookUrl: string;
  email: string;
  homeAddress: string;
  idFrontUrl: string;
  idNumber: string;
  payPalEmail: string;
  phone: string;
  region: string;
  regionUpdated: boolean;
  uid: number;
};

export const defaultWithdrawInfo: WithdrawInfo = {
  bankAccount: '',
  bankBookUrl: '',
  email: '',
  homeAddress: '',
  idFrontUrl: '',
  idNumber: '',
  payPalEmail: '',
  phone: '',
  region: '',
  regionUpdated: true,
  uid: 0,
};
