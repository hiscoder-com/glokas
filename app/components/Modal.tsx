import Image from 'next/image'

export function Modal({
  closeModal,
  children,
}: {
  closeModal: () => void
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/20">
      <div className="relative my-6 max-h-[90vh] w-[800px] rounded-2xl bg-white shadow-small">
        <button
          onClick={closeModal}
          className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center p-3 text-black"
        >
          <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
        </button>
        <div className="max-h-[calc(90vh-3rem)] overflow-y-auto px-16 py-[52px]">
          {children}
        </div>
      </div>
    </div>
  )
}
