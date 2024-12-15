import React from 'react';

const AboutUsSummary = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="PLaceholder Studios.png" alt="About Us" />
        </div>
        <div className="col-md-6">
          <h2>About Us Summary</h2>
          <p>Welcome to Placeholder Studios, your ultimate destination for everything gaming! Whether you’re a casual player or a competitive pro, we’ve created this space for all gaming enthusiasts to explore, discover, and connect.

At Placeholder Studios, we’re passionate about bringing you the latest news, in-depth guides, gameplay reviews, and tips for all your favorite games. Our mission is to provide gamers with a reliable and engaging platform where they can find everything they need to enhance their gaming experience.

Our team is made up of dedicated gamers, content creators, and industry experts who share the same excitement and love for gaming as you do. We’re here to help you stay up-to-date with the gaming world, improve your skills, and most importantly—have fun!

Join our community, explore new games, and get ready to level up with Placeholder Studios.</p>
          <button className="btn btn-primary">Read more...</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSummary;