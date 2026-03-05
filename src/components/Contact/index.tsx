import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(
        'service_gc4ohfl',
        'template_18xnn6j',
        form.current,
        'IKkBLY7egZPWRzxpS'
      )
      .then(() => {
        toast.success('Mensagem enviada! Retornarei em breve. 🚀')
        form.current?.reset()
      })
      .catch((error) => {
        console.error('Erro:', error)
        toast.error('Ocorreu um erro. Tente via WhatsApp!')
      })
  }

  return (
    <S.ContactSection id="contact">
      <div className="container">
        <S.Header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Entre em Contato</h2>
          <p>Seja para um projeto, uma proposta ou apenas um café virtual, estou à disposição.</p>
        </S.Header>

        <S.ContactGrid>
          {/* Lado 1: Informações de Contato Rápidas */}
          <S.ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <i className="ri-whatsapp-line"></i>
              <div>
                <h5>WhatsApp</h5>
                <a href="https://wa.me/5582996124145" target="_blank" rel="noreferrer">
                  (82) 99612-4145
                </a>
              </div>
            </div>

            <div className="info-card">
              <i className="ri-mail-send-line"></i>
              <div>
                <h5>E-mail</h5>
                <a href="mailto:kauatorresfranca2@gmail.com">kauatorresfranca2@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <i className="ri-linkedin-box-line"></i>
              <div>
                <h5>LinkedIn</h5>
                <a href="https://linkedin.com/in/kauatorres" target="_blank" rel="noreferrer">
                  in/kauatorres
                </a>
              </div>
            </div>
          </S.ContactInfo>

          {/* Lado 2: Formulário */}
          <S.FormWrapper
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <S.Form ref={form} onSubmit={sendEmail}>
              <div className="input-group">
                <input type="text" name="name" placeholder=" " required />
                <label>Seu Nome</label>
              </div>

              <div className="input-group">
                <input type="email" name="email" placeholder=" " required />
                <label>Seu E-mail</label>
              </div>

              <div className="input-group">
                <textarea name="message" placeholder=" " required></textarea>
                <label>Como posso te ajudar?</label>
              </div>

              <S.SubmitButton type="submit">
                <span>Enviar Mensagem</span>
                <i className="ri-send-plane-fill"></i>
              </S.SubmitButton>
            </S.Form>
          </S.FormWrapper>
        </S.ContactGrid>

        <ToastContainer theme="colored" position="bottom-right" />
      </div>
    </S.ContactSection>
  )
}

export default Contact
