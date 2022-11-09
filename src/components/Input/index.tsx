import { ErrorText, IconContainer, InputContainer, InputText } from './styled'
import { Controller } from 'react-hook-form'
import { InputProps } from './types'

export function Input({leftIcon, name, control, errorMessage, ...rest}: InputProps) {
  return (
    <>
    <InputContainer>

      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller 
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field}  {...rest} />}
      />
    </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  )
}
