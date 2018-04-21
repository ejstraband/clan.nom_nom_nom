import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const LandingPage = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Landing Page"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);

LandingPage.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default LandingPage;