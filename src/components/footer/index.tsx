import React, { FC } from 'react';
import * as Icons from 'react-icons';

import { FlexView, Image, List, Text, View } from '../../elements';
const Footer: FC = () => {
  return (
    <FlexView
      backgroundColor="accent"
      width="100vw"
      height="50vh"
      padding="30px"
      flexDirection={['column', 'column', 'row']}
    >
      <View>
        <Image src={`${process.env.PUBLIC_URL}logo.png`} width="30px" />
        <Text>
          Plan and book your perfect trip with expert advice, travel tips
          destination information from us
        </Text>
        <Text>Developed by GeoChivas99s</Text>
      </View>

      <View>
        Plan and book your perfect trip with expert advice, travel tips
        destination information from us
      </View>
      <View>
        Plan and book your perfect trip with expert advice, travel tips
        destination information from us
      </View>
    </FlexView>
  );
};

export default Footer;
