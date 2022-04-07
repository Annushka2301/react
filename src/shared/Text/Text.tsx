import React, { Children } from 'react';
import styles from './text.css';
import ClassNames from 'classnames';

export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  mobileSize?: TSizes;
  color?: EColors;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColors.black,
    bold = false,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize
  } = props;

  const classes = ClassNames(
    styles[`s${size}`],
    styles[color],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
  );

  return (
    <As className={classes}>
      {children}
    </As>
  )
}
