import React, { Component } from 'react';
let URL_IMAGES = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/NOMBRE.png';

export default class Pokemon extends Component {
    render(){
        return(
        //     <div className="pokemon--species">
        //     <div className="pokemon--species--container">
        //       <div className="pokemon--species--sprite">
        //         <img src={URL_IMAGES.replace("NOMBRE", this.props.pokemon.name)} />
        //       </div>
        //       <div className="pokemon--species--name"> {this.props.pokemon.name} </div>
        //     </div>
        //   </div>

            <div className="col-12 bg-light align-self-center rounded" style={{margin:'10px 10px 10px 10px'}}>
                <img src={URL_IMAGES.replace("NOMBRE", this.props.pokemon.name)} />
                <div className="pokemon--species--name"> {this.props.pokemon.name}</div>
            </div>
        )
    }
}