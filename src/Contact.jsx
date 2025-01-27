import React from 'react';

function Contact() {
  return (
    <main id="LinkedIn" className="container mt-5">
      <h2 className="text-center mb-4">Connect with me on Social Media</h2>
      
      <div className="d-flex justify-content-center">
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/rinkal-yadav-rby-342534225435342553643/" className="mx-3">
          <img className='myim' src="/image/linkedIn.png" width="50px" alt="LinkedIn" />
        </a>
        
        {/* Amazon Icon (Not linked yet) */}
        <a href="" className="mx-3">
          <img className='myim' src="/image/amazon.jpg" width="50px" alt="Amazon" />
        </a>
        
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/rinkalbyadav/" className="mx-3">
          <img className='myim' src="/image/instagram.webp" width="50px" alt="Instagram" />
        </a>
        
        {/* Facebook Icon (Not linked yet) */}
        <a href="https://www.facebook.com/profile.php?id=100074741916256" className="mx-3">
          <img className='myim' src="/image/facebook.png" width="50px" alt="Facebook" />
        </a>
        
        {/* Naukri Icon */}
        <a href="https://www.naukri.com/mnjuser/profile" className="mx-3">
          <img className='myim' src="/image/naukri.png" width="50px" alt="Naukri" />
        </a>
      </div>
    </main>
  );
}

export default Contact;
