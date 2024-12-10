import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Homepage() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <div>
      <p>Welcome to my Bank Application</p>
      <div>
        <Button variant="primary" onClick={handleRegisterClick}>
          Register
        </Button>
        <Button variant="primary" onClick={handleLoginClick}>
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
