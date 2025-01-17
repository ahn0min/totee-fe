import classes from './icon.module.scss';
import { IIconProps } from 'types/icon.types';

export function Icon({ imageUrl, style, onClick }: IIconProps) {
  return (
    <div
      className={classes.icon}
      style={{
        ...style,
        width: 55,
        height: 55,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${imageUrl})`,
      }}
      onClick={onClick}
    ></div>
  );
}
