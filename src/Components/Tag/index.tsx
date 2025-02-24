import { TagContainer } from "./styles"

type Props = {
  children: JSX.Element
}

export default function Tag({children}:Props) {
  return (
    <TagContainer>
      {children}
    </TagContainer>
  )
}
