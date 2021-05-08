"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  }
]

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

ReactDOM.render(
  (
    <TradingCard
      name="Balloonicorn"
      skill="video games"
      imgUrl="/static/img/balloonicorn.jpg"
    />
  ),
  document.querySelector('#balloonicorn')
);

ReactDOM.render(
  (
    <TradingCard
      name="Float"
      skill="baking pretzels"
      imgUrl="/static/img/float.jpg"
    />
  ),
  document.querySelector('#float')
);

ReactDOM.render(
  (
    <TradingCard
      name="Llambda"
      skill="knitting scarves"
      imgUrl="/static/img/llambda.jpg"
    />
  ),
  document.querySelector('#llambda')
);

ReactDOM.render(
  (
    <TradingCard
      name="Merge"
      skill="Blowing Bubbles"
      imgUrl="/static/img/merge.png"
    />
  ),
  document.querySelector('#merge')
);

ReactDOM.render(
  (
    <TradingCard
      name="Off-By-One"
      skill="Tango Dancing"
      imgUrl="/static/img/off-by-one.jpeg"
    />
  ),
  document.querySelector('#off-by-one')
);
ReactDOM.render(
  (
    <TradingCard
      name="Placeholder"
      skill="Mystery"
      imgUrl="/static/img/placeholder.png"
    />
  ),
  document.querySelector('#placeholder')
);

ReactDOM.render(
  (
    <TradingCard
      name="Polymorphism"
      skill="making biscuits"
      imgUrl="/static/img/polymorphism.jpeg"
    />
  ),
  document.querySelector('#polymorphism')
);

ReactDOM.render(
  (
    <TradingCard
      name="Seedpy"
      skill="being juicy"
      imgUrl="/static/img/seedpy.jpeg"
    />
  ),
  document.querySelector('#seedpy')
);

ReactDOM.render(
  (
    <TradingCard
      name="Shortstack Overflow"
      skill="Self-rising"
      imgUrl="/static/img/shortstack-overflow.jpeg"
    />
  ),
  document.querySelector('#shortstack-overflow')
);