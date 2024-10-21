import { NextResponse } from 'next/server'

import { Translator } from 'deepl-node'

export async function POST(request) {
  const { text } = await request.json()
  const translator = new Translator(process.env.DEEPL_API_KEY)
  const usage = await translator.getUsage()
  const result = await translator.translateText(text, 'ru', 'en-US')
  return NextResponse.json(
    { ...result, usage },
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
