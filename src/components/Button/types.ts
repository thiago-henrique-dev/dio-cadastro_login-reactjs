interface ButtonProps {
  onClick: () => void;
}

interface IButton {
  title: string
  rest?: HTMLButtonElement | ButtonProps
  type?: string
}


export default IButton