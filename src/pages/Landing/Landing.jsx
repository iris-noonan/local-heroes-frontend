// src/components/Landing/Landing.jsx
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <>
      <main>
        <p>Helping others can help us feel a sense of belonging, make new friends, and connect with our communities.</p>
        <p>Local Heroes is here to help people help themselves by helping others.</p>
        <p>Ask for help, offer help... either way, you’re a local hero!</p>
        <a href="/signup" className="btn btn-link" role="button">Sign Up</a>
        <a href="/signin" className="btn btn-link" role="button">Sign In</a>
      </main>
    </>
  );
};

export default Landing;
