import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mb-6 flex flex-col items-center justify-center bg-white px-4 py-24 text-center">
      <h1 className="text-black-900 text-5xl font-bold">404</h1>
      <p className="text-black-400 mt-4 text-xl">Sorry, this page isnt available.</p>

      <p className="text-black-400 mt-6">
        The link you followed may be broken, or the page may have been removed.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="box-border block w-full min-w-20 select-none appearance-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-primary px-7 py-4 text-medium font-[600] text-white outline-none tap-highlight-transparent transition-transform-colors-opacity hover:opacity-hover motion-reduce:transition-none"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  )
}
