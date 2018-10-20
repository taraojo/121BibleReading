import React, { Component } from "react";
import { withRouter } from "react-router";

import { Icon } from "antd";

class NavBar extends Component {
  render() {
    return (
      <div>
        {this.props.backButton && (
          <Icon
            onClick={() => this.props.history.goBack()}
            type="arrow-left"
            theme="outlined"
          />
        )}
        {this.props.close && (
          <Icon
            onClick={() => this.props.history.goBack()}
            type="close"
            theme="outlined"
            style={{ float: "right" }}
          />
        )}
      </div>
    );
  }
}

export default withRouter(NavBar);
