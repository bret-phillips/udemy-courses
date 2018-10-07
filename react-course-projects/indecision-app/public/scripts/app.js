'use strict';

console.log('app.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'This is info',
  options: ['one', 'two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Options:' : 'No options available.'
  )
);

var user = {
  name: 'Bret Phillips',
  age: '27',
  location: 'Home'
};

function getLocation() {
  if (user.location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      user.location
    );
  }
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation()
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
