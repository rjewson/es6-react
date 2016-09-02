import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        let name = this.props.name;
        return (
            <div>Hello there {name}!!</div>
        )
    }
}

App.propTypes = {
    name: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

ReactDOM.render(
    <App name="Richard"/>,
    document.getElementById('app')
);
// export default App;