const ChickenCard = () => {
  return (
    <section className="chicken-card">
      <h2>breed</h2>
      <img className="chicken-image"></img>
      <div className="chicken-stats">
        <ul>
          <li>eggs/year</li>
          <li>weight</li>
          <li>egg color</li>
          <li>other stats: broody, hybrid/purebreed, good forager, friendly</li>
        </ul>
      </div>
      <div className="chicken-description">
        <h3>Meet the breed</h3>
        <p>Description goes here</p>
      </div>
    </section>
  );
};
