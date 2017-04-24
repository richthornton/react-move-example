import * as React from 'react';
import { Transition } from 'react-move';
// var Transition = require('react-move').Transition;

let include: boolean;
function makeTransitionItems() {
  include = !include;
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d: number) => ({
      value: d,
    })).filter((d: any, i: number) => Math.random() * 10 > i);
}

export default class TransitionedComponent extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      items: makeTransitionItems(),
    };
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              items: makeTransitionItems(),
            })}
        >
          Randomize Data
        </button>

        <br />
        <br />

        <Transition
          data={items}
          getKey={(d: any) => d.value}
          update={(d: any) => ({
            translate: 1,
            opacity: 1,
            color: 'grey',
          })}
          enter={(d: any) => ({
            translate: 0,
            opacity: 0,
            color: 'blue',
          })}
          leave={(d: any) => ({
            translate: 2,
            opacity: 0,
            color: 'red',
          })}
          stagger={100}
          staggerGroups // staggers items relative to their 'entering', 'updating', or 'leaving' group
        >
          {(data: any) => (
            <div style={{ height: `${20 * 10  }px` }}>
              {data.map((d: any) => (
                <div
                  key={d.key}
                  style={{
                    fontWeight: 'bold',
                    position: 'absolute',
                    transform: `translate(${100 * d.state.translate}px, ${20 * d.key}px)`,
                    color: d.state.color,
                    opacity: d.state.opacity,
                  }}
                >
                  {d.key} - {Math.round(d.progress * 100)}
                </div>
              ))}
            </div>
          )}
        </Transition>
      </div>
    );
  }
}
