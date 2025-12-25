import React, { ReactNode, ChangeEvent } from 'react'

interface BaseInputProps {

  id?: string
  value?: string | number
  placeholder?: string
  className?: string
  type?: string
  prefix?: ReactNode
  disabled?: boolean
  autoFocus?: boolean
  required?: boolean
  name?: string
  isRead?: boolean
  validator?: (value: string) => string | undefined
  onChange?: (value: string) => void

}

const BaseInput: React.FC<BaseInputProps> = ({
    id,
    value,
    placeholder,
    className = '',
    type = 'text',
    prefix,
    disabled = false,
    autoFocus = false,
    isRead = false,
    validator,
    onChange,
    ...props
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value

        if (validator) {
            const validationError = validator(newValue)
            if (validationError) {
                // You can lift this to state if needed
                console.log(validationError)
            }
        }

        onChange?.(newValue)
    }

    return (
        <div className="flex min-w-0 items-center rounded-lg border border-gray-600 bg-transparent focus-within:border-cyan-400">
            {prefix && (
                <div className="pl-3 text-gray-400">
                    {prefix}
                </div>
            )}

            <input
                id={id}
                name={props.name}
                type={type}
                value={value}
                readOnly={isRead}
                disabled={disabled}
                autoFocus={autoFocus}
                placeholder={isRead && !value ? '' : placeholder}
                className={[
                    'h-12 w-full min-w-0 bg-transparent px-4 py-2',
                    'text-white placeholder-gray-400',
                    'focus:outline-none',
                    disabled ? 'cursor-not-allowed opacity-60' : '',
                    className,
                ].join(' ')}
                onChange={handleChange}
                {...props}
            />
        </div>
    )
}

export default React.memo(BaseInput)
