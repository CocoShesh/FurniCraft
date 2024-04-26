import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function NewsLetter() {
  return (
    <>
      <section className=" flex items-center justify-center py-24 gap-10 px-14 max-sm:px-6 2xl:mx-auto max-lg:flex-col 2xl:w-[1600px]">
        <section className=" w-full">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Subscribe to our newsletter.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 w-full">
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
            <dd className="mt-2 leading-7 text-gray-400">
              Non laboris consequat cupidatat laborum magna. Eiusmod non irure
              cupidatat duis commodo amet.
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">No spam</dt>
            <dd className="mt-2 leading-7 text-gray-400">
              Officia excepteur ullamco ut sint duis proident non adipisicing.
              Voluptate incididunt anim.
            </dd>
          </div>
        </div>
      </section>
    </>
  );
}
