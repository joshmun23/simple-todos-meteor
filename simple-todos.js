Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // counter starts at 0
  Template.body.helpers({
    tasks: function() {
      return Tasks.find({});
    }
  })

  Template.body.events({
    "submit .new-task": function (event) {
      //  Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      event.target.text.value = '';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// how to insert tasks from meteor mongo
//
// db.tasks.insert([
//   {
//     text: 'Hello world!',
//     createdAt: new Date()
//   },
//   {
//     text: 'G$D',
//     createdAt: new Date()
//   },
//   {
//     text: 'Eat Gud Fud',
//     createdAt: new Date()
//   }
// ]);
