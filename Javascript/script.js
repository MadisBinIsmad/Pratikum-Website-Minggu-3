let form_tugas = document.getElementById("form_tugas");
let input_tugas = document.getElementById("input_tugas");
let list_tugas = document.getElementById("list_tugas");

let saved_tugas = [];

function renderTugas() {
  list_tugas.innerHTML = "";

  for (let i = 0; i < saved_tugas.length; i++) {
    let tugas_baru = document.createElement("li");
    tugas_baru.textContent = saved_tugas[i];
    list_tugas.appendChild(tugas_baru);
  }
}

form_tugas.addEventListener("submit", function (e) {
  e.preventDefault();

  saved_tugas.push(input_tugas.value);

  renderTugas();

  input_tugas.value = "";
});

// form_tugas.addEventListener('submit', function(e){
//     e.preventDefault();

//     if (input_tugas.ariaValueMax.trim() !== ''){
//         let tugas_baru = document.createElement('li');
//         tugas_baru.textContent = input_tugas.value
//         list_tugas.appendChild(tugas_baru);

//         input_tugas.value = '';
//     }
// });
