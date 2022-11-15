import { useBoolean } from '@hooks/useBoolean';
import React, { useContext } from 'react';
import { ReactNode } from 'react';
import classes from './select.module.scss';
import type CSS from 'csstype';
const DropDownContext = React.createContext({
  isOpen: false,
  setOpen: () => {},
  setClose: () => {},
  setToggle: () => {},
});

interface Props {
  label?: ReactNode;
  trigger: ReactNode;
  onChange: (e: any, key?: any) => void;
  options: any[];
  children?: ReactNode;
  style?: CSS.Properties;
}

export const Select = ({ label, trigger, onChange, options, style }: Props) => {
  return (
    <DropDown
      label={label}
      trigger={trigger}
      onChange={onChange}
      options={options}
      style={style}
    />
  );
};

const DropDown = (props: Props) => {
  const { isBoolean, setOpen, setClose, setToggle } = useBoolean(false);

  return (
    <DropDownContext.Provider
      value={{
        isOpen: isBoolean,
        setOpen,
        setClose,
        setToggle,
      }}
    >
      <div className={classes.dropdown_wrap}>
        {props.label}
        <Trigger trigger={props.trigger} />
        <Menu onMouseDown={props.onChange} style={props.style}>
          {props.options.map((option) => (
            <Item key={option}>{option}</Item>
          ))}
        </Menu>
      </div>
    </DropDownContext.Provider>
  );
};

const Trigger = ({ trigger }: { trigger: ReactNode }) => {
  const { setToggle } = useContext(DropDownContext);
  return <span onClick={setToggle}>{trigger}</span>;
};

const Menu = ({
  children,
  onMouseDown,
  style,
}: {
  children: ReactNode;
  onMouseDown: (e: any) => void;
  style?: CSS.Properties;
}) => {
  const { isOpen, setClose } = useContext(DropDownContext);
  return isOpen ? (
    <ul
      className={classes.recent_list}
      style={style}
      onClick={setClose}
      onMouseDown={onMouseDown}
    >
      {children}
    </ul>
  ) : null;
};

const Item = ({ children }: { children: ReactNode }) => {
  return <li className={classes.recent_list_item}>{children}</li>;
};
