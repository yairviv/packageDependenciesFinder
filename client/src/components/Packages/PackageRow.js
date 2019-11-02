import React from 'react';

const PackageRow = ({ value }) => {
  return (
    <li>
      Dependecy package name: {value[0]}, version: {value[1]}
    </li>
  );
};

export default PackageRow;
