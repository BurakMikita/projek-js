import './styles.css'
import {crateModal, isValid} from "./utils";
import {Question} from './Question'
import {authWithEmailAndPassword, getAuthForm} from "./auth";

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const modalBtn = document.querySelector('#modal-btn')

const submitBtn = form.querySelector('#submit')

window.addEventListener('load', Question.renderList)

modalBtn.addEventListener('click',openModal)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input',()=> {
    submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler  (event)  {
    event.preventDefault()
    if(isValid(input.value)){
        const question = {
            text: input.value.trim(),
            data: new Date().toJSON()
        }
        submitBtn.disabled = true
        Question.create(question).then(()=>{
            input.value = ''
            input.className= ''
            submitBtn.disabled = false
        })




    }
}



function openModal(){
    crateModal('Авторизация',getAuthForm())
    document.getElementById('auth-form').addEventListener('submit',authForHandler, {once:true})
}

function authForHandler (event){
    event.preventDefault()

  const btn = event.target.querySelector('button')
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value


    btn.disabled = true
    authWithEmailAndPassword(email,password).then(Question.fetch)
    .then(renderModalAfterAuth).then(()=>btn.disabled = false)


    function renderModalAfterAuth(content){
      if(typeof content==='string'){
         crateModal('Ошибка', content)
      }
      else {
          crateModal('Списик вопросов',Question.listToHTML(content))
      }
    }
}

