import Image from 'next/image'

export function Modal({
  closeModal,
  children,
}: {
  closeModal: () => void
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white px-16 pb-16 pt-[52px]">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <Image
            src="/icons/close.svg"
            alt="Close"
            width={24}
            height={24}
            priority={true}
          />
        </button>
        {children}
      </div>
    </div>
  )
}
