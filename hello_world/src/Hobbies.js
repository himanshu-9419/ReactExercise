import React, {Component} from 'react';
class Hobbies extends Component {
    render() {
        const liStyle = { 'fontSize': '1.5em' };
        const hobbies = ['eat', 'sleep', 'code'];
        return (
            <ul style={liStyle}>
                {hobbies.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
        )
    }
}

export default Hobbies;