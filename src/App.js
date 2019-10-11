import React, {useState,} from 'react';
import logo from './logo.svg';
import './App.css';

const contacts = [
    {name: 'Vasia', id: 1, email: 'vasia@gmail.com', secondName: 'SecondNameVasia', sex: 0, avatar: ''},
    {name: 'Anton', id: 2, email: 'antin@gmail.com', secondName: 'Sempay', sex: 0, avatar: ''},
    {name: 'Nadia', id: 12, email: 'nadia@gmail.com', secondName: 'NadiaAAA', sex: 1, avatar: ''},
    {name: 'Max', id: 13, email: 'max@gmail.com', secondName: 'MaxS', sex: 0, avatar: ''},
]

const Item = ({name, email, secondName='', sex, avatar}) => {
    return (<div>{`${name} ${secondName.toUpperCase()} `}</div>)
}

const App = () => {

    const [text, setText] = useState('')
    return (
        <div className="App">

            <input style={{width: 200}} onChange={(event => setText(event.target.value))}/>
            <ul>
                {contacts.filter(c => c.name.toLowerCase().includes(text.toLowerCase())
                    || c.secondName.toLowerCase().includes(text.toLowerCase())).map(contact =><Item key={contact.id} name={contact.name}/>)
                }
            </ul>
        </div>
    );
}

export default App;
