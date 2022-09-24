import * as S from './style'

const TodoTemplate = ({ children }) => {
  return (
    <S.TodoTemplate>
      <S.appTitle>일정 관리</S.appTitle>
      <S.content>{children}</S.content>
    </S.TodoTemplate>
  )
}

export default TodoTemplate
