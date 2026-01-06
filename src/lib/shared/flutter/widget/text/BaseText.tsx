// components/Text.tsx
import React, { ReactNode, useRef } from 'react'
import { TextStyle } from './BaseTextStyle'
import { TextAlign, textAlignClassMap, TextOverflow } from './BaseTextEnum'

export interface BaseTextProps {
  id?: string;
  children?: ReactNode;
  style?: TextStyle;
  textAlign?: TextAlign;
  overflow?: TextOverflow;
  maxLines?: number;
  className?: string;
  hidden?: boolean;
}

const BaseText = ({
  id,
  children,
  style,
  textAlign = TextAlign.left,
  overflow = TextOverflow.visible,
  maxLines,
  className,
  hidden = false,
}: BaseTextProps) => {
  const textIdRef = useRef(
    id ?? `text-${Math.random().toString(36).slice(2)}`
  );

  const resolvedStyle = style ?? new TextStyle();

  const overflowStyle: React.CSSProperties | undefined =
    maxLines !== undefined
      ? {
          display: "-webkit-box",
          WebkitLineClamp: maxLines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow:
            overflow === TextOverflow.ellipsis ? "ellipsis" : "clip",
        }
      : overflow === TextOverflow.clip
      ? { overflow: "hidden" }
      : undefined;

  return (
    <span
      id={textIdRef.current}
      hidden={hidden}
      className={[
        "block min-w-0",
        textAlignClassMap[textAlign],
        resolvedStyle.toTailwind(),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...resolvedStyle.toInlineStyle(),
        ...overflowStyle,
      }}
    >
      {children}
    </span>
  );
};

export default React.memo(BaseText);
