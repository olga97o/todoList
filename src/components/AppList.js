import React, { Component } from 'react';

class AppList extends Component {
    constructor(props) {
        super(props);

        this.addActiveClass= this.addActiveClass.bind(this);
        this.state = {
            isActive: false
        }
    }

    addActiveClass() {
        this.setState({
            isActive: true
        })
    }

    render() {
        return (
            <ul className='tasks'>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        {item.title}
                        <button>Check</button>
                        <button>Delete</button>
                    </li>
                ))
                }
            </ul>
        );
    }
}
export default AppList;