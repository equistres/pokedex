import React, { Component } from 'react';


class HandleError extends Component {
    state = {
        handleError:false
    }
    componentDidCatch(error, info){
        this.setState({
            handleError: true
        })
    }
    render(){
        if(this.state.handleError){
            return(
                <div>error</div>
            )       
        }
        return this.props.children

    }
}

export default HandleError