import React from "react";
import { Spin } from "antd";
import _ from "lodash";
import ReactMarkdown from "react-markdown";

import src from "./mds/myDiary.md";

class Blogs extends React.PureComponent {
  state = {
    markdown: "",
  };

  componentDidMount() {
    setTimeout(
      () =>
        fetch(src)
          .then((res) => res.text())
          .then((text) => this.setState({ markdown: text })),
      500
    );
  }

  render() {
    const { markdown } = this.state;
    return (
      <Spin spinning={_.isEmpty(markdown)} size="large">
        <ReactMarkdown source={markdown} />
      </Spin>
    );
  }
}

export default Blogs;
