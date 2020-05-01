import * as React from 'react';
import NameType from '../../NameType';

interface TestProps {
  name: string;
  nameType: NameType;
  callback: Function;
}

const Sample: React.FC<TestProps> = ({ name, nameType, callback }) => {
  const untestedCallback = (): void => {
    callback();
  };
  const testedCallback = (): void => {
    callback();
  };
  return (
    <div>
      Hello {nameType} name: {name}
      <button className="tested" onClick={testedCallback}>
        Click me
      </button>
      <button className="untested" onClick={untestedCallback}>
        Click me
      </button>
    </div>
  );
};

export default Sample;
