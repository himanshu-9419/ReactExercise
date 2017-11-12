import React, {Component} from 'react'
import Hobbies  from './Hobbies';
import './Pet.css';
class Pet extends Component {
    render() {
        const liStyle = { 'fontSize': '1.5em' };
        return (
            <div className='card'>
                <h2 className='name'>Himanshu</h2>
                <img src="https://raw.githubusercontent.com/tigarcia/moxie/master/moxie.png" alt="this is cat" />
                <h5 style={{ 'fontSize': '2em' }}>Hoobbies:</h5>
                <Hobbies/>
            </div>
        )
    }
}
export default Pet;