"use strict";

function Homepage() {
  return (
  <div>
    <img src="/static/img/balloonicorn.jpg" />

    <h1>Hello!</h1>

    <a href="/cards">
      Click here to see the trading cards
    </a>
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
