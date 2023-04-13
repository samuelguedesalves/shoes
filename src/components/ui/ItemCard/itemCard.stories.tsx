import type { Meta, StoryObj } from '@storybook/react';
import { ItemCard } from '.';

const meta: Meta<typeof ItemCard> = {
  title: 'UI/ItemCard',
  component: ItemCard,
};

export default meta;

type Story = StoryObj<typeof ItemCard>;

export const Default: Story = {
  render: (args) => <ItemCard {...args} />,
  args: {
    item: {
      id: '1111111111',
      image: '/images/shoe.png',
      name: 'Nike Air Force',
      price: 75000,
      quantity: 0,
    }
  }
}
