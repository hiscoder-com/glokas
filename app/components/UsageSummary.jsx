const SummaryItem = ({ label, value }) => (
  <li className="flex items-center justify-between">
    <span className="text-xs font-medium text-primary-900">{label}</span>
    <span className="text-sm font-bold">{value}</span>
  </li>
)

const summaryData = [
  { label: 'Used', value: 267 },
  { label: 'Remaining', value: 49733 },
  { label: 'Days left', value: 23 },
]

export const UsageSummary = () => {
  return (
    <div className="w-full rounded-large bg-primary-200 px-3 py-3.5">
      <ul>
        {summaryData.map(({ label, value }, index) => (
          <SummaryItem key={index} label={label} value={value} />
        ))}
      </ul>
    </div>
  )
}
