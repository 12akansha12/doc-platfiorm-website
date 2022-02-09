document.getElementById('input-file')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
    var x = document.getElementById("input-file");
    //var txt = "";

  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('content-target'),
      input.files[0])
      
    }
 }
 //document.getElementById("filename").innerHTML = txt;

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}