import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavProps {
}

export default class Nav extends React.Component<INavProps> {

    constructor(props: any) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        console.log("yale yale")
    }


    public render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home page</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        );
    }


}
