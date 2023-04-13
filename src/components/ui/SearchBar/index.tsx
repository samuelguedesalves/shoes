import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRef } from 'react';

type SearchBarProps = {
  placeholder?: string;
  value?: string,
  onChange?: (value: string) => void,
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className='w-fit p-4 flex items-center bg-zinc-200 rounded focus-within:ring-4 focus-within:ring-violet-400'>
      <input
        className='text-gray-800 bg-transparent border-none focus:outline-none'
        type='text'
        placeholder={placeholder ?? 'Ex: Nike Air Force'}
        value={value}
        onChange={event => onChange && onChange(event.target.value)}
        ref={ref}
      />

      <button className='text-gray-800'>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  )
}