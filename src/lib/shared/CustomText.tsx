import React, { ReactNode, useRef } from 'react'

type TextAlign =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'

type FontWeight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'

type TextOverflow =
  | 'clip'
  | 'ellipsis'

type CustomTextProps = {
  id?: string
  children?: ReactNode
  size?: number
  color?: string
  weight?: FontWeight
  align?: TextAlign
  maxLines?: number
  overflow?: TextOverflow
  className?: string
  style?: React.CSSProperties
  hidden?: boolean
}

const fontWeightMap: Record<FontWeight, string> = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const textAlignMap: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

const CustomText = ({
  id,
  children,
  size = 14,
  color,
  weight = 'regular',
  align = 'left',
  maxLines,
  overflow = 'clip',
  className = '',
  style,
  hidden = false,
}: CustomTextProps) => {
  const textIdRef = useRef(
    id ?? `text-${Math.random().toString(36).slice(2)}`
  )

  return (
    <span
      id={textIdRef.current}
      hidden={hidden}
      className={[
        fontWeightMap[weight],
        textAlignMap[align],
        className,
      ].join(' ')}
      style={{
        fontSize: `${size}px`,
        color,
        ...(maxLines !== undefined
          ? {
              display: '-webkit-box',
              WebkitLineClamp: maxLines,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: overflow === 'ellipsis' ? 'ellipsis' : 'clip',
            }
          : {}),
        ...style,
      }}
    >
      {children}
    </span>
  )
}

export default React.memo(CustomText)
