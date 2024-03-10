const About = ()=>{
    return (
    <div className="accordion container mt-3" id="accordionExample">
  
      <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Mail-Sense Application
        </button>
        </h2>
  
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Usage</strong><br/>
            <code>
              It is the inbox mail seperator platform. The application seperates incoming emails according to their contents and segregates them according to which category they fall into.
            </code>
          </div>
        </div>
      </div>
  
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Professional Experience
          </button>
        </h2>
        
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>"Is your LinkedIn profile as impressive as your smile?<br/> 
              Because I'm definitely looking to connect."
            </strong><br/>
            <code> &gt;2 Years of Professionalism</code><br/>
              <a href="https://drive.google.com/file/d/134liK9I6gkouke66pHKhqmFG58ZYx8Gb/view?usp=drivesdk" className="text-decoration-none"><code>ViewCV</code></a>
            <br/>
          </div>
        </div>
      </div>
  
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Educational Background
          </button>
        </h2>
        
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Bachelors in Science<br/>Computer Science specialized</strong> <br/>
            <code>North Maharashtra University</code><br/>
            <code>Pune Educational Board</code>
  
          </div>
        </div>
      </div>
  
  </div>
      );
  }
  export default About;