import React from 'react';

export default (defaultStore = {}, name = 'onChange') => ClassA => props => {
  let nextStore = {};
  const xprops = {
    ...defaultStore,
    ...props,
    [name](obj) {
      nextStore = {
        ...nextStore,
        ...obj,
      };
      props[name]({
        ...defaultStore,
        ...props,
        ...nextStore,
      });
    },
  };
  return <ClassA {...xprops} />;
};
