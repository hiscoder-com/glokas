import { CustomButton } from './CustomButton'
import CustomSelectSearch from './CustomSelectSearch'

const LanguageSelector = ({ languages }) => {
  return (
    <div className="flex w-full items-start justify-between">
      <div className="flex items-center gap-4">
        <CustomSelectSearch
          items={languages}
          placeholder="Select a language"
          displayKey="name"
        />
        <CustomButton color="secondary" size="lg">
          Translate
        </CustomButton>
      </div>
      <div>
        <CustomButton color="primary" variant="bordered" size="lg">
          Save
        </CustomButton>
      </div>
    </div>
  )
}

export default LanguageSelector
