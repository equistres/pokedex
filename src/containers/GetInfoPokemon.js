import React, { PureComponent } from 'react';
import Pokedex from './Pokedex';


const URI_URL= 'http://pokeapi.co/api/v2/pokemon?limit=151'

export default class GetInfoPokemon extends PureComponent {
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
              initialPokemon: 0
            });
          });
    }
    updatePage = () => {
      this.render()
    }    
    handleClickNext = () => {
      this.setState({
          initialPokemon: this.state.initialPokemon+1,
          loading : true,
          fetched : true,
        }, this.updatePage);
      };
    handleClickPrev = () => {
      this.setState({
        initialPokemon: this.state.initialPokemon-1,
        loading : true,
        fetched : true,
      }, this.updatePage);
    };
    render(){
      const {fetched, loading} = this.state;
      let content ;
      if(fetched){
        console.log(this.state.list[this.state.initialPokemon].url)
        content = <Pokedex name={this.state.list[this.state.initialPokemon].name} url={this.state.list[this.state.initialPokemon].url} handleClickNext={this.handleClickNext} handleClickPrev={this.handleClickPrev}/>
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