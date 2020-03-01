import React,{Component}from 'react';
import './search-bar.scss';


export default class SearchBar extends Component {

    state = {
        textSearch:``
    }

    onSearchChange = (e) => {
        const textSearch = e.target.value
        this.setState({textSearch});
        this.props.onSearchChange(textSearch);
    };

    render() {
        const {textSearch} = this.state;
        return (
                <div id="input-container">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search" value={textSearch} onChange={this.onSearchChange}/>
                </div>
        );
    }
};
