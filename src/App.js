import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/translate';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite Js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

export default () => {

    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        // <div>
        //     <Accordion items={items}/>
        //     {/* <Search/> */}

        //     <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        //     {showDropdown ?
        //         <Dropdown 
        //         selected = {selected}
        //         onSelectedChange = {setSelected}
        //         options={options}  
        //     />: null
        //     }
        // </div>


        <div>
            <Translate/>
        </div>
    );
};