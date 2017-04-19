import * as React from 'react';
// import { Animate } from 'react-move';
var Animate = require('react-move').Animate;

function makeItems() {
  return [0, 1, 2, 3, 4].map((d) => {
    const colorNum = Math.random();
    const color = colorNum > 0.6 ? 'red' : colorNum > 0.3 ? 'gold' : 'blue';
    return {
      scale: Math.random() * 1,
      color,
      rotate: Math.random() > 0.5 ? 360 : 0,
    };
  });
}

export default class MyAnimatedComponent extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      items: makeItems(),
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              items: makeItems(),
            })}
        >
          Randomize Data
        </button>

        <br />
        <br />

        <div
          style={{
            height: '320px',
          }}
        >
          {this.state.items.map((d: any, i: number) => (
            <Animate
              key={i}
              default={{
                scale: 0,
                color: 'blue',
                rotate: 0,
              }}
              data={d}
            >
              {(data: any) => (
                <div
                  style={{
                    float: 'left',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: `${data.rotate / 360 * 100  }px`,
                    transform: `translate(${data.scale * 50}%, ${data.scale * 50}%) scale(${data.scale}) rotate(${data.rotate}deg)`,
                    background: data.color,
                  }}
                >
                  {Math.round(data.scale * 100)}
                </div>
              )}
            </Animate>
          ))}
        </div>
      </div>
    );
  }
}