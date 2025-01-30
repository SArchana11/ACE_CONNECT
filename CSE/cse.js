import {spinnerRender} from '../utilities/spinner.js'

const thisYear = new Date().getFullYear();
const startYear = 2007;
const btnContainerEl = document.querySelector('.btn-container');

const batches = thisYear - startYear;

function batchButtonsRender(){
  setTimeout(() =>{
    spinnerRender(btnContainerEl);    
    setTimeout(() =>{
      btnContainerEl.innerHTML=``;
      batchButtonRender(btnContainerEl);
    },2000);
  },3000);
}

function batchButtonRender(btnContainerEl) {
  for (let i = 0; i < batches; i++) {
    btnContainerEl.innerHTML += `
  <a class="no-decoration" href="sections.html"><button type="button" class="btn btn-outline-primary cse-button">${startYear + i} - ${startYear + (i + 4)}</button></a>
  `
  }
}

batchButtonsRender();
