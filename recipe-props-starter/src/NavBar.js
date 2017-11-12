import React,{Component} from 'react';
import PropTypes from 'prop-types';
class NavBar extends Component{
    static defaultProps={
        items:[
            'New Recipe','Home','About','Contact Us'
        ]
    }
    static propTypes={
        items:PropTypes.arrayOf(PropTypes.String)
    }
    render(){
        return (
            <header><h2><a>Recipe App</a></h2>
                <nav>
                    {this.props.items.map((item,index)=>(
                        <li className='NavBar-Item' key={index}><a>{item}</a></li>
                    ))}
                </nav>
            </header>
        );
    }
}
export default NavBar;