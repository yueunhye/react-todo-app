import { useCallback, useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import * as S from './style'

const TodoInsert = ({ onInsert }) => {
  const [value, setValues] = useState('')

  const handleChange = useCallback(e => {
    setValues(e.target.value)
  }, [])

  //submit 이벤트는 브라우저의 새로고침을 발생시킴
  //이를 방지하기 위해 e.preventDefault()를 적용시킴
  const handleSubmit = useCallback(
    e => {
      onInsert(value)
      setValues('')
      e.preventDefault()
    },
    [onInsert, value],
  )
  return (
    // form과 submit 이벤트를 사용한 이유?
    // submit은 Enter를 눌렀을 때도 onKeyPress를 따로 설정안해줘도 발생하기때문에
    <S.From>
      <S.Input
        placeholder='할 일을 입력해 주세요'
        onChange={handleChange}
        value={value}
      />
      <S.Button type='submit' onClick={handleSubmit}>
        <IoAddSharp />
      </S.Button>
    </S.From>
  )
}

export default TodoInsert
