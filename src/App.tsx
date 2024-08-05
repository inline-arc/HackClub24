import GitHubCalendar from 'react-github-calendar';
// import useSmoothScroll from './useSmoothScroll';

import itsme from './assets/itsmehalf.jpg';
import './App.css';

import newsb from './assets/newsblock.png';
import image from './assets/image.png';

import image_2 from './assets/image_2.png';
import image_3 from './assets/image_3.png';

import image_4 from './assets/image_4.png';
import image_5 from './assets/image_5.png';
import './App.css';

function App() {
  return (
    <div className="mx-auto px-14 md:max-w-lg lg:max-w-4xl">
      <section className="hero">
        <nav className="border-gray-200 bg-white">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center p-4 pt-16">
            <div
              className="w-full flex-wrap items-center justify-between md:order-1 md:flex md:w-auto"
              id="navbar-cta"
            >
              <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium sm:flex-row sm:flex-wrap sm:justify-center md:mt-0 md:flex-row md:justify-center md:space-x-16 md:p-0 rtl:space-x-reverse">
                <li>
                  <a
                    href="#experience"
                    className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600 dark:text-gray-600"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600 dark:text-gray-600"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#achievements"
                    className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600 dark:text-gray-600"
                  >
                    Achievements
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600 dark:text-gray-600"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#miscellaneous"
                    className="navbar-heading block rounded px-3 py-2 text-center hover:text-gray-400 sm:text-gray-600 md:p-0 md:text-gray-600 dark:text-gray-600"
                  >
                    Milestone
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* skill issue */}
        <div className="justify-start pt-10">
          <img
            src={itsme}
            className="rounded-full image-avatar size-44"
          />

          <p className="custom-font pt-5">Atharv More</p>
          <p className="font-dis">
            Engineer • Frontend Development
          </p>

          <p className="whytho pt-6 text-gray-600">
          Know as a Multicellular Human Frontend Engineer @wne_3
          . Tech Explorer. Problem Solver . Web Developer . Flutter Enthusiast . Web3 Enthusiast . Welcome to my portfolio, here you will find
            everything I've done in my professional life.
          </p>

          <div className="flexbox-custom pt-8 md:gap-16">
            <a href="mailto:aryannn053@gmail.com" className="wahatag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path>
                <path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path>
              </svg>
              Contact Me
            </a>
            <a href="https://github.com/aryannn053" className="wahatag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/badri-vishal" className="wahatag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
              </svg>
              LinkedIn
            </a>
            <a href="https://x.com/aryantri13" className="wahatag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
              </svg>
              Twitter
            </a>
          </div>

          <div className="pt-12">
            <hr />
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="pt-12">
          <p className="custom-font-2">Experience</p>

          <div className="pt-0">
            <div className="experience-flex">
              <img
                src="https://media.licdn.com/dms/image/C560BAQHPolOhyyz_YQ/company-logo_200_200/0/1664032534485/wne3_logo?e=1730937600&v=beta&t=0Oqo1c5wnF_gX5ZklPnN7cIidOErvE9b-Mohqy4SKqk"
                className="rounded-full grayscale hover:grayscale-0"
                width="50"
                height="50"
              />

              <div className="pt-0">
                <div className='skills-flex'>
                  <h1>WNE3 </h1>
                  <p className='pt-1 experience-skill custom-pad'>Jul 2024 - Present</p>
                </div>
                <p className="yewala">Frontend Engineer</p>
              </div>
              <div>
                <p className="whytho text-gray-600">
                Working in an IIT-BH-based startup developing features for a future e-commerce platform with Gen-AI. I test APIs of microservices, develop Gen-AI mockups, and research SLM and services. Additionally, I build prototype projects for testing, UI/UX analysis, and developing the best render patterns using APIs, BaaS tools, React Test, Material Design, and Figma System Design, collaborating with industrial experts.
                </p>
              </div>
            </div>
          </div>
      
          <div className="pt-1">
            <div className="experience-flex">
              <img
                src="data:image/png;base64,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"
                className="rounded-full grayscale hover:grayscale-0"
                width="50"
                height="50"
              />

              <div className="pt-0">
                <div className='skills-flex'>
                  <h1>EZPZ Solution</h1>
                  <p className='pt-1 experience-skill'>Jun 2023 - Jul 2023</p>
                </div>
                <p className="yewala">Software Engineer</p>
              </div>
              <div>
                <p className="whytho text-gray-600">
                Involved in web scraping for different hardware and GPUs on the internet, validating invoices and products, and listing them on a WordPress website. Additionally, I build prototype projects for testing using APIs, BaaS tools, React Test, Material Design, and Figma.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-1">
          
          </div>
        </div>

        <div className="pb-12 pt-12">
          <hr />
        </div>
      </section>

      <section id="projects">
        <h1 className="custom-font-2 pb-8">Projects</h1>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• NewsBlock</h1>
            <p className="whytho pt-1 text-gray-600">
            Developing a Decentralized news platform with immutable, censorship-resistant content using Polygon zkEVM, Solidity, React, Zustand, and the Reclaim Protocol for user verification and on-chain exploration.{' '}
            </p>

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a href={newsb} className="wahatag pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path>
                  <path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path>
                </svg>
                Try it now!
              </a>

              <a
                href="https://github.com/aryannn053/amazon"
                className="wahatag pt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="px-10">
            <img
              src={newsb}
              className="rounded pro-image"
              width="300"
            />
          </div>
        </div>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-12">
          <div>
            <h1 className="wahre">• AgroLab</h1>
            <p className="whytho pt-1 text-gray-600 ">
            Crop Disease Detection App that identifies crop diseases through camera or gallery scans. It provides the latest agricultural information, tips, pictures, and videos, helping farmers prevent dead stock and losses by making informed decisions and taking preventive measures.
            </p>

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a
                href="https://github.com/aryannn053/quoteapi"
                className="wahatag pt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="px-10">
            <img
              src="https://github.com/inline-arc/AgroLab/blob/master/assets/agrolablogo.png?raw=true"
              className="rounded pro-image scale-75"
              width="400"
            />
          </div>
        </div>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-12">
          <div>
            <h1 className="wahre">• Todo List</h1>
            <p className="whytho pt-1 text-gray-600">
              A minimalistic todo list app which is easy and comfortable to use.
              This app is built using Flask, Bootstrap CSS and Flask SQL
              Alchemy.
            </p>

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a
                href="https://github.com/MrBlueBird2/to-do-list-flask"
                className="wahatag pt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="px-10">
            <img
              src={image_3}
              className="rounded grayscale hover:grayscale-0 pro-image"
              width="400"
            />
          </div>
        </div>

        <h1 className="baharmil pb-5 pt-8 text-center">GitHub Contributions</h1>
        <GitHubCalendar username="inline-arc" year={2024} colorScheme="light" />

        <div className="pb-12 pt-12">
          <hr />
        </div>
      </section>

      <section id="achievements">
        <h1 className="custom-font-2 pb-8">Achievements</h1>

        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• CodeChef</h1>
            <p className="whytho pt-1 text-gray-600">
              After few months of grinding problems and learning new algorithms
              and stuff, I finally reached 1437 rating on codechef.
            </p>

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a
                href="https://codechef.com/users/aryant053"
                className="wahatag pt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path>
                  <path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path>
                </svg>
                View Profile
              </a>
            </div>
          </div>
          <div className="px-10">
            <img
              src={image_4}
              className="rounded grayscale hover:grayscale-0 pro-image"
              width="300"
            />
          </div>
        </div>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2 gap-0 pb-14">
          <div>
            <h1 className="wahre">• LeetCode</h1>
            <p className="whytho pt-1 text-gray-600">
              Started my grind for leetcode on 2nd May, Solved 450 Problems by June 23rd. Reached a rating of 1591.
            </p>

            <div className="flexbox-grid-c flexbox-grid-c-cols-2">
              <a
                href="https://leetcode.com/skyran"
                className="wahatag pt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon s-ion-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208zM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 01-26.82-17.19 62.06 62.06 0 01-44 17.57 51.66 51.66 0 01-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 019.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86z"></path>
                  <path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0017.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 01.34-2.07l3.2-25.45a49.61 49.61 0 00-32.93-6.3z"></path>
                </svg>
                View Profile
              </a>
            </div>
          </div>
          <div className="px-10">
            <img
              src={image_5}
              className="rounded grayscale hover:grayscale-0 pro-image"
              width="300"
            />
          </div>
        </div>
        
      </section>
      <div className="pb-12">
        <hr />
      </div>

      <section id="skills">
        <h1 className="custom-font-2 pb-6">Skills</h1>
        <div className="flexbox-grid-c flexbox-grid-c-cols-2">
          <div>
            <h1 className="wahre">Programming Languages</h1>
            <ol className="whytho pb-5 pt-2 text-gray-600">
              <li>HTML CSS</li>
              <li>Python</li>
              <li>Java</li>
              <li>CPP</li>
              <li>Javascript</li>
            </ol>
            <br />
            <br />

            <h1 className="wahre">Tools</h1>
            <ul className="whytho pb-5 pt-2 text-gray-600">
              <li>Figma</li>
              <li>Linux</li>
              <li>Git</li>
              <li>VS Code </li>
              <li>IntelliJ</li>
              <li>PyCharm</li>
            </ul>
          </div>
          <div>
            <h1 className="wahre">Libraries/Frameworks</h1>
            <ol className="whytho pb-5 pt-2 text-gray-600">
              <li>Bootstrap CSS</li>
              <li>Flask</li>
              <li>React JS</li>
              <li>Tailwind CSS</li>
              <li>Next JS</li>
              <li>Node JS</li>
            </ol>
            <br />

            <h1 className="wahre">Others</h1>
            <ul className="whytho pb-5 pt-2 text-gray-600">
              <li>Web Development</li>
              <li>Problem Solving</li>
              <li>Data Structures and Algorithms</li>
              <li>UI/UX Design</li>
              <li>Project Management</li>
              <li>Team Communication</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="pb-12 pt-6">
        <hr />
      </div>

      <section id="miscellaneous">
        <h1 className="custom-font-2">Milestones</h1>
        <br />
       
      </section>

      <div className="pb-12 pt-12">
        <hr />
      </div>

      <p className="whytho pb-12 text-center text-gray-600">
        © Atharv More | {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default App;
