'use client'

import { useState } from 'react'

export default function TranslatePage() {
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [billed, setBilled] = useState({ current: 0, total: 0, remain: 0 })

  const handleTranslate = async () => {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: sourceText.trim() }),
    })
    const data = await response.json()
    setBilled({
      current: data.billedCharacters,
      total: data.usage.character.count + data.billedCharacters,
      remain:
        data.usage.character.limit - data.usage.character.count - data.billedCharacters,
    })
    setTranslatedText(data.text)
  }
  return (
    <div>
      <h1 className="mb-6 text-4xl">Translate</h1>
      <hr />
      <textarea
        className="w-full border"
        placeholder="Enter text to translate"
        onChange={(e) => setSourceText(e.target.value)}
        value={sourceText}
      />
      <div className="my-3 w-full border bg-neutral-50 p-3">{translatedText}</div>
      <div>Billed: {billed.current} characters</div>
      <div>Total: {billed.total} characters</div>
      <div>Remain: {billed.remain} characters</div>
      <div onClick={handleTranslate} className="cursor-pointer bg-primary px-4 py-2">
        Translate
      </div>
    </div>
  )
}
