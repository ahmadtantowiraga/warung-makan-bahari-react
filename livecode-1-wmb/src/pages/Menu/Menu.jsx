import { Component } from 'react';

class Menu extends Component {
    state={
        form :{
            id:"",
            name:"",
            price:"",
            status:false,
        },
        menus:[],
        errors:{
            name:"",
            description:"",
        },
    };
    
    render() {
        return (
            <>

            </>
        );
    }
}

export default Menu;