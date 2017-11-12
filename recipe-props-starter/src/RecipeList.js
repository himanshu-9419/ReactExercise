import Recipe from './Recipe';
import React ,{Component} from 'react';
import PropTypes from 'prop-types';
class RecipeList extends Component{
    static defaultProps={
        recipes:[
            {
                title:'Kadhi Chawal',
                ingredients:['Rice', 'Oil','Besan','Sapreta Curd'],
                instructions:'Mix Ingredients',
                img:'kadhi-chawal-recipe.1024x1024-1.jpg'
            },
            {
                title:'Makki Rote - Sarso Sag',
                ingredients:['Makki','Oil','Sarso','Jeera'],
                instructions:'Mix Ingredients',
                img:'makkijpg.jpg'
            },
            {
                title:'pasta',
                ingredients:['sauce', 'oil'],
                instructions:'Mix Ingredients',
                img:'3570996.jpg'
            }
        ]
    }
    static propTypes={
        recipes:PropTypes.arrayOf(PropTypes.object)
    }
    render(){
        
        return (
            <div style={{'display':'flex'}}>
            {this.props.recipes.map((item,index)=>(
                <Recipe key={index}
                    title={item.title}
                    ingredients={item.ingredients}
                    instructions={item.instructions}
                    img={item.img}
                />
            ))}
            </div>
        )
    }
}
export default RecipeList;