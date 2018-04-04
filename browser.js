var React = require('react')
var ReactDOM = require('react-dom')
var Relay = require('react-relay')
var ConferenceApp = require('./ConferenceApp')

ReactDOM.render(
    <Relay.RootContainer
        Component={ConferenceApp.Container}
        route={ConferenceApp.queries}
        onReadyStateChange={({error}) => { if (error) console.error(error) }} />,

    document.getElementById('content')
)