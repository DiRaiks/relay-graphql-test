// function User(id, name) {
//     this.id = id.toString();
//     this.name = name;
// }

function Project(id, name, description, time) {
    this.id = id.toString();
    this.name = name;
    this.description = description;
    this.time = time;
}

// function Conference(id, frameworkId, name, description, attendees) {
//     this.id = id.toString();
//     this.framework = frameworkId;
//     this.name = name;
//     this.description = description;
//     this.attendees = attendees;
// }

// var users = [
//     new User(1, 'Ryan'),
//     new User(2, 'George')
// ];

var projects = [
    new Project(1, 'AngularJS', '123', '1h'),
    new Project(2, 'React', '123', '1h'),
    new Project(3, 'JavaScript', '123', '1h'),
    new Project(4, 'NodeJS', '123', '1h')
];

module.exports = {
    // User: User,
    // Framework: Framework,
    // Conference: Conference,
    Project: Project,

    getProject: function(id) {
        return projects.filter(function(project) {
            return project.id == id
        })[0]
    },

    getAllProjects() {
        return projects;
    }

    // getConference: function(id) {
    //     return conferences.filter(function(conference) {
    //         return conference.id == id
    //     })[0]
    // },

    // getConferencesByUser: function(userId) {
    //     var confs = [];
    //     conferences.forEach(function(conf) {
    //         conf.attendees.forEach(function(user) {
    //             if (user == userId) {
    //                 confs.push(conf);
    //             }
    //         });
    //     });
    //     return confs;
    // }
}

// var conferences = [
//     new Conference(1, 1, 'ng-conf', 'The world\'s best Angular conference', [1,2]),
//     new Conference(2, 2, 'React Rally', 'Conference focusing on Facebook\'s React', [1]),
//     new Conference(3, 1, 'ng-Vegas', 'Two days jam-packed with Angular goodness with a focus on Angular 2', [2]),
//     new Conference(4, 3, 'Midwest JS', 'Midwest JS is a premier technology conference focused on the JavaScript ecosystem.', [2]),
//     new Conference(5, 4, 'NodeConf', 'NodeConf is the longest running community driven conference for the Node community.', [1,2])
// ];