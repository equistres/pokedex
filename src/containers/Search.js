import React  from 'react';

class Search extends React.PureComponent{
    render(){
        console.log(this)
        return(
            <input defaultValue="" onChange={this.props.searchFn} id="buscador"/>
        )
    }
}
export default Search