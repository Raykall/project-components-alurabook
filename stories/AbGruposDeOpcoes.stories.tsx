import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbGrupoOpcoesProps, AbGruposDeOpcoes } from '../src';

export default {
    title: 'components/AbGruposDeOpcoes',
    component:AbGruposDeOpcoes
} as ComponentMeta<typeof AbGruposDeOpcoes>

const Template: ComponentStory<typeof AbGruposDeOpcoes> = (args) => <AbGruposDeOpcoes {...args}/>

export const Padrao = Template.bind({});


Padrao.args = {
    opcoes: [
        {
            id: 1,
            titulo:'E-book' ,
            corpo: 'R$ 00,00', 
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            titulo:'Impresso' ,
            corpo: 'R$ 00,00', 
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            titulo:'Impresso + E-book' ,
            corpo: 'R$ 00,00', 
            rodape: '.pdf, .epub, .mob'
        }
    ]
} as AbGrupoOpcoesProps



