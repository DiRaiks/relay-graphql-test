var React = require('react')
var Relay = require('react-relay')

// ConferenceApp is our top-level component
class ConferenceApp extends React.Component {
    render() {
        return(
            <div className="container">
                <h2> Project {this.props.project.name} </h2>
                <div>{this.props.project.description}</div>

            </div>
        )
    }
}

// class Conference extends React.Component {
//     render() {
//         // We get the conference edges passed in from the top-level container
//         // The edges have data like name and id on them
//         var edge = this.props.edge;
//         return (
//             <div className="col-sm-4">
//                 <div className="panel panel-default" key={edge.node.id}>
//                     <div className="panel-heading">
//                         <h3>{edge.node.name}</h3>
//                     </div>
//                     <div className="panel-body">
//                         {edge.node.description}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

exports.Container = Relay.createContainer(ConferenceApp, {
    // We initially want to get the first user's conferences
    initialVariables: {
        projectToShow: 3
    },
    fragments: {
        // Results from this query will be placed on this.props for access in
        // our component
        project: () => Relay.QL`
            fragment on Project {
                name,
                description,
                id
            }
        `
    },
});

exports.queries = {
    name: 'ProjectsQueries',
    params: {},
    queries: {
        // user in this case matches the fragment in the container above
        project: () => Relay.QL`query { project }`
    },
}