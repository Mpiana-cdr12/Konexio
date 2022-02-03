import React, { component } from 'React' // Les component à quoi sert-ils ?

class List extends Component{
    render() { // le rendr
        return(
            <ul> // faire un balise ul 
                {this.props.listItems.map(curr => { // this.props.listItems 
                    return ( <li>{curr.name} - {curr.price} </li>)
                  })}
            </ul>
        )
    }
}
export default List