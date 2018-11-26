import React, { Component } from 'react';

export default class TweetList extends Component {
  render() {
    return (
      <main className="container">
        <section id="tweets-container">
          {this.props.tweets.map(tweet => <Tweet tweet={tweet} />)}
        </section>
      </main>
    );
  }
}

export class Tweet extends Component {
  render() {
    // These two lines are the same thing.
    const { tweet } = this.props;
    // const tweet = this.props.tweet;

    return (
      <article className="tweet">
        <header>
          <img className="user-avatar" src={tweet.user.avatars.small} />
          <h2 className="user-name">{tweet.user.name}</h2>
          <small className="user-handle">{tweet.user.handle}</small>
        </header>
        <div className="body">
          <p>{tweet.content.text}</p>
        </div>
        <footer>
          <small className="age">10 days ago</small>
          <span className="actions">
            <a href="#">
              <i className="fa fa-flag" />
            </a>
            <a href="#">
              <i className="fa fa-retweet" />
            </a>
            <a href="#">
              <i className="fa fa-heart" />
            </a>
          </span>
        </footer>
      </article>
    );
  }
}
