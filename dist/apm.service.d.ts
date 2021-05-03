export declare class ApmService {
  apm: any;
  constructor();
  captureError(data: any): void;
  startTransaction(name: any, type: any): any;
  setTransactionName(name: any): any;
  startSpan(name: any): any;
  setCustomContext(context: any): any;
  setTag(name: any, value: any): any;
}
