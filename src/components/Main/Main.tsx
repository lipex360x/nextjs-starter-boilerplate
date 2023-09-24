import * as S from './Main.styles'

export const Main: React.FC<{ title?: string }> = ({
  title = 'NextJS Boilerplate Starter',
}) => {
  return (
    <S.Wrapper>
      <h2 className="text-2xl">{title}</h2>
    </S.Wrapper>
  )
}
