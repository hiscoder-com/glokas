export function Modal({
  closeModal,
  children,
}: {
  closeModal: () => void
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/20">
      <div className={`relative my-6 max-h-[90vh] rounded-2xl shadow-medium`}>
        <button
          onClick={closeModal}
          className={`absolute right-5 top-5 h-11 w-11 items-center justify-center p-3 text-black`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L8 8M14 14L8 8M8 8L14 2L2 14"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}
