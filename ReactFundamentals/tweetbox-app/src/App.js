import React from 'react';
import ReactDOM from 'react-dom';

var TweetBox = React.createClass({
  getInitialState: function() {
    return{
      text: "",
      photoAdded: false
    };
  },
  handleChange: function(event) {
//     console.log(event.target.value);
    this.setState({ text: event.target.value })
  },
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  },
  remainingCharacters: function() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  },
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control" 
                  onChange={this.handleChange}></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
          disabled={this.state.text.length == 0 && !this.statePhotoAdded}>Tweet</button>
        <button className="btn btn-default pull-right" onClick={this.togglePhoto}>
          {this.state.photoAdded ? "Photo Added" : "Add Photo"}
        </button>
    </div>
    );
  }
});


ReactDOM.render(
  <TweetBox />,
  document.body
);