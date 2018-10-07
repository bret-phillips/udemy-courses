console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'This is info',
  options: [
    'one',
    'two',
  ],
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Options:' : 'No options available.'}</p>
  </div>
);


const user = {
  name: 'Bret Phillips',
  age: '27',
  location: 'Home',
};

function getLocation() {
  if (user.location) {
    return <p>Location: {user.location}</p>;
  }
};

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation()}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
