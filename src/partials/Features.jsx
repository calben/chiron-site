import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import Personnel1 from '../images/personnel01.jpg'
import Personnel2 from '../images/personnel02.jpg'
import Personnel3 from '../images/personnel03.jpg'
import AnesthesiaMachine from '../images/anasthesiamachine.png'
import Patient from '../images/patient.png'
import VitalSignsImage from '../images/vitalsigns.png'
import VitalSignsDisplay from '../images/patient-vitals-display.png';
import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import PrepareMed from '../images/preparemedication.png'
import MedEffects from '../images/medicineeffects.png'
import QuickDialogue from '../images/quickdialogue.png'
import Objectives from '../images/objectives.png'

function Features() {

  const [tab, setTab] = useState("vital-signs-display");

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">High Quality Characters and Models</h1>
          </div>

          <div class="grid md:grid-cols-3 md:gap-4">
            <img
              src={Personnel1}
              class="h-auto transition-shadow ease-in-out duration-300 hover:shadow-xl rounded-full"
              alt=""
            />
            <img
              src={Personnel2}
              class="h-auto transition-shadow ease-in-out duration-300 hover:shadow-xl rounded-full"
              alt=""
            />
            <img
              src={Personnel3}
              class="h-auto transition-shadow ease-in-out duration-300 hover:shadow-xl rounded-full"
              alt=""
            />
          </div>

          <div class="grid md:grid-cols-2 md:gap-4 mt-6 pb-12">
            <img
              src={AnesthesiaMachine}
              class="h-auto transition-shadow ease-in-out duration-300 hover:shadow-xl"
              alt=""
            />
            <img
              src={Patient}
              class="h-auto transition-shadow ease-in-out duration-300 hover:shadow-xl"
              alt=""
            />
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Control Like No Other Simulator</h1>
            <p className="text-xl text-gray-600">A set of tools to control the patient and the environment</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Direct patient control</h3>
                <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div> */}
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 0 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab("vital-signs-display"); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Adjustable vital signs display</div>
                    <div className="text-gray-600"></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab("vital-signs-ui"); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Directly control patient behaviour and vital signs</div>
                    <div className="text-gray-600"></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab("medications-ui"); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Administer medications with custom effects</div>
                    <div className="text-gray-600"></div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab("objectives-ui"); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Track learning objectives and take notes</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab("dialogue-ui"); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Speak through the actors in the simulation</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                <Transition
                  show={tab === "vital-signs-display"}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={VitalSignsDisplay} width="500" height="462" alt="Features bg" />
                  </div>
                </Transition>
                <Transition
                  show={tab === "vital-signs-ui"}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={VitalSignsImage} width="500" height="462" alt="Features bg" />
                  </div>
                </Transition>
                <Transition
                  show={tab === "medications-ui"}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={MedEffects} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-4/5 left-0 transform animate-float" src={PrepareMed} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                <Transition
                  show={tab === "objectives-ui"}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={Objectives} width="500" height="462" alt="Features bg" />
                  </div>
                </Transition>
                <Transition
                  show={tab === "dialogue-ui"}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={QuickDialogue} width="500" height="462" alt="Features bg" />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
