let txtEmail = document.getElementById('txtEmail')
let msg = document.getElementById('newsletterFeedback')
function cadastrarEmail(){
  let email = txtEmail.value
  msg.innerHTML = `Email ${email} cadastrado com sucesso`
}
console.log(cadastrarEmail())