import React, { Component } from 'react'; // same as Component =React.Component

//== Class Based Component ==
class SearchBar extends Component {

    constructor(props) {
        super(props);
        //initialize state. everywhere else it will be this.setState() triggering render
        this.state = { term: '' };
    }

    //== Every class has this render() that returns JSX ==
    render() {
        //Note: class based components have access to this.props!! 
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) }
                />
            </div>
        );
    }

    onInputChange(term) { 
        this.setState({ term : term })
        this.props.onSearchTermChange(term);
    }
}
//State is plain javascript object that is used to record and react to user events. 
//Each class has its own State object. Whenever a components State object is changed, it re-renders itself and any child components inside of it. 
export default SearchBar;