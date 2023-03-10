import AddProductForm from "./AddProductForm";

import { ComponentStory, ComponentMeta } from "@storybook/react";

const meta: ComponentMeta<typeof AddProductForm> = {
  title: "AddProductForm",
  component: AddProductForm,
  decorators: [
    (Story) => (
      <div className="max-w-lg mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: ComponentStory<typeof AddProductForm> = () => (
  <AddProductForm />
);

export const Default = Template.bind({});
