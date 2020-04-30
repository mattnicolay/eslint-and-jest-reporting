import * as React from 'react';
import NameType from '../../NameType';

interface TestProps {
  name: string;
  nameType: NameType;
}

const Test: React.FC<TestProps> = ({ name, nameType }) => {
  return (
    <div>
      Hello {nameType} name: {name}
    </div>
  );
};

export default Test;
