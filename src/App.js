import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {searchInput: ''}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    console.log(id)
  }

  render() {
    const {searchInput} = this.state
    const searchResults = initialHistoryList.filter(eachSearch =>
      eachSearch.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="top-bar">
          <img
            className="img-history"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-card">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              type="text"
              onChange={this.changeInput}
              placeholder="search history"
            />
          </div>
        </div>
        <div className="box">
          <ul className="history-card">
            {searchResults.map(eachHistory => (
              <li className="history-details" key={eachHistory.id}>
                <p>{eachHistory.timeAccessed}</p>
                <div className="sub-history-details">
                  <img
                    className="logo"
                    src={eachHistory.logoUrl}
                    alt={eachHistory.title}
                  />
                  <div>
                    <p>{eachHistory.title}</p>
                    <p>{eachHistory.domainUrl}</p>
                  </div>
                  <button
                    key={eachHistory.id}
                    type="button"
                    className="delete-icon"
                    onClick={this.onDelete(eachHistory.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
