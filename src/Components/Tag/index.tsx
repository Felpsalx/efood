import { TagContainer } from "./styles"

type Props = {
  children: string
}

export default function Tag({children}:Props) {
  return (
    <TagContainer>
      {children}
    </TagContainer>
  )
}
