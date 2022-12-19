import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClickedEmoji: true}

  stateCondition = () => {
    this.setState(prevState => ({isClickedEmoji: false}))
  }

  // card 1

  displayEmojies = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-con">
        <div className="inner-con">
          <h1 className="header">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="un-list">
            {emojis.map(eachEmoji => (
              <li
                key={eachEmoji.id}
                className="li-item"
                onClick={this.stateCondition}
              >
                <img alt="1logo" src={eachEmoji.imageUrl} />
                <p>{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  // card 2

  feedBackCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-con">
        <div className="inner-con-2">
          <h1>Thank You</h1>
          <img className="lov" src={loveEmojiUrl} />
          <p className="para">
            We’ll use your feedback to improve our customer support performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isClickedEmoji} = this.state
    return (
      <>
        {isClickedEmoji && this.displayEmojies()}
        {!isClickedEmoji && this.feedBackCard()}
      </>
    )
  }
}

export default Feedback
