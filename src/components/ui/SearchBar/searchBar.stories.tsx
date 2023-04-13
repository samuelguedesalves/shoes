import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '.';

const meta: Meta<typeof SearchBar> = {
  title: 'UI/SearchBar',
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: () => <SearchBar />
}
