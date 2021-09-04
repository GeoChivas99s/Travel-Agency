import React, { FC } from 'react';

import { View } from '../../elements';

const Hero: FC = (props) => {
  return (
    <>
      <View
        background={`url('${process.env.PUBLIC_URL}about.jpg')  center center`}
        width="100vw"
        height="67vh"
        {...props}
      ></View>
    </>
  );
};
export default Hero;
