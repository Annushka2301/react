const str = 'string';    //typeof = 'string'
const num = 2;           //typeof = 'number'
const nan = NaN;         //typeof = 'number'
const obj = {};          //typeof = 'object'
const arr = [];          //typeof = 'object'
const nul = null;        //typeof = 'object'
const sym = Symbol();    //typeof = 'symbol'
const und = undefined;   //typeof = 'undefined'
const _void = void 0;    //typeof = 'undefined'
const bool = true;       //typeof = 'boolean'
const fn = () => {};     //typeof = 'function'


let tsStr = 'asd';

function sumTS(arr: number[]) {
  return arr.reduce((a:number, v:number) => a + v);
}

//'some' + 2 => 'some2'
//'some' - 2 => NaN
//'2' + 2 => '22'
//'2' = 2 => NaN

const tsNumber = 2;
const tsString = 'str';

const result = tsString + tsNumber;
const result2 = parseInt(tsString) - tsNumber;

if (typeof tsString === 'number') {
  const result2 = tsString - tsNumber;
}

// Union type
const strNumber: string | number = '2';

// Type alias
type StrOrNumber = string | number;

const StrOrNumber1: StrOrNumber = '2';
const StrOrNumber2: StrOrNumber = '2';
const StrOrNumber3: StrOrNumber = '2';
const StrOrNumber4: StrOrNumber = '2';

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// Array
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number) [] = [1, 2, '2'];
const unionArray2: Array<string | number> = [1, 2, '2'];

//Tuple
const myTuple: [number, string] = [1, '2'];
const [val1, val2] = myTuple;

// const [state, setState] = useState();

//Object
type MyObject = {a: number, b: string}
const myObj = { a: 1, b: '2' };

interface MyFirstInterface {
  readonly a: number;
  readonly b: string;
  c?: number[];
  e: number | undefined;
}

const myObj2: MyFirstInterface = {
  a: 2,
  b: '123',
  e: undefined,
};

const val = myObj2.c;
const val4 = myObj2.e;

// object.keys(myObj2)

const ApiAnswer: IndexInterface = { key: 'asd', key1: 'asd'}

const val3 = ApiAnswer.randomkey;

interface IndexInterface {
  [N: string]: string;
}

enum Methods {
  add,
  sub,
}

function calculate(method: Methods, left: number, right: number): number {
  switch(method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
  }
}

const sum = calculate(Methods.add, 2, 2);

// const ArrowFn: TypeFn = (value) => 2;

type TypeFn = () => number;

interface FnInterface {
  (a: number): void;
}

type StrangeTypes = any | unknown | never;

const some: any = '2';
some.reduce();

const un: unknown = '2';

if (typeof un === 'string') {
  un.concat();
}

function neverFn() {
  throw new Error('my exception');
}

const someValue = neverFn();
