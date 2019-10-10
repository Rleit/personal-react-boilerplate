import React from 'react';
import { Generic, Help } from 'rbx';
import styles from './Required.module.scss';

function Star({ children }) {
  return (
    <Generic as="span" tooltip="This field is required.">
      {children}
      <Generic as="sup" className="has-text-danger">
        *
      </Generic>
    </Generic>
  );
}

Star.displayName = 'Required';

function Hint() {
  return (
    <Help italic className={styles.margin} pull="right">
      Fields marked with <Star /> are required.
    </Help>
  );
}

Hint.displayName = 'Required.Hint';

const Required = Object.assign(Star, { Hint });

export default Required;
