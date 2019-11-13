import React, { Component, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";

class Comp1 extends Component {
  state = {};

  handleDelete = id => {
    let temp = this.state.data;
    temp[id].flag = !temp[id].flag;
    this.setState({ date: temp });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.mails.map((item, index) => {
            return (
              <div key={index}>
                <td>
                  <Avatar alt="Remy Sharp" src={`./images/${item.pic}`} />
                </td>
                <td>Sender: {item.name}</td>
                <br />
                <td>Title: {item.title}</td>
                <br />
                <td>Content: {item.content}</td>
                <br />
                <button onClick={() => this.handleDelete(index)}>delete</button>
                <br></br>
                <br></br>
              </div>
            );
        })}
      </React.Fragment>
    );
  }
}

export default Comp1;
