import React from "react";
import axios from "axios";

const withFetch = (Component, url) => {
  return class withFetchComponent extends React.Component {
    state = {
      list: [],
    };

    async componentDidMount() {
      const { data: list } = await axios.get(url);
      this.setState({
        list
      });
    };

    render() {
      return <Component {...this.props} />
    };
  };
};