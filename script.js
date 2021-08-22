fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
      console.log(data)
      document.getElementById("image").innerHTML = `<img src = "${data.message}" /img>`
      let text = data.message.split("/")
      document.getElementById("breed").textContent = text[4].toUpperCase()
  })
