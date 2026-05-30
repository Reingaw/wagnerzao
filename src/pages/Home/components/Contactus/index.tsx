import { useEffect, useState } from "react";
import { useLanguage } from "../../../../hooks/useLanguage";
import {
  ContactContainer,
  ContactWrapper,
  Form,
  FormContainer,
  FormWrapper,
  InputBox,
  AnimationContainer,
  InputSend,
  LabelSend,
  Move,
  PartLeft,
  PartRight,
  Rotate,
} from "./styles";

export function ContactUs() {
  const { language } = useLanguage();

  const [check, setCheck] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCheck(() => !check);
    }, 4000);
  }, [check]);

  return (
    <ContactWrapper>
      <ContactContainer>
        <FormWrapper>
          <AnimationContainer>
            <LabelSend htmlFor="send">
              <InputSend
                type="checkbox"
                name="send"
                id="send"
                checked={check}
                readOnly
              />
              <Rotate>
                <Move text={language === "pt-BR" ? "Contato" : "Contact"}>
                  <PartLeft></PartLeft>
                  <PartRight></PartRight>
                </Move>
              </Rotate>
            </LabelSend>
          </AnimationContainer>
          <FormContainer>
            <Form
              action="https://formsubmit.co/contato@wagnerzao.com"
              method="POST"
            >
              <h2>
                {language === "pt-BR" ? "Envie uma Mensagem" : "Send a Message"}
              </h2>
              <InputBox>
                <input type="text" name="name" required />
                <span>
                  {language === "pt-BR" ? "Nome Completo" : "Full Name"}
                </span>
              </InputBox>
              <InputBox>
                <input type="text" name="email" required />
                <span>Email</span>
              </InputBox>
              <InputBox>
                <textarea name="message" maxLength={106} required></textarea>
                <span>
                  {language === "pt-BR"
                    ? "Digite a Mensagem..."
                    : "Enter your message..."}
                </span>
              </InputBox>
              <InputBox>
                <input
                  type="submit"
                  name="send"
                  value={language === "pt-BR" ? "Enviar" : "Send"}
                  required
                />
              </InputBox>
              <input
                type="hidden"
                name="_subject"
                value="Contato do Site"
              ></input>
              <input
                type="hidden"
                name="_next"
                value="https://www.wagnerzao.com/"
              ></input>
            </Form>
          </FormContainer>
        </FormWrapper>
      </ContactContainer>
    </ContactWrapper>
  );
}
