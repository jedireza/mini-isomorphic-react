var React = require('react');

module.exports = React.createClass({
    render: function () {

        return (
            <html>
                <head><title>JS Breakfast</title></head>
                <body>
                    <div id="app-mount"
                        dangerouslySetInnerHTML={{ __html: this.props.markup }}>
                    </div>
                    <script id="app-state"
                        dangerouslySetInnerHTML={{ __html: this.props.state }}>
                    </script>
                    <script src="/assets/client.js"></script>
                </body>
            </html>
        );
    }
});
