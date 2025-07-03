import styled from "styled-components";

export const ContactWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme["blue-300"]};
  overflow: hidden;
`;
export const ContactContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 200px;
  max-width: 1366px;
  margin-inline: auto;
  z-index: 10;

  @media screen AND (max-width: 680px) {
    padding: 80px 20px;
  }
`;
export const FormWrapper = styled.div`
  display: grid;
  grid-template: "animation form" 1fr / 50%;

  z-index: 10;

  @media screen AND (max-width: 680px) {
    grid-template:
      "animation" 165px
      "form" 1fr / 100%;

    gap: 2rem;
  }
`;
export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 30rem;
  background: repeating-conic-gradient(
    from var(--a),
    ${({ theme }) => theme["blue-300"]} 0%,
    ${({ theme }) => theme["blue-300"]} 10%,
    transparent 10%,
    transparent 50%
  );
  padding: 60px;
  align-self: end;
  grid-area: form;
  animation: formAnimation 6s linear infinite;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-conic-gradient(
      from var(--a),
      ${({ theme }) => theme["blue-300"]} 0%,
      ${({ theme }) => theme["blue-300"]} 10%,
      transparent 10%,
      transparent 50%
    );
    animation: formAnimation 6s linear infinite;
    animation-delay: -1.5s;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    border: 20px solid ${({ theme }) => theme["gray-600"]};
    background: ${({ theme }) => theme["gray-700"]};
  }

  @property --a {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }
  @keyframes formAnimation {
    0% {
      --a: 0deg;
    }
    100% {
      --a: 360deg;
    }
  }
`;
export const Form = styled.form`
  position: relative;
  z-index: 10;
`;
export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;

  & input,
  & textarea {
    width: 100%;
    padding: 5px 0;
    font-size: 0.75rem;
    margin: 10px 0;
    border: none;
    background: transparent;
    border-bottom: 2px solid #01dbc2;
    color: #fff;
    outline: none;
    resize: none;
  }

  & input:focus ~ span,
  & textarea:focus ~ span,
  & input:valid ~ span,
  & textarea:valid ~ span {
    color: #01dbc2;
    font-size: 0.9em;
    transform: translateY(-24px);
  }

  & span {
    position: absolute;
    left: 0;
    pointer-events: none;
    padding-block: 5px;
    margin-block: 10px;
    font-size: 1.1em;
    color: #fff;
    transition: 0.5s;
  }

  & input[type="submit"] {
    width: 100%;
    background: #01dbc2;
    color: #222;
    border: none;
    cursor: pointer;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: animation;
  z-index: 10;
`;
export const LabelSend = styled.label`
  --hue: 30deg;
  position: relative;
  width: 10rem;
  height: 10rem;
  perspective: 66rem;
  transform-style: preserve-3d;

  & *,
  & *::before,
  & *::after {
    transition: all 1s;
  }
`;
export const Rotate = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
`;
export const Move = styled.div`
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;

  & div {
    position: absolute;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;

    &::before,
    &::after {
      content: "Contato";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: hsl(var(--hue), 70%, 75%);
      font-size: 2.5rem;
      font-weight: 700;
      color: rgba(6, 12, 33, 0.8);
    }
  }
`;
export const PartLeft = styled.div`
  &::before {
    transform-origin: 50% 25%;
    clip-path: polygon(0 0, 100% 0, 100% 1px, 0 calc(50% + 1px));
  }

  &::after {
    clip-path: polygon(0 50%, 100% 0, 100% 1px, 1px 100%, 0% 100%);
  }
`;
export const PartRight = styled.div`
  &::before {
    clip-path: polygon(
      0 100%,
      100% 0,
      100% 1px,
      calc(50% + 1px) 100%,
      50% 100%
    );
  }

  &::after {
    transform-origin: 75% 50%;
    clip-path: polygon(100% 0, 50% 100%, 100% 100%);
  }
`;
export const InputSend = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked {
    & + ${Rotate} {
      transform: rotate3d(1, -0.2, 0.2, 65deg);

      ${Move} {
        animation: fly 3s cubic-bezier(0.72, -0.23, 0.35, 1.03) 1s both;
      }
      @keyframes fly {
        0% {
          transform: translate3d(0, 0, 0rem);
        }
        50% {
          transform: translate3d(400rem, -400rem, 0rem);
        }
        51% {
          transform: translate3d(-100rem, 100rem, 0rem);
        }
        100% {
          transform: translate3d(0, 0, 0rem);
        }
      }

      ${PartLeft} {
        transform: rotate3d(-1, 1, 0, 60deg);

        &::before {
          transform: rotate3d(-1, 0.5, 0, -60deg);
        }

        &::after {
          background-color: hsl(var(--hue), 50%, 70%);
        }
      }

      ${PartRight} {
        transform: rotate3d(-1, 1, 0, -60deg);

        &::after {
          transform: rotate3d(-0.25, 0.5, 0, 100deg);
        }

        &::before {
          background-color: hsl(var(--hue), 40%, 60%);
        }
      }
    }
  }
`;

export const Wave = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme["blue-300"]};

  & span {
    position: absolute;
    width: 325vh;
    height: 325vh;
    bottom: -1616px;
    left: 50%;
    transform: translate(-50%, -75%);
    background: ${({ theme }) => theme["black-100"]};

    @media screen AND (max-width: 1366px) {
      bottom: -930px;
    }

    @media screen AND (max-width: 680px) {
      width: 100vh;
      height: 100vh;
      top: -265px;
    }
  }

  & span:nth-child(1) {
    animation: animateWave 5s linear infinite;
    border-radius: 45%;
    background: rgba(6, 12, 33, 1);
  }
  & span:nth-child(2) {
    animation: animateWave 10s linear infinite;
    border-radius: 40%;
    background: rgba(6, 12, 33, 0.5);
  }
  & span:nth-child(3) {
    animation: animateWave 15s linear infinite;
    border-radius: 42.5%;
    background: rgba(6, 12, 33, 0.5);
  }
  @keyframes animateWave {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;
