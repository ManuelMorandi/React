import { Button } from '../components/Button';

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: {action: "handleClick" } }, // Para que responda a los clicks
}

const Template = args => <Button {...args} /> // Usar este template nos permite hacerlo interactivo

// Ahora definimos las distintas historias
export const Default = Template.bind({});
Default.args = {
    label: "Press Here"
};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
    label: "Press Here",
    backgroundColor: "lightgrey"
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Press Here",
    backgroundColor: "blue",
    primary: true
}

export const Large = Template.bind({});
Large.args = {
    label: "This is a really really long text",
    size: "large"
}