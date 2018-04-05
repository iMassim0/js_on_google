function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(3000);
  alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}

//demo();

function zip() {
    document.querySelector(".hide").className = ".container";
    document.querySelector(".alert").className = ".hide";
    // this.parentElement.style.display='none';
}
