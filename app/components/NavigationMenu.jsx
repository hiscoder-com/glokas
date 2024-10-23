'use client'

import { useEffect, useMemo, useState } from 'react'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Accordion, AccordionItem, Image } from '@nextui-org/react'

const MenuItem = ({ href, iconSrc, label, active }) => (
  <li className={`rounded-medium ${active ? 'bg-primary-200' : ''}`}>
    <Link href={href} className="flex gap-3 p-2 text-sm font-medium text-black-950">
      <Image src={iconSrc} alt={label} width={18} height={18} />
      <span>{label}</span>
    </Link>
  </li>
)

export const NavigationMenu = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState('')
  const [isMenuReady, setIsMenuReady] = useState(false)
  useEffect(() => {
    const page = searchParams.get('page')
    setCurrentPage(page || '')
    setIsMenuReady(true)
  }, [searchParams])

  const isYoutubePage = useMemo(() => currentPage === 'youtube', [currentPage])
  const isAllVideoPage = useMemo(() => currentPage === 'allvideo', [currentPage])

  const handleYoutubeClick = () => {
    if (!isYoutubePage) {
      router.push('?page=youtube')
    }
  }
  const handleAllVideoClick = () => {
    if (!isAllVideoPage) {
      router.push('?page=allvideo')
    }
  }
  return (
    <>
      {isMenuReady && (
        <ul className="flex flex-col text-sm">
          <li>
            <Accordion
              className="px-0"
              itemClasses={{
                base: 'data-[open=true]:bg-primary-100 rounded-medium px-0 py-2',
              }}
              defaultExpandedKeys={isYoutubePage || isAllVideoPage ? ['1'] : []}
            >
              <AccordionItem
                classNames={{
                  indicator:
                    'text-lg text-black-950 -rotate-90 data-[open=true]:rotate-90',
                  trigger: `gap-1 w-full rounded-medium data-[open=true]:rounded-none p-2 ${isYoutubePage ? 'bg-primary-200' : ''}`,
                  content: `py-0 ${isAllVideoPage ? 'bg-primary-200' : ''}`,
                }}
                key="1"
                startContent={
                  <div
                    className="flex w-fit items-center gap-3 font-medium"
                    onClick={handleYoutubeClick}
                  >
                    <Image
                      src={'/icons/youtube.svg'}
                      alt="youtube"
                      width={18}
                      height={18}
                    />
                    <span>YouTube Automatization</span>
                  </div>
                }
              >
                <div
                  onClick={handleAllVideoClick}
                  className="flex cursor-pointer gap-3 p-2 font-medium"
                >
                  <Image src={'/icons/time.svg'} alt="youtube" width={18} height={18} />
                  <span>All video</span>
                </div>
              </AccordionItem>
            </Accordion>
          </li>

          <MenuItem
            href="?page=settings"
            iconSrc="/icons/settings.svg"
            label="Settings"
            active={currentPage === 'settings'}
          />
        </ul>
      )}
    </>
  )
}
