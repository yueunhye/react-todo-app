import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'

import { List } from 'react-virtualized'

const TodoList = ({ todos, remove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index]
      return (
        <TodoItem
          key={key}
          todo={todo}
          remove={remove}
          onToggle={onToggle}
          style={style}
        />
      )
    },
    [remove, onToggle, todos],
  )
  return (
    <List
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{
        outline: 'none',
        minHeight: '320px',
        maxHeight: '513px',
        overflowY: 'auto',
      }}
    />
  )
}

export default React.memo(TodoList)
