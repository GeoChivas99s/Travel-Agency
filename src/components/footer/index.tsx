import React, { FC } from 'react';
import { v4 } from 'uuid';

import { FlexView, Image, List, ListItem, Text, View } from '../../elements';
const Footer: FC = () => {
  return (
    <FlexView
      backgroundColor="footer"
      width="100vw"
      height={['40vh', '60vh', '50vh']}
      padding="25px"
      flexDirection="row"
      justifyContent={['space-between', 'space-between', 'space-around']}
      fontSize={['0.7rem', '1rem', '1rem']}
      overflowX="hidden"
    >
      <View width="150px">
        <Image src={`${process.env.PUBLIC_URL}logo.png`} width="30px" />
        <Text marginTop="20px" color="text_footer">
          Plan and book your perfect trip with expert advice, travel tips
          destination information from us
        </Text>
        <Text fontSize="0.8rem" color="text_footer" marginTop="20px">
          Developed by GeoChivas99s
        </Text>
      </View>

      <View width="150px">
        <Text>Destinations </Text>
        <List marginTop="20px" color="text_footer">
          {['Africa', 'Antartica', 'Asia', 'Europe', 'America'].map((item) => {
            return (
              <ListItem key={v4()} marginTop="5px">
                {' '}
                {item}
              </ListItem>
            );
          })}
        </List>
      </View>
      <View width="150px">
        <Text>Shop </Text>
        <List marginTop="20px" color="text_footer">
          {[
            'Destinations',
            'Pictorial & Gifts',
            'Special Offers',
            'Delivery Times',
            'FAQs',
          ].map((item) => {
            return (
              <ListItem key={v4()} marginTop="5px">
                {' '}
                {item}
              </ListItem>
            );
          })}
        </List>
      </View>
      <View width="150px">
        <Text>Iterests </Text>

        <List marginTop="20px" color="text_footer">
          {[
            'Adventure Travel',
            'Art and Culture',
            'Wildlife And Nature',
            'Family Holidays',
            'Food and Drink',
          ].map((item) => {
            return (
              <ListItem key={v4()} marginTop="5px">
                {' '}
                {item}
              </ListItem>
            );
          })}
        </List>
      </View>
    </FlexView>
  );
};

export default Footer;
