import React from 'react'

function Values() {
  return (
    <section className="py-8">
        <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
            <div>
                <div className="flex justify-start px-8 md:px-16">
                    <h1 className="-mt-12 text-2xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">CORE VALUES</h1>
                </div>
                <div className="py-4 flex items-center justify-evenly flex-wrap px-2 text-sm text-white space-x-1 space-y-2">
                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Innovation</p>
                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Integrity</p>
                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Team Work</p>
                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Excellence</p>
                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Customer Focus</p>
                    <p className="odd:bg-gradient-to-br from-[#108eb1] to-[#1e3a8a] even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Professionalism</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values