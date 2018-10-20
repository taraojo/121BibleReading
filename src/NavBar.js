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
            type="left"
            theme="outlined"
          />
        )}
      </div>
    );
  }
}

export default withRouter(NavBar);
