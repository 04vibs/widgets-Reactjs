import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/translate';
import Route from './components/Route';

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

const showAccordion = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
}

const showList = () => {
    if(window.location.pathname === '/list') {
        return <Search/>;
    }
};

const showDropdown = () => {
    if(window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
};

const showTranslate = () => {
    if(window.location.pathname === '/translate') {
        return <Translate/>;
    }
};

export default () => {

     const [selected, setSelected] = useState(options[0]);
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
            {/* {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
            <Translate/> */}
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
            <Dropdown
            label="select a color"
            options={options}
            selected = {selected}
            onSelectedChange = {setSelected}
            />
            </Route>
            <Route path="/translate">
            <Translate/>
            </Route>
        </div>
    );
};