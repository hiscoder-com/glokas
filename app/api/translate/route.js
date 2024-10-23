import { NextResponse } from 'next/server'

import { Translator } from 'deepl-node'

export async function POST(request) {
  const { text } = await request.json()
  const translator = new Translator(process.env.DEEPL_API_KEY)
  const usage = await translator.getUsage()
  const result = await translator.translateText(text, 'ru', 'en-US')
  return NextResponse.json(
    {
      text: result.text,
      detectedSourceLang: result.detectedSourceLang,
      billedCharacters: result.billedCharacters,
      totalUsed: usage.character.count + result.billedCharacters,
      remain: usage.character.limit - usage.character.count - result.billedCharacters,
    },
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
