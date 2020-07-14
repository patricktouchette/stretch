import React from 'react';
import './buttons.css';

const ButtonFactory = (classList) => {
  return ({ text, onClick = null, full, center }) => {
    let classes = classList;
    if (center) classes = `${classes} btn-center`;
    if (full) classes = `${classes} btn-full-width`;

    return (
      <button className={classes} onClick={onClick ? () => onClick() : null}>
        {text}
      </button>
    );
  };
};

const PrimaryButton = ButtonFactory('btn btn-primary');
const SecondaryButton = ButtonFactory('btn btn-secondary');
const AccentButton = ButtonFactory('btn btn-accent');
const DangerButton = ButtonFactory('btn btn-danger');

export { PrimaryButton, SecondaryButton, AccentButton, DangerButton };
