import React, { PureComponent } from 'react';
import Pokedex from './Pokedex';
import propTypesRange from 'prop-types-range';


const URI_URL= 'https://pokeapi.co/api/v2/pokemon?limit=151'

class GetInfoPokemon extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          list : [],
          fetched : false,
          loading : false,
          initialPokemon: 0
        };
    }   
    componentDidMount(){ 
      console.log("componentDidMount")
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
      console.log("this.render()")
      this.render()
    }    
    handleClickNext = (event) => {
      const incremento = parseInt(event.target.parentElement.getAttribute("valor"));
      let suma = this.state.initialPokemon+incremento
      if(suma<=149){
        this.setState({
          initialPokemon: suma,
          loading : true,
          fetched : true,
        }, this.updatePage);
      };
    }

    handleClickPrev = (event) => {
      const decremento = parseInt(event.target.parentElement.getAttribute("valor"));
      let resta = this.state.initialPokemon-decremento
      if(resta>=0){
        this.setState({
          initialPokemon: resta,
          loading : true,
          fetched : true,
        }, this.updatePage);
      };
    };

    buscarPokemon = (event) => {
      let q = event.target.value;
      if(q.length>=4){
        var i;
        for (i = 0; i < this.state.list.length; i++) { 
          if(this.state.list[i].name.match(q)){
            this.setState({
              initialPokemon: i,
              loading : true,
              fetched : true,
            }, this.updatePage);
          }
        }
      }
    }

    render(){
      console.log("entro metodo render()", this.state)
      const {fetched, loading} = this.state;
      let content;
      if(fetched && (this.state.initialPokemon<=150 && this.state.initialPokemon>=0)){
        //console.log(this.state.list[this.state.initialPokemon].url)
        content = <Pokedex name={this.state.list[this.state.initialPokemon].name} url={this.state.list[this.state.initialPokemon].url} handleClickNext={this.handleClickNext} handleClickPrev={this.handleClickPrev} initialPokemon={this.state.initialPokemon} searchFn={this.buscarPokemon}/>
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

Pokedex.propTypes = {
  initialPokemon: propTypesRange(0, 150)
};

export default GetInfoPokemon