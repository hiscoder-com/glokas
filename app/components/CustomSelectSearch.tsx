import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

interface CustomSelectSearchProps<T> {
  items: T[]
  placeholder: string
  displayKey: keyof T
  onSelectionChange?: (selectedItems: T[]) => void
}

const CustomSelectSearch = <T extends Record<string, React.ReactNode>>({
  items,
  placeholder,
  displayKey,
  onSelectionChange,
}: CustomSelectSearchProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<T[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectItem = (item: T) => {
    let newSelectedItems
    if (selectedItems.includes(item)) {
      newSelectedItems = selectedItems.filter((i) => i !== item)
    } else {
      newSelectedItems = [...selectedItems, item]
    }
    setSelectedItems(newSelectedItems)
    onSelectionChange?.(newSelectedItems)
  }

  const handleRemoveItem = (item: T) => {
    const newSelectedItems = selectedItems.filter((i) => i !== item)
    setSelectedItems(newSelectedItems)
    onSelectionChange?.(newSelectedItems)
  }

  const filteredItems = items.filter((item) =>
    String(item[displayKey]).toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className="relative w-[456px]" ref={dropdownRef}>
      <div
        className={`relative flex h-[48px] cursor-pointer flex-wrap items-center gap-2 rounded-medium border border-black-100 p-[8px_16px] transition-opacity`}
        onClick={toggleDropdown}
      >
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (
            <div
              key={String(item[displayKey])}
              className="flex items-center rounded-medium bg-tertiary-100 px-2 py-1 text-sm text-black-950"
            >
              {item[displayKey]}
              <button
                className="ml-2"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveItem(item)
                }}
              >
                <Image src="/icons/close.svg" alt="Remove" width={16} height={16} />
              </button>
            </div>
          ))
        ) : (
          <span className="text-sm text-black-950">{placeholder}</span>
        )}

        <div className="absolute right-2 top-3">
          <Image
            src={isOpen ? '/icons/up.svg' : '/icons/down.svg'}
            alt="Dropdown icon"
            width={18}
            height={18}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-medium border border-black-100 bg-white shadow-lg">
          <div className="relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
              <Image src="/icons/search.svg" alt="Search" width={18} height={18} />
            </div>
            <input
              type="text"
              className="w-full border-b border-black-100 p-2 pl-10"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="max-h-48 overflow-y-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <label
                  key={String(item[displayKey])}
                  className="flex cursor-pointer items-center p-2"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleSelectItem(item)}
                  />
                  <span
                    className={`relative mr-2 inline-block h-4 w-4 rounded border border-gray-300 ${
                      selectedItems.includes(item) ? 'bg-secondary-600' : 'bg-white'
                    }`}
                  >
                    {selectedItems.includes(item) && (
                      <svg
                        className="absolute left-0 top-0 h-full w-full text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  {item[displayKey]}
                </label>
              ))
            ) : (
              <div className="p-2 text-black-500">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomSelectSearch
