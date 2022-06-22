import React from 'react'

export default class ClassProps extends React.Component{
    render(){
        const {identity} = this.props
        return(
            <>
            <p>Hi I am {identity.alias} but you can call me {identity.name}</p>
            </>
        )
    }
}