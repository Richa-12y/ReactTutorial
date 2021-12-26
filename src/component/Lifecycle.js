import React, { Component } from 'react'

export default class Lifecycle extends Component
{
    constructor()
    {
        super();
        console.log('constructor: used to initialize default values to state fields.');
        this.state = {
            name: '',
            users: []
        }
    }
    componentDidMount ()
    {
        console.log('componentDidMount:Used to call backed service/api to initialize state data');
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(data =>
            {
                this.setState({ users: data });
            })
    }
    shouldComponentUpd
    render ()
    {
        console.log('render: Render the UI.');
        return (
            <div>
                <h2>Life Cycle Hooks</h2>
                <ul>
                    {
                        this.state.users.map((item, index) =>
                        {
                            return <li key={index}>{item.login}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    componentWillUnmount ()
    {
        console.log('componentWillUnmount: clear all subscriptions or clean resouces');
    }
    componentDidCatch (error, errorInfo)
    {
        console.log('componentDidCatch: Handle Error');
    }
}
render() {
    console.log('render: Render the UI.');
    return (
        <div>
            <h2>Life Cycle Hooks</h2>
            <ul>
                {
                    this.state.users.map((item, index) =>
                    {
                        return <li key={index}>{item.login}</li>
                    })
                }
            </ul>
        </div>
    )
}
componentWillUnmount() {
    console.log('componentWillUnmount: clear all subscriptions or clean resouces');
}
componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch: Handle Error');
}

