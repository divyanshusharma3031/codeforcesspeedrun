import React from 'react'
import "./About.css"
import katyan from "./Katyan.jpeg"
import thakur from "./thakur.jpeg"
import dk from "./dk.jpeg"
function About() {
  return (
    <>
    <section id="about-info" class="bg-light">
      <div className="fragment1">
        <div class="container1 upper">
          <div class="info-left1">
            <h1 class="l-heading1">
              <span class="text-primary1">About</span> Cfspeedrun
            </h1>
            <p>
            CP Speedrun is an app to help YOU increase your rating on Codeforces! It lists the 15 most solved questions for a particular rating - do these and you will surely advance to the next level. Simply enter your profile name, pick a rating 100-200 points above your current rating, and start solving the questions. These questions have been solved by all top coders, and are clearly crucial in improving in CP.
            </p>
            <p>
              Users don't have to worry about the privacy of the data. iNotes
              uses bcryptjs to securely store the passwords of each user. With
              no data limit iNotes is the best notes storing app accross the
              world.
            </p>
          </div>

          <div class="info-right1">
            <i class="fa-solid fa-note-sticky fa-10x"></i>
          </div>
        </div>
      </div>
    </section>

    <div class="clr"></div>

    <section id="team" class="team section-padding">
      <header class="section-header1">
        <h4>Who We Are</h4>
        <h2>Our Professional Team </h2>
        <p>We are who made this site possible</p>
      </header>
      <div class="flex-items">
        <div>
          <img src={dk} alt="" />
          <h4>Divyanshu Katyan</h4>
          <p>President</p>
        </div>
        <div>
          <img src={thakur} alt="" />
          <h4>Gaurav Thakur</h4>
          <p>Designer</p>
        </div>
        <div>
          <img src={katyan} alt="" />
          <h4>Gaurav Upreti</h4>
          <p>Content Head</p>
        </div>
      </div>
    </section>
  </>
  )
}

export default About