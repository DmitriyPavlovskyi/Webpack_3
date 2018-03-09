import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Image extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.caption}</p>
        <div id="image"></div>
      </div>
    )
  }
}

ReactDOM.render(<Image title="Desolation Wilderness"
                       caption="Wilderness area"/>,
                       document.getElementById('container'));
