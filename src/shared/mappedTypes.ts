const mistake = [] as Array<number>;
mistake.push(1);
// mistake.push('1');

let bigObject = {
  'data': 'string',
  'numbericData': 5,
  'date': Date(),
  'bigData': {
    'basis': 6,
    'value': 'string',
  },
  'diffs': [{
    'basis': 6,
    'value': 'string',
    'yes': true
  }],
  'compare_same_ref': true,
}

bigObject.compare_same_ref = true;

type TMyBigObject = typeof bigObject;

const typedBigObj: MyReadonly<TMyBigObject> = bigObject;

// typedBigObj.compare_same_ref = false;
typedBigObj.diffs[0].value = '12';

type TObjCase = keyof TMyBigObject;
type TDataType = TMyBigObject['bigData'];

type MyReadonly<T> = {
  // mapped types
  readonly [N in keyof T]: T[N]
}

// for (let N of ['asd', 'qwe']) {}

// const someVar: MyReadonly<TMyBigObject> = {
//   compare_same_ref: true
// }

type MyyPartial<T> = {
  [N in keyof T]?: T[N];
}

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
}

type picked = MyPick<TMyBigObject, 'bigData' | 'diffs'>;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

const typedBigObjDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

// typedBigObjDeep.compare_same_ref = false;
// typedBigObjDeep.diffs[0].value = '12';

type TSomeType = MyReadonlyDeep<TMyBigObject>;

//type inference

type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

function greaterThatZero(a: number): boolean {
  return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;

type TReturnType = ReturnType<typeof greaterThatZero>;
type TArgsType = FnParameters<typeof greaterThatZero>;
