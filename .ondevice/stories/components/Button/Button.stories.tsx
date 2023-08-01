import Button from '@/components/ui/Button/Button';
import {Meta, StoryObj} from '@storybook/react-native';
import React from 'react';
import {Text, View} from 'react-native';

const MyButtonMeta: Meta = {
  title: 'components/Button',
  component: Button,
  args: {
    children: <Text>Button</Text>,
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;
type Story = StoryObj<typeof Button>;

export const Basic = {};

export const IconButton: Story = {
  args: {
    children: <Text>Button Icon</Text>,
  },
};
