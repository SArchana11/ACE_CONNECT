import {spinnerRender} from "../utilities/spinner.js";
const branchContainerEl = document.querySelector('.branches-container');

setTimeout(branchesRenderer,0o0);

function branchesRenderer() {
  setTimeout(() => {
    spinnerRender(branchContainerEl);
    setTimeout(() => {
      branchRenderer(branchContainerEl);
    }, 2000);
  }, 3000);
}

function branchRenderer(branchContainerEl) {
  branchContainerEl.innerHTML = `
  <!-- navbar starting -->
  <nav class="navbar bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../images/AceCollege.png" alt="Bootstrap" width="30" height="30" class="navbar-image">
        <span class="navbar-text">ACECONNECT</span>
      </a>
    </div>
  </nav>
  <!-- navbar ending -->

  <div class="heading">
    <h1>Our Departments</h1>
  </div>

  <!-- department cards starting -->
  <div class="department-container col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/CSE-230x230.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">“The computer was born to solve problems that did not exist before.” </p>
        <a href="./cse.html" class="btn btn-primary">Go to CSE</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/CSE-AIML-230x230.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">“Artificial intelligence is growing up fast, as are robots whose facial expressions can elicit empathy and make your mirror neurons quiver.”</p>
        <a href="./cse.html" class="btn btn-primary">Go to CSM</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/CSE-DS-1-230x230.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">“Doesn't matter how much data you have, it's whether you use it successfully that counts.”</p>
        <a href="./cse.html" class="btn btn-primary">Go to CSD</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/CSE-IoT-230x230.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">“If you think that the internet has changed your life, think again. The Internet of Things is about to change it all over again!” </p>
        <a href="./cse.html" class="btn btn-primary">Go to CSO</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/EEE-230x230.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">“No resistance can drop our potential.” </p>
        <a href="./cse.html" class="btn btn-primary">Go to EEE</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/ECE-230x230.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">“The fantastic advances in the field of electronic communication constitute a greater danger to the privacy of the individual.” 
</p>
        <a href="./cse.html" class="btn btn-primary">Go to ECE</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/IT-230x230.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text"> “In information technology, money is not the issue. Willingness to implement and execute is the issue.” </p>
        <a href="./cse.html" class="btn btn-primary">Go to CS-IT</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/MECH-230x230.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">"There are many good mechanical engineers; there are also many good businessmen; but the two are rarely combined in one person."</p>
        <a href="./cse.html" class="btn btn-primary">Go to MECH</a>
      </div>
    </div>

    <div class="card grid-item" style="width: 18rem;">
      <img src="../images/CIVIL-230x230.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text"> “There are two types of engineers: those who create plans and those who build bridges.”</p>
        <a href="./cse.html" class="btn btn-primary">Go to CIVIL</a>
      </div>
    </div>
  </div>
  <!-- department cards ending -->

  <footer class="footer-class">
    Copyright &#169; Ace Connect
  </footer>
  `
}

if(!sessionStorage.getItem('loggedIn')){
  window.location.href = '../login.html';
}
