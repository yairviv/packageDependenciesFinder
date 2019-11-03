import React from 'react';

const PackageRow = ({ value }) => {
  return (
  <div>
      Dependecy package name: {value[0]}, version: {value[1]}
      </div>
  );
};

export default PackageRow;
