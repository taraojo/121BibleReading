import React, { Component } from "react";
import queryString from "query-string";
import api from "./api";
import Header from "./Header";
import Content from "./Content";

class Bible extends Component {
  state = { passage: {} };
  async componentDidMount() {
    const qs = queryString.parse(this.props.location.search);
    const passage = await api.getBible(qs.book, qs.verses);
    this.setState({ passage });
  }

  render() {
    return (
      <>
        <Header close />
        <Content>
          <h4>{this.state.passage.reference}</h4>
          <p>
            {this.state.passage.verses &&
              this.state.passage.verses &&
              this.state.passage.verses.map(v => v.text)}
          </p>
        </Content>
      </>
    );
  }
}

export default Bible;
