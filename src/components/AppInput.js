import React, {Component} from 'react';
import AppList from './AppList'

class AppInput extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    handleSubmit = (e) => {

        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            title: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: [...state.items, newItem],
            text: ''
        }));
    };

    render() {
        return (
            <div>
                <form
                    className='addTask'>
                    <input
                        type='text'
                        required
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button
                        onClick={this.handleSubmit}
                        className='addTaskButton'>Add task
                    </button>

                </form>

                <AppList items={this.state.items}/>
            </div>

        );
    }

}

export default AppInput;