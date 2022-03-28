//task 1

function concat(left: string, right: string): string {
  return `${left} ${right}`
}

const task1 = concat('Hello ', 'World');

//task 2

type StrNum = string | number;

interface task2 {
  howIDoIt: string,
  someArray: StrNum[],
  withData: {
    howIDoIt: string,
    someArray: StrNum[],
  }[],
}

const MyHomeTask:task2 = {
  howIDoIt: "I Do It Wel",
  someArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
}

//task 3

const task3: MyArray<number> = [1, 2, 3];

const initialValue = 0;

interface MyArray<T> {
  [N: number]: T;
  reduce(fn: (el: T, accumulator: number, value: number) => T, initialValue: T): T
}

const task3Result = task3.reduce((accumulator, value) => accumulator + value, initialValue);

//task 4

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

//task 5

// Это React Functional Component

function HomeComponent(props: TMyType<IProps>) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}
// props: IProps;
interface IProps {
  firstProp: number
}

type TMyType<T> = {
  [N in keyof T]: T extends React.Component ? TMyType<T[N]> : T[N];
}

const t = typeof HomeComponent;

//task 6

// Среди JSX IntrinsicElements есть Элемент DIV, получить доступ к нему можно так:

type TDivElement = JSX.IntrinsicElements['div'];

// Этот тип описывает все свойства, доступные для HTMLDivElement. Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.

type TGetJSXPropsProp<T> = {
  [N in T]: N extends JSX.IntrinsicElements[T] ? N[T] : Error;
}

// Пример:
type TDivProps = TGetJSXPropsProp<'div'>
const props: TDivProps = {
    some: '1233', // throw error потому что не содержится в атрибутах div
    className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}
