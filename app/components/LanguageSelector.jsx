import { useState } from 'react'

import { CustomButton } from './CustomButton'
import CustomSelectSearch from './CustomSelectSearch'

const LanguageSelector = ({ languages }) => {
  const [hasSelectedLanguages, setHasSelectedLanguages] = useState(false)

  const handleLanguageSelectChange = (selectedItems) => {
    setHasSelectedLanguages(selectedItems.length > 0)
  }

  return (
    <div className="flex w-full items-start justify-between">
      <div className="flex items-center gap-4">
        <CustomSelectSearch
          items={languages}
          placeholder="Select a language"
          displayKey="name"
          onSelectionChange={handleLanguageSelectChange}
        />
        <CustomButton color="primary" size="lg" isDisabled={!hasSelectedLanguages}>
          Translate
        </CustomButton>
      </div>
      <div>
        <CustomButton color="primary" variant="bordered" size="lg" isDisabled>
          Save
        </CustomButton>
      </div>
    </div>
  )
}

export default LanguageSelector
