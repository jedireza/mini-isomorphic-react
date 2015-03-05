var React = require('react');

module.exports = React.createClass({
    handleClick: function () {

        alert('Hello ' + this.props.name);
    },
    render: function () {

        return (
            <div onClick={this.handleClick}>
                <div className="greeting">
                    Good morning {this.props.name}.
                </div>
            </div>
        );
    }
});
