import { useEffect, useState } from "react";
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
  Wave,
} from "./styles";

export function ContactUs() {
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
                <Move>
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
              <h2>Envie uma Mensagem</h2>
              <InputBox>
                <input type="text" name="name" required />
                <span>Nome Completo</span>
              </InputBox>
              <InputBox>
                <input type="text" name="email" required />
                <span>Email</span>
              </InputBox>
              <InputBox>
                <textarea name="message" maxLength={106} required></textarea>
                <span>Digite a Mensagem...</span>
              </InputBox>
              <InputBox>
                <input type="submit" name="send" value="Enviar" required />
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
      <Wave>
        <span></span>
        <span></span>
        <span></span>
      </Wave>
    </ContactWrapper>
  );
}
