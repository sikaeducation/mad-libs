function displayMadLibs(){
  const firstName = document.querySelector("#first-name-input").value
  document.querySelector("#first-name-output").textContent = firstName

  const lastName = document.querySelector("#last-name-input").value
  document.querySelector("#last-name-output").textContent = lastName

  const illness = document.querySelector("#illness-input").value
  document.querySelector("#illness-output").textContent = illness

  const pluralNames = document.querySelector("#plural-names-input").value
  document.querySelector("#plural-names-output").textContent = pluralNames

  const adjective1 = document.querySelector("#adjective-1-input").value
  document.querySelector("#adjective-1-output").textContent = adjective1

  const adjective2 = document.querySelector("#adjective-2-input").value
  document.querySelector("#adjective-2-output").textContent = adjective2

  const sillyWord = document.querySelector("#silly-word-input").value
  document.querySelector("#silly-word-output").textContent = sillyWord

  const place = document.querySelector("#place-input").value
  document.querySelector("#place-output").textContent = place

  const number = document.querySelector("#number-input").value
  document.querySelector("#number-output").textContent = number

  const adjective3 = document.querySelector("#adjective-3-input").value
  document.querySelector("#adjective-3-output").textContent = adjective3
}
