import React, { Component } from 'react';


class GetAditionalInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
          pokemon : null,
          fetched : false,
          loading : false
        };
    }
    componentWillMount(){
      fetch(this.props.Url)
        .then(response => response.json())
        .then(data=>{
            this.setState({
              pokemon : data,
              loading : true,
              fetched : true
            }, this.test);
          });
    }
    componentWillReceiveProps(newprop){
      fetch(newprop.Url)
      .then(response => response.json())
      .then(data=>{
          this.setState({
            pokemon : data,
            loading : true,
            fetched : true
          });
        });
    }

    render(){
        const {fetched, loading, pokemon} = this.state;
        let types = [];
        let abilities = [];

        let content ;
        if(fetched){
            pokemon.types.forEach(element => {
                types.push(element.type.name)
            });

            pokemon.abilities.forEach(element => {
                abilities.push(element.ability.name)
            });
            content = <div>
                        <strong>Name :</strong> {pokemon.name}<br/>
                        <strong>Type :</strong> {types.toString()}<br/>
                        <strong>Abilities :</strong> {abilities.toString()}<br/>
                        <strong>Height :</strong> {pokemon.height}<br/>
                        <strong>Weight :</strong> {pokemon.weight} lbs.
                      </div>
            ;
        }else if(loading && !fetched){
            content = <p> Loading...</p>;
        }
        else{
            content = <div/>;
        }
        return(
            <div id="stats">
                {content}
            </div>
        )
    }
}

export default GetAditionalInfo