// add(1)(1)

import React from "react";

// function add(leftSide: number) {
//   return(rightSide: number) => leftSide + rightSide;
// }

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

const addOne = add(1);
const addSix = add(6);

addOne(5);

// window.addEventListener('resize', () => {});

// function addEventListenerWithDispose(element, name, handler) {
//   element.addEventListener(name, handler);
//   return () => element.removeEventListener(name, handler);
// };

// const dispose = addEventListenerWithDispose(window, 'resize', () => {
//   console.log('resize');
//   dispose();
// });

/// ---- ///

const withIdKey = withKey('id');
const withIndexKey = withKey();

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {props.blocks.map(withIdKey(Block))}
    </div>
  );
}

interface IBlockProps {
  title: string;
  id: string;
}

function Block(props: IBlockProps) {
  return (
    <div>{props.title}</div>
  )
}

function withKey(key?: string) {
  return <E, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component,
        { ...props, key: key ? props[key as keyof E] : index } as E,
        [],
      );
}

// props, key: key ? props[key as keyof E] : index
///

// function Input({ onChange, value }: { onChange: (value: string) => void, value: string}) {
//   return (
//     <input value={value} onChange={getValue(onChange)} />
//   )
// }

function CheckBox(props: { onChange: (value: boolean) => void, value: boolean}) {
  return (
    <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
  )
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends ((t: T[K]) => void)>(fn: E) =>
      (e: React.SyntheticEvent<T>) =>
        fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

///

function NotStandardLink(props: any) {
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
  )
}

function preventDefault<T extends (e:any) => void>(fn: T) {
  return<E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  }
}

function stopPropagation<T extends (e:any) => void>(fn: T) {
  return<E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  }
}

function preventAll<T extends (e:any) => void>(fn: T) {
  return<E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    e.stopPropagation();
    fn(e);
  }
}

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input({ value, onChange }: InputProps) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  )
}

