import React from 'react';

function Project() {
  return (
    <main>
      <div className="pro">
        <h2>My Projects</h2>
        <div id="Amazon" className="prj">
          <img src="image/project1.webp" alt="Amazon Clone" />
          <p>
            The Amazon clone has a fundamental workflow system based on which other parts of the process vary. The Amazon Clone app provides a multi-vendor eCommerce marketplace via which the vendors and the users can communicate and sell/buy products.
          </p>
        </div>
        <div id="Spotify" className="prj">
          <img src="image/project2.png" alt="Spotify Clone" />
          <p>
            A Spotify clone is a web application that imitates the features and functionality of the popular music streaming service Spotify. The project's goal is to create a music player that allows users to: Browse and play music, Create and manage playlists, Stream music from the web browser, and Address issues users have reported with Spotify.
          </p>
        </div>
        <div id="Flipkart" className="prj">
          <img src="image/project3.jpg" alt="Flipkart Clone" />
          <p>
            A Flipkart clone app is a multi-vendor ecommerce marketplace with a wide range of products for customers to go on a shopping spree resting their back in their cozy bean bags. Join us and enroll yourself for a Flipkart-like ecommerce app development.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Project;
