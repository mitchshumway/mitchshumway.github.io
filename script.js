function displayBio() {
    document.getElementById("bio").classList.add("box");
    let html = "";

    let title = "About Me"

    let bio = `I was born and raised in New Hampshire. I love skiing, hiking, running, and anything else that gets me outside. I graduated from Fordham University in 2016 with a degree in business. I moved to Boston soon after graduation with a job offer at a major law firm where I worked for about two years. The pandemic gave me an opportunity to step back for a moment and reflect on the direction I wanted my career to go in. I knew I wanted to learn something new and go in a different direction. I have always had an interest in technology, so I enrolled in a course with MITxPRO on the MERN stack, where I have been developing the skills to transition into a career in technology. Explore my portfolio here to see some of my ongoing projects.`

    let card = `<div class="card" style="width: 18rem;">
    <div class="card-body"> <img src="images/image.jpg" id="bioPic" class="small">
      <h5 class="card-title text">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><!--Card subtitle--></h6>
      <p class="card-text text">${bio}</p>
      <a href="index.html" class="card-link">Home</a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="card-link">Video</a>
    </div>
  </div>`

  /*function mobileOptimization {
      if(window.width > 500) {
          return;
      } else {
          let oldImg = document.getElementById("")
        }
  }*/

  html += card;
  document.getElementById("bio").innerHTML=html;
}