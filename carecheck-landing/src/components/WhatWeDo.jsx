// src/components/WhatWeDo.jsx
function WhatWeDo() {
  return (
    <section id="what-we-do">
      <h2>What we do</h2>
      <p>
        Explain in plain language what your product or service actually does.
        Highlight the pain points you remove and the benefits users experience.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3>Feature one</h3>
          <p>Short description of the core feature and why it matters.</p>
        </div>
        <div className="card">
          <h3>Feature two</h3>
          <p>How this helps your user save time, money, or stress.</p>
        </div>
        <div className="card">
          <h3>Feature three</h3>
          <p>Any “wow” factor that makes your solution stand out.</p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
