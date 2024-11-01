import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <>
      <main>
        <div className={styles.landingCopy}>
          <p>Helping others can help us feel a sense of belonging, make new friends, and connect with our communities.</p>
          <br />
          <p>Local Heroes is here to help people help themselves by helping others.</p>
          <br />
          <p>Ask for help, offer help... either way, you’re a local hero!</p>
          <br />
        </div>
        <div className={styles.landingPageButtons}>
          <a href="/signup" className={styles.buttonAuth} role="button">Sign Up</a>
          <a href="/signin" className={styles.buttonAuth} role="button">Sign In</a>
        </div>
      </main>
    </>
  );
};

export default Landing;
