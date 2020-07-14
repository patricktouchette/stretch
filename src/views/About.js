import React from 'react';
import './About.css';
import { PrimaryButton } from '../components/buttons';

const About = ({ setShowAbout }) => {
  return (
    <div className="about">
      <h1>About</h1>

      <p>
        This is app is designed to get me to do my stretching exercises
        regularly.
      </p>

      <h3>How to Use?</h3>

      <p>
        To start, I choose which routine I would like to do. A routine is a set
        of exercises. A timer shows me how long to hold the stretch. Once the
        timer is down to 0, it presents the next exercise in the list. I can
        also view the list of exercises and skip to a selected exercise.
      </p>

      <h3>Why? </h3>
      <p>
        I have a tendency to forget to stretch. Also, the streching routine
        suggested by my physiotherapist quickly got out of hand. I find it too
        complicated to keep track of the whole routine and counting down time.
      </p>
      <p>
        For example: I have 5 stretches (tricep, bicep, wrist flexor, wrist
        extensor, neck), which I should do on both sides for 30 seconds, repeat
        that 3 times, and alternate between stretches. The result is a fancy
        sequence. I just want to strech and be told what to do so my mind can be
        free to wander/figure out why my code is broken.
      </p>
      <p></p>

      <h3>The Result</h3>

      <p>
        To solve this problem, I coded this simple app using React.js with some
        styling using plain old CSS. You can see the code on{' '}
        <a href="https://github.com/patricktouchette/stretch">github</a>. I use
        JSON files for to hold the exercises data, and another to hold the
        sequences of exercises. This lets me avoid using a database, though it
        makes the app pretty much only useful to me. Which I am ok with.
      </p>

      <PrimaryButton text="Back" onClick={() => setShowAbout(false)} full />
    </div>
  );
};

export default About;
