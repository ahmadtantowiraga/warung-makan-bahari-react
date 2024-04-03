import { Component } from 'react';
export default function Data(WrappedComponent){
    return class HOC extends Component{
        state={
            dataTable:[],
            dataMenu:[],
        }
        handleDataTable=(data)=>{
            this.setState({dataTable:this.state.dataTable.push(data)})
        }
        handleDataMenu=(data)=>{
            this.setState({dataMenu:this.state.dataMenu.push(data)})
        }
        render(){
            return (
                <WrappedComponent
                isLoading={this.state.isLoading}
                showLoading={this.handleShowLoading}
                hideLoading={this.handleHideLoading}
                />
            )
        }

    }
}
