import { CloseIcon } from './CloseIcon'

type ModalType = 'info' | 'dialog'

interface ModalProps {
  onClose?: () => void
  children: React.ReactNode
  modalType?: ModalType
}

const modalStyles = {
  info: {
    width: 'w-[50rem]',
    shadow: 'shadow-small',
    paddingVertical: 'py-[3.25rem]',
  },
  dialog: {
    width: 'w-auto',
    shadow: 'shadow-medium',
    paddingVertical: 'py-12',
  },
}

export function Modal({ onClose, children, modalType = 'info' }: ModalProps) {
  const { width, shadow, paddingVertical } = modalStyles[modalType]

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20">
      <div className={`relative ${width} rounded-2xl bg-white ${shadow} overflow-hidden`}>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-1 top-1 z-50 flex items-center justify-center p-3 text-black"
          >
            <CloseIcon />
          </button>
        )}
        <div className={`max-h-[90vh] overflow-y-auto px-12 md:px-16 ${paddingVertical}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
