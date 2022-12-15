import React from "react";
class Loop1 extends React.Component {
  render() {
    const rows = [];
    for (var i = 0; i < 5; i++) {
      rows.push(<li>Num: {i}</li>);
    }
    return (
      <div>
        <h1>Loop 1:</h1>
        <ul>{rows}</ul>
      </div>
    );
  }
}

export default Loop1;
