import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

interface CustomSelectSearchProps {
  languages: string[]
  placeholder: string
}

const CustomSelectSearch = ({ languages, placeholder }: CustomSelectSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language))
    } else {
      setSelectedLanguages([...selectedLanguages, language])
    }
  }

  const handleRemoveLanguage = (language: string) => {
    setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language))
  }

  const filteredLanguages = languages.filter((lang) =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
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
        className={`relative flex h-auto cursor-pointer flex-wrap items-center gap-2 rounded-medium border border-black-100 p-[8px_16px] transition-opacity`}
        onClick={toggleDropdown}
      >
        {selectedLanguages.length > 0 ? (
          selectedLanguages.map((language) => (
            <div
              key={language}
              className="flex items-center rounded-medium bg-tertiary-100 px-2 py-1 text-sm text-black-950"
            >
              {language}
              <button
                className="ml-2"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveLanguage(language)
                }}
              >
                <Image src="/icons/close.svg" alt="Remove" width={16} height={16} />
              </button>
            </div>
          ))
        ) : (
          <span className="text-sm text-black-950">Select languages</span>
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
        <div className="bg-black-00 absolute z-10 mt-1 w-full rounded-medium border border-black-100 shadow-lg">
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
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((language) => (
                <label key={language} className="flex cursor-pointer items-center p-2">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedLanguages.includes(language)}
                    onChange={() => handleSelectLanguage(language)}
                  />
                  <span
                    className={`relative mr-2 inline-block h-4 w-4 rounded border border-gray-300 ${
                      selectedLanguages.includes(language)
                        ? 'bg-secondary-600'
                        : 'bg-black-00'
                    }`}
                  >
                    {selectedLanguages.includes(language) && (
                      <svg
                        className="text-black-00 absolute left-0 top-0 h-full w-full"
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
                  {language}
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
