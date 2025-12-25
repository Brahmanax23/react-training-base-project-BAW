import React, { ReactNode, useRef } from 'react'

type MainAxis =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'

type CrossAxis =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'

type BaseColumnProps = {
  id?: string
  children?: ReactNode
  mainAxis?: MainAxis
  crossAxis?: CrossAxis
  gap?: number
  className?: string
  style?: React.CSSProperties
  hidden?: boolean
}

const mainAxisClassMap: Record<MainAxis, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const crossAxisClassMap: Record<CrossAxis, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const BaseColumn = ({
  id,
  children,
  mainAxis = 'start',
  crossAxis = 'start',
  gap,
  className = '',
  style,
  hidden = false,
}: BaseColumnProps) => {
  // Stable ID (does not change on re-render)
  const columnIdRef = useRef(
    id ?? `column-${Math.random().toString(36).slice(2)}`
  )

  return (
    <div
      id={columnIdRef.current}
      hidden={hidden}
      className={[
        'flex flex-col',
        mainAxisClassMap[mainAxis],
        crossAxisClassMap[crossAxis],
        className,
      ].join(' ')}
      style={{
        ...style,
        ...(gap !== undefined ? { gap } : {}),
      }}
    >
      {children}
    </div>
  )
}

export default React.memo(BaseColumn)
