var GraphQL = require('graphql')
var GraphQLRelay = require('graphql-relay')
var db = require('./database')

// The schema describes the types and queries for our data and
// is the spot to register them

// We need to set up our node definitions to provide a node interface.
// Relay uses global ids for entities

var nodeDefinitions = GraphQLRelay.nodeDefinitions(function(globalId) {
    var idInfo = GraphQLRelay.fromGlobalId(globalId)
    // if (idInfo.type == 'User') {
    //     return db.getUser(idInfo.id)
    // } else if(idInfo == 'Conference') {
    //     return db.getConference(idInfo.id)
    // }
    if (idInfo.type == "Project") {
        return db.getProject(idInfo.id)
    }
    return null;
});

var projectType = new GraphQL.GraphQLObjectType({
    name: 'Project',
    description: 'A project',

    // Relay will use this function to determine if an object in your system is
    // of a particular GraphQL type
    isTypeOf: function(obj) { return obj instanceof db.Project },

    fields: {

        id: GraphQLRelay.globalIdField('Project'),
        name: {
            type: GraphQL.GraphQLString,
            description: 'The name of the project',
        },
        description: {
            type: GraphQL.GraphQLString,
            description: 'The description of the conference'
        },
        // how: {type: GraphQL.GraphQLInt},
        // how: {userToShow: { type: GraphQL.GraphQLInt }
        // },
        // resolve: function(args) {
        //     return GraphQLRelay.connectionFromArray(db.getProject(args.userToShow), args)
        // },

    },
    // This declares this GraphQL type as a Node
    interfaces: [nodeDefinitions.nodeInterface],
});

// var userType = new GraphQL.GraphQLObjectType({
//     name: 'User',
//     description: 'A person who uses our app',
//     isTypeOf: function(obj) { return obj instanceof db.User },
//
//     fields: function() {
//         return {
//             id: GraphQLRelay.globalIdField('User'),
//             name: {
//                 type: GraphQL.GraphQLString,
//                 description: 'The name of the user',
//             },
//
//             // We can set up a relationship between users and conferences here
//             conferences: {
//                 description: 'A listing of the user\'s conferences',
//
//                 // Relay gives us helper functions to define the Connection and its args
//                 type: GraphQLRelay.connectionDefinitions({name: 'Conference', nodeType: conferenceType}).connectionType,
//
//                 // argument to tell GraphQL which user to pass back
//                 // in the resolve block
//                 args: {
//                     userToShow: { type: GraphQL.GraphQLInt }
//                 },
//
//                 // The resolve block will complete a query and pass back
//                 // data for the user id supplied by the arguments we pass in
//                 resolve: function(user, args) {
//                     return GraphQLRelay.connectionFromArray(db.getConferencesByUser(args.userToShow), args)
//                 },
//             },
//         }
//     },
//     interfaces: [nodeDefinitions.nodeInterface],
// });

module.exports = new GraphQL.GraphQLSchema({
    query: new GraphQL.GraphQLObjectType({
        name: 'Query',
        fields: {
            // Relay needs this to query Nodes using global IDs
            node: nodeDefinitions.nodeField,
            // Root queries
            project: {
                type: projectType,
                resolve: function() {
                    return db.getProject()                },
            },
        },
    }),
});