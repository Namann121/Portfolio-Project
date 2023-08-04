const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.icon}>
      <a className="icon" style={styles.icon} href="https://github.com/Namann121">
        <i className="fa-brands fa-github" aria-hidden="true" title="Namann's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/namann-luthra-014b7b207/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Namann's LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://leetcode.com/Namann/">
        <i className="fas fa-laptop-code" aria-hidden="true" title="Namann's Leetcode Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
