import { ButtonContainer, ButtonLink } from "./styles"

type Props = {
  children?: string
  to?: string
  title?: string
  type?:'button' | 'link'
  Onclick?:  () => void
}

export function Button({children,  to, title, type, Onclick}:Props) {
    if(type === 'button'){
      return(
        <ButtonContainer title={title} type="button" onClick={Onclick}>
          {children}
        </ButtonContainer>
      )
    }
    return(
    <ButtonLink to={to as string} title={title} type="link">
    {children}
    </ButtonLink>
    )

}
