import * as React from 'react';
import axios from 'axios';


export interface IAboutProps {
}


export default class About extends React.Component<IAboutProps> {
    state = {
        list: []
    }
    public render() {
        return (
            <div>
                I am About!
                <ul>
                    {this.state.list.map((itm, index) => <li key={index} >{itm}</li>)}
                </ul>
            </div>
        );
    }


    componentDidMount() {
        this.getData();
    }

    getData() {

        axios.get('https://plugins.getsandbox.com/list').then(res => {
            console.log(res);
            this.setState({ list: res.data });
        })

    }
}
