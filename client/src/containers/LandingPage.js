import React from 'react';
import Auth from '../modules/Auth';
import LandingPage from '../components/LandingPage.js';


class LandingPage extends React.Component {

  // Class constructor.
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {}
    };
  }

  // This method will be executed after initial rendering.
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/landingPage');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }

  // Render the component.
  render() {
    return (<LandingPage secretData={this.state.secretData} user={this.state.user} />);
  }

}

export default LandingPage;