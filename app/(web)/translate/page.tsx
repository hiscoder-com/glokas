'use client'

import { useState } from 'react'

export default function TranslatePage() {
  const [sourceText, setSourceText] = useState('')
  const [translatedResult, setTranslatedResult] = useState({
    billedCharacters: 0,
    totalUsed: 0,
    remain: 0,
    text: '',
    detectedSourceLang: '',
  })

  const handleTranslate = async () => {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: sourceText.trim() }),
    })
    const data = await response.json()
    setTranslatedResult({ ...data })
  }
  return (
    <div>
      <h1 className="mb-6 text-4xl">Translate</h1>
      <hr />
      <textarea
        className="w-full border"
        placeholder="Текст на русском для перевода на английский"
        onChange={(e) => setSourceText(e.target.value)}
        value={sourceText}
      />
      <div className="my-3 w-full border bg-neutral-50 p-3">{translatedResult.text}</div>
      <div>Billed: {translatedResult.billedCharacters} characters</div>
      <div>Total: {translatedResult.totalUsed} characters</div>
      <div>Remain: {translatedResult.remain} characters</div>
      <div onClick={handleTranslate} className="cursor-pointer bg-primary px-4 py-2">
        Translate
      </div>
    </div>
  )
}
