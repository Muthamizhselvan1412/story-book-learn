import React from 'react'
import Input from './input.jsx'

export default{
    title:'Example/Input',
    component: Input,
    decorators:  [(Story) => <div className='center'><Story/></div>],
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
          values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
            { name: 'blue', value: '#00f' },
          ],
        },
        github: {
          baseURL: "https://github.com/Muthamizhselvan1412/tamil-hacks",
          repository: "tamil-hacks",
          branch: "main",
        }
      },
      options: {
        showPanel: true,
        panelPosition: 'right',
      },
}

export const Medium =()=> <Input varient="medium" placeholder="This is medium size" error="error"/>
export const Large =()=> <Input varient="large" placeholder="This is large size"/>
export const ExtraLarge =()=> <Input varient="extraLarge" placeholder="This is XL size"/>
