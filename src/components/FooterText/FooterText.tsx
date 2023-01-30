import classes from './FooterText.module.css';

const FooterText = () => (
  <>
    <section className={classes.sect1}>
      <h3>Lorem</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl
        tincidunt eget nullam non nisi est sit amet.
      </p>
    </section>
    <section className={classes.sect2}>
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl
        tincidunt eget nullam non nisi est sit amet. Vulputate odio ut enim
        blandit volutpat maecenas volutpat. Massa tincidunt dui ut ornare lectus
        sit. Quam elementum pulvinar etiam non.
      </p>
    </section>
    <section className={classes.sect3}>
      <h3>Contacts</h3>
      <p className={classes.address}>
        <span className={classes['address-margin']}>London</span>
        <span>26985 Brighton Lane, Lake Forest, CA 92630</span>
        <span>+1 (949) 354-2574</span>
        <span className={classes['address-margin']}>Paris</span>
        <span>9 Doe Crossing Court</span>
        <span>+11 281-762-2687</span>
      </p>
    </section>
  </>
);

export default FooterText;
