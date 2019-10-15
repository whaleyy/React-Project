import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

class App extends React.Component {
  state = { avatarA: "" };

  componentDidMount() {
    this.setState({ avatarA: faker.image.avatar() });
  }

  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Sam"
            date="Today is at 5:00PM"
            text="that is awesome!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="jack"
            date="Today is at 9:00AM"
            text="Great!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="will"
            date="Today is at 8:00PM"
            text="I'm gonna be the best developer!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
