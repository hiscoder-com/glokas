export function Modal({
  closeModal,
  children,
}: {
  closeModal: () => void
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20">
      <div className="relative overflow-hidden rounded-2xl shadow-medium md:m-6">
        <button onClick={closeModal} className="absolute right-5 top-5">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6.5L18 18.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6.5L6 18.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="max-h-[90vh] overflow-y-auto rounded-2xl">{children}</div>
      </div>
    </div>
  )
}
