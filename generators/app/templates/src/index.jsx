import React from 'react';

export default class Component extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <div
        style={this.props.style || null}
        className={'' + (this.props.className ? this.props.className : '')}
      >
        {this.props.children}
      </div>
    );
  }
}
