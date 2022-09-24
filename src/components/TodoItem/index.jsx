import React from 'react'
import {
  IoIosRemoveCircleOutline,
  IoIosCheckboxOutline,
  IoIosCheckbox,
} from 'react-icons/io'
import * as S from './style'

const TodoItem = ({ todo, remove, onToggle, style }) => {
  const { text, checked, id } = todo
  return (
    <S.Virtualized style={style}>
      <S.TodoItem>
        {checked ? (
          <S.CheckBox onClick={() => onToggle(id)}>
            <IoIosCheckbox />
            <S.Text
              style={{ textDecoration: 'line-through', color: '#adb5bd' }}
            >
              {text}
            </S.Text>
          </S.CheckBox>
        ) : (
          <S.CheckBox onClick={() => onToggle(id)}>
            <IoIosCheckboxOutline />
            <S.Text>{text}</S.Text>
          </S.CheckBox>
        )}
        <S.Remove>
          <IoIosRemoveCircleOutline
            onClick={() => {
              remove(id)
            }}
          />
        </S.Remove>
      </S.TodoItem>
    </S.Virtualized>
  )
}

export default React.memo(TodoItem)
