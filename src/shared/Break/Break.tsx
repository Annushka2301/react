import classNames from 'classnames';
import React from 'react';
import styles from './break.css'

type IBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = 'mobiles' | 'tablet' | 'desktop';

interface IBreakProps {
  size: IBreakSize;
  mobileSize?: IBreakSize;
  tabletSize?: IBreakSize;
  desktopSize?: IBreakSize;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
  } = props;

  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles.inline]: inline },
        { [styles.top]: top },
      )}
    />
  );
}
