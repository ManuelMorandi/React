import { Stack } from '../components/Stack';

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes: { // Agrego "a mano" en el storybook la cantidad de cuadros que tendra el stack
        numberOfChildren: { type: "number", defaultValue: 4 }
    }
}

const Template = ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => ( // Creo un array con los numeros de 0 a numberOfChildren
            <div style={{width: "50px", height: "50px", backgroundColor: "red", 
                display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {n + 1} 
            </div>
        ))}
    </Stack>
)

export const Horizontal = Template.bind({});
Horizontal.args = {
    direction: "row",
    numberOfChildren: 4
}

export const Vertical = Template.bind({});
Vertical.args = {
    direction: "column",
    numberOfChildren: 4
}

export const Together = Template.bind({});
Together.args = {
    direction: "row",
    numberOfChildren: 4,
    spacing: 0
}

export const FarApart = Template.bind({});
FarApart.args = {
    direction: "row",
    numberOfChildren: 4,
    spacing: 20
}

export const Wrap = Template.bind({});
Wrap.args = {
    direction: "row",
    numberOfChildren: 50,
    wrap: true
}

export const NoWrap = Template.bind({});
NoWrap.args = {
    direction: "row",
    numberOfChildren: 50,
    wrap: false
}