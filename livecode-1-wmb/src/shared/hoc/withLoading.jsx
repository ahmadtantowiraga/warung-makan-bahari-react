import { Component } from 'react';

export default function withLoading(WrappedComponent){
    return class HOC extends Component{
        state ={
            isLoading: false,
        }
        handleShowLoading =()=>{
            this.setState({
                isLoading: true,
            })
        }
        handleHideLoading=()=>{
            this.setState({
                isLoading: false,
            })
        }
        render(){
            return (
                <WrappedComponent
                {...this.props}
                isLoading={this.state.isLoading}
                showLoading={this.handleShowLoading}
                hideLoading={this.handleHideLoading}
                />
            )
        }

    }
}