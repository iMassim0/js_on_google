function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Pop-up will arrive bich !');
  await sleep(10000);
  alert("Hey, pssssst, viens ici !!!! \n https://www.youtube.com/watch?v=3bHUQy6MugE");
}

demo();

function zip() {
    document.querySelector(".hide").className = "container";
    document.querySelector(".alert").className = "hide";
}

function saisie() {
  currentText = document.querySelector('input').value;

}
function redirect() {
  var texto = currentText.replace(/ /g, '+');
  window.location.assign("https://www.google.fr/#q=" + texto );
  }
