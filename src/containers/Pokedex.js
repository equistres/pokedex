import React  from 'react';
import Pokemon  from './Pokemon';
import GetAditionalInfo from './GetAditionalInfo';
import propTypesRange from 'prop-types-range';
import Search from './Search';

let URL_IMAGES = 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/NOMBRE.png';

 class Pokedex extends React.PureComponent{
    render(){
        let prevButton;
        let backButton;
        if(this.props.initialPokemon===0){
            prevButton = <div id="botcross"><div id="downT"></div></div>
            backButton = <div id="leftcross"><div id="leftT"></div></div>
        }else{
            prevButton = <div id="botcross" onClick={this.props.handleClickPrev} valor="1"><div id="downT" className="greendown"></div></div>
            backButton = <div id="leftcross" onClick={this.props.handleClickPrev} valor="5"><div id="leftT" className="greenleft"></div></div>
        }
        let idPokemon = this.props.initialPokemon+1;

    return(
        <div> 
        <div id="pokedex">
            <div id="left">
                <div id="logo"></div>
                <div id="bg_curve1_left"></div>
                <div id="bg_curve2_left"></div>
                <div id="curve1_left">
                <div id="buttonGlass">
                    <div id="reflect"> </div>
                </div>
                <div id="miniButtonGlass1"></div>
                <div id="miniButtonGlass2"></div>
                <div id="miniButtonGlass3"></div>
                </div>
                <div id="curve2_left">
                <div id="junction">
                    <div id="junction1"></div>
                    <div id="junction2"></div>
                </div>
                </div>
                <div id="screen">
                <div id="topPicture">
                    <div id="buttontopPicture1"></div>
                    <div id="buttontopPicture2"></div>
                </div>
                <Pokemon Imagen={URL_IMAGES.replace("NOMBRE", this.props.name)}/>
                <div id="buttonbottomPicture"></div>
                <div id="speakers">
                    <div className="sp"></div>
                    <div className="sp"></div>
                    <div className="sp"></div>
                    <div className="sp"></div>
                </div>
                </div>
                <div id="bigbluebutton"></div>
                <div id="barbutton1"></div>
                <div id="barbutton2"></div>
                <div id="cross">
                {backButton}
                <div id="topcross" onClick={this.props.handleClickNext} valor="1">
                    <div id="upT"></div>
                </div>
                <div id="rightcross" onClick={this.props.handleClickNext} valor="5">
                    <div id="rightT"></div>
                </div>
                <div id="midcross">
                    <div id="midCircle"></div>
                </div>
                {prevButton}
                </div>
            </div>
            <div id="right">
            <GetAditionalInfo Url={this.props.url}/>
            <div id="blueButtons1">
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            </div>
            <div id="blueButtons2">
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            <div className="blueButton"></div>
            </div>
            <div id="miniButtonGlass4"></div>
            <div id="miniButtonGlass5"></div>
            <div id="barbutton3"></div>
            <div id="barbutton4"></div>
            <div id="yellowBox1">Search Pokemon <br/><Search searchFn={this.props.searchFn}/></div>
            <div id="yellowBox2"><br/><b>Pokemon Id:</b> {idPokemon}</div>
            <div id="bg_curve1_right"></div>
            <div id="bg_curve2_right"></div>
            <div id="curve1_right"></div>
            <div id="curve2_right"></div>
        </div>
        </div>
        <div id="information"><h3>How to Use?</h3>
        <p>&#x25B2; and &#x25BC; navigate 1 pokemon</p>
        <p>&#9668; and &#9658; navigate 5 pokemon</p>
        <p>or find pokemon by name: <code>Example pikachu</code></p>
        </div>
        </div>
    )
}

}

Pokedex.propTypes = {
    initialPokemon: propTypesRange(0, 150)
};

export default Pokedex;