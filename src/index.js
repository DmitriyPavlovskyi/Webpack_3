import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Image extends React.Component {
  constructor(props) {
    super()
    this.state = {
      title: "Granite Peaks"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.props.caption}</p>
        <div id="image"></div>
      </div>
    )
  }
}

ReactDOM.render(<Image caption="Wilderness area"/>,
                       document.getElementById('container'));
