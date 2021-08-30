import React, { FC } from 'react';
import { v4 } from 'uuid';

import { Button, FlexView, Image, Select, Text, View } from '../../elements';
const ExploreTravel: FC = () => {
  return (
    <FlexView
      justifyContent="space-around"
      py="50px"
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
      overflowY={['hidden', 'unset', 'unset']}
    >
      <FlexView
        flexDirection="column"
        justifyContent="space-between"
        p="0px 30px 30px 30px "
        width={['100%', '90%', '30%']}
        height="40vh"
        alignSelf="start"
      >
        <Text fontSize={['XXL', 'XXL', 'XXXL']}>
          Explore and <br></br> Travel
        </Text>
        <Text>Holiday finder</Text>
        <FlexView justifyContent="space-between" marginTop="10px">
          <Select name="travel">
            {['escola', 'Pambala', 'Assalto'].map((item) => {
              return (
                <option key={v4()} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <Select name="travel">
            {['escola', 'Pambala', 'Assalto'].map((item) => {
              return (
                <option key={v4()} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </FlexView>
        <FlexView justifyContent="space-between" marginTop="10px">
          <Select name="travel">
            {['escola', 'Pambala', 'Assalto'].map((item) => {
              return (
                <option key={v4()} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <Select name="travel">
            {['escola', 'Pambala', 'Assalto'].map((item) => {
              return (
                <option key={v4()} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </FlexView>
        <Button variant="secundary" mt="10px">
          <Text>Explore</Text>
        </Button>
      </FlexView>

      <View zIndex={-1} width={['350px', '300px', '490px']}>
        <Image src={`${process.env.PUBLIC_URL}walking.png`} width="100%" />
      </View>
    </FlexView>
  );
};
export default ExploreTravel;
