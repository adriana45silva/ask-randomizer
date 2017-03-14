import React from "react";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


class AskItem extends React.Component {

  constructor(props) {
    super(props);
    this.foo = 'foo';
    this.name = 'AskItem';
  }

  componentWillMount(){
    console.log(this);
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

  render() {
    return (
      <div>
        <h1>This is the {this.name}</h1>
      </div>
    );
  }
  
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default AskItem;