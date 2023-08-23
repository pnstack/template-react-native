import { Table } from '@/components/Table';
import {Button} from '@/components/ui';
import {Meta, StoryObj} from '@storybook/react-native';
import React from 'react';
import {Text, View} from 'react-native';

const TableMeta: Meta = {
  title: 'components/Table',
  component: Table,
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

export default TableMeta;
type Story = StoryObj<typeof Table>;

export const Basic = {};

export const IconButton: Story = {
  args: {
    children: <Text>Button Icon</Text>,
  },
};
