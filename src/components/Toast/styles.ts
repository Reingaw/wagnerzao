import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${(props) => props.theme["black-600"]};
  color: ${(props) => props.theme["gray-100"]};
`;

export const ToastContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95em;

  background: #333;
  color: white;
  padding: 16px 25px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  min-width: 250px;
  animation: slideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;

  @keyframes slideIn {
    from {
      transform: translateX(120%);
    }
    to {
      transform: translateX(0);
    }
  }

  &.hide {
    animation: slideOut 0.5s ease-in forwards;
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(120%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }

  &[data-type="success"] {
    border-left: 5px solid #a6e22e;
  }

  &[data-type="error"] {
    border-left: 5px solid #f92672;
  }

  &[data-type="info"] {
    border-left: 5px solid #66d9ef;
  }

  & span svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const ToastProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  animation: progress 5s linear forwards;

  @keyframes progress {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }

  ${ToastContent}:hover & {
    animation-play-state: paused;
  }

  ${ToastContent}[data-type="success"] & {
    background: #a6e22e;
  }

  ${ToastContent}[data-type="error"] & {
    background: #f92672;
  }

  ${ToastContent}[data-type="info"] & {
    background: #66d9ef;
  }
`;
