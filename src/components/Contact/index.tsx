import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'
import { colors } from '../../styles'

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    // Adiciona automaticamente o campo 'time'
    const timeField = document.createElement('input')
    timeField.setAttribute('type', 'hidden')
    timeField.setAttribute('name', 'time')
    timeField.setAttribute('value', new Date().toLocaleString())
    form.current.appendChild(timeField)

    emailjs
      .sendForm(
        'service_gc4ohfl',       // Service ID
        'template_18xnn6j',      // Template ID
        form.current,            // Form reference
        'IKkBLY7egZPWRzxpS'      // Public Key
      )
      .then(() => {
        toast.success('Mensagem enviada com sucesso! 🚀')
        form.current?.reset()
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error)
        toast.error('Erro ao enviar a mensagem. Tente novamente.')
      })
  }

  return (
    <S.Contact id="contact">
      <div className="container">
        <h3><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={colors.primary}
                    className="bi bi-diamond"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                  </svg>Contato</h3>
        <p>Fique à vontade para entrar em contato comigo. Será um prazer responder!</p>

        <S.Form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" name="name" placeholder=" " id="name" required />
            <label htmlFor="name">Nome</label>
          </div>

          <div>
            <input type="email" name="email" placeholder=" " id="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div>
            <textarea name="message" placeholder=" " id="message" required></textarea>
            <label htmlFor="message">Mensagem</label>
          </div>

          <button type="submit">Enviar</button>
        </S.Form>

        {/* Toast container */}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </S.Contact>
  )
}

export default Contact
