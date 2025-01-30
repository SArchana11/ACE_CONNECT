const noOfStudents = 70;

const btnContainerEl = document.querySelector('.btn-container');
const academicNumber = "22AG1A0"
const academicNumberLe = "23AG1A0"

function buttonRender() {
  for (let i = 0; i < noOfStudents; i++) {
    if (i < 64) {
      btnContainerEl.innerHTML += `<a class="no-decoration" href="profile.html"><button type="button" class="btn btn-outline-primary cse-button">${academicNumber + (501 + i)}</button></a>`;
    } else {
      btnContainerEl.innerHTML += `<a class="no-decoration" href="profile.html"><button type="button" class="btn btn-outline-primary cse-button">${academicNumberLe + (501 + (i - 64))}</button></a>`;
    }
  }
}

buttonRender();
