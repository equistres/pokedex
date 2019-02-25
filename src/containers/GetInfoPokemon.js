import React, { Component } from 'react';
import Pokedex from '../components/Pokedex'


const URI_URL= 'http://pokeapi.co/api/v2/pokemon?limit=151'

export default class GetInfoPokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
          list : [],
          fetched : false,
          loading : false,
          initialPokemon: 0
        };
      }
    componentWillMount(){
      fetch(URI_URL)
        .then(response => response.json())
        .then(data=>{
            this.setState({
              list : data.results,
              loading : true,
              fetched : true,
              initialPokemon: 5
            });
          });
    }
    render(){
      const {fetched, loading} = this.state;
      let content ;
      if(fetched){
        content = <Pokedex name={this.state.list[this.state.initialPokemon].name} url={this.state.list[this.state.initialPokemon].url}/>
        ;
      }else if(loading && !fetched){
          content = <p> Loading...</p>;
      }
      else{
        content = <div/>;
      }
      return(<div>
        {content}
      </div>)
    }
}