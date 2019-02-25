import React, { Component } from 'react';
import Pokemon from '../components/Pokemon'

const URI_URL= 'http://pokeapi.co/api/v2/pokemon?limit=151'

export default class GetInfoPokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
          list : [],
          fetched : false,
          loading : false,
        };
      }
    componentWillMount(){
      fetch(URI_URL)
        .then(response => response.json())
        .then(data=>{
            this.setState({
              list : data.results,
              loading : true,
              fetched : true
            });
          });
    }
    render(){
      const {fetched, loading, list} = this.state;
      let content ;
      if(fetched){
        content =
        <div className="row">
          { list.map((item,index)=><Pokemon key={item.name} id={index+1} pokemon={item}/>) }
        </div>;
      }else if(loading && !fetched){
          content = <p> Loading...</p>;
      }
      else{
        content = <div/>;
      }
      return(<div className="container">
        {content}
      </div>)
    }
}