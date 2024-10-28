// src/components/Landing/Landing.jsx
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <>
      <main>
        <p>Helping others can help us feel a sense of belonging, make new friends, and connect with our communities.</p>
        <p>Local Heroes is here to help people help themselves by helping others.</p>
        <p>Ask for help, offer help... either way, you’re a local hero!</p>
        <Button variant="primary">Sign Up</Button>{' '}
        <Button variant="primary">Sign In</Button>{' '}
      </main>
    </>
  );
};

export default Landing;
