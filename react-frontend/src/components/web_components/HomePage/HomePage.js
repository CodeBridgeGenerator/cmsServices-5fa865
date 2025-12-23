import React, { useRef } from "react";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import HeaderPage from "./HeaderPage";

const HomePage = (props) => {
  return (
    <>
      <HeaderPage />
      <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-12 lg:w-6 p-4">
            <h1 className="text-6xl font-bold text-white mt-0 mb-3">
              Social CRM that helps you grow faster{" "}
              <span className="text-yellow-500 underline">for free</span>
            </h1>
            <p className="text-3xl text-gray-400 mt-0 mb-5">
              Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim
              diam vulputate ut.
            </p>
            <ul className="list-none p-0 m-0">
              <li className="mb-3 flex align-items-center">
                <i className="pi pi-compass text-yellow-500 text-xl mr-2"></i>
                <span className="text-gray-400 line-height-3">
                  Senectus et netus et malesuada fames.
                </span>
              </li>
              <li className="mb-3 flex align-items-center">
                <i className="pi pi-map text-yellow-500 text-xl mr-2"></i>
                <span className="text-gray-400 line-height-3">
                  Orci a scelerisque purus semper eget.
                </span>
              </li>
              <li className="mb-3 flex align-items-center">
                <i className="pi pi-calendar text-yellow-500 text-xl mr-2"></i>
                <span className="text-gray-400 line-height-3">
                  Aenean sed adipiscing diam donec adipiscing tristique.
                </span>
              </li>
            </ul>
            <Button
              type="button"
              label="Claim Your Account"
              className="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium"
            />
          </div>
          <div className="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
            <img
              src="/demo/images/blocks/hero/hero-illustration.svg"
              alt="Image"
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="flex justify-content-evenly flex-wrap">
          <div className="p-3">
            <img
              src="/demo/images/blocks/logos/peak-500.svg"
              alt="Image"
              height="50"
            />
          </div>
          <div className="p-3">
            <img
              src="/demo/images/blocks/logos/charot-500.svg"
              alt="Image"
              height="50"
            />
          </div>
          <div className="p-3">
            <img
              src="/demo/images/blocks/logos/hyper-500.svg"
              alt="Image"
              height="50"
            />
          </div>
          <div className="p-3">
            <img
              src="/demo/images/blocks/logos/hodly-500.svg"
              alt="Image"
              height="50"
            />
          </div>
          <div className="p-3">
            <img
              src="/demo/images/blocks/logos/franki-500.svg"
              alt="Image"
              height="50"
            />
          </div>
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="font-bold text-900 text-3xl mb-3 text-center">
          Build The Way You Want
        </div>
        <div className="text-700 text-center mb-3">
          Risus feugiat in ante metus. Lacus suspendisse faucibus interdum
          posuere lorem.
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6 xl:w-3 p-5">
            <img
              src="/demo/images/blocks/feature/feature-illustration-1.svg"
              alt="Image"
              className="w-full"
            />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">
              Ornare Arcu Odio
            </div>
            <span className="text-700 line-height-3">
              Quisque sagittis purus sit amet volutpat consequat mauris nunc.
              Scelerisque eleifend.
            </span>
            <a
              tabIndex="0"
              className="text-blue-500 font-medium flex align-items-center mt-2"
            >
              <span>Explore</span>
              <i className="pi pi-arrow-right ml-3"></i>
            </a>
          </div>
          <div className="w-full lg:w-6 xl:w-3 p-5">
            <img
              src="/demo/images/blocks/feature/feature-illustration-2.svg"
              alt="Image"
              className="w-full"
            />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">
              Sem Nulla Pharetra
            </div>
            <span className="text-700 line-height-3">
              Quisque sagittis purus sit amet volutpat consequat mauris nunc.
              Scelerisque eleifend.
            </span>
            <a
              tabIndex="0"
              className="text-blue-500 font-medium flex align-items-center mt-2"
            >
              <span>Explore</span>
              <i className="pi pi-arrow-right ml-3"></i>
            </a>
          </div>
          <div className="w-full lg:w-6 xl:w-3 p-5">
            <img
              src="/demo/images/blocks/feature/feature-illustration-3.svg"
              alt="Image"
              className="w-full"
            />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">
              Facilisi Etiam Dignissim
            </div>
            <span className="text-700 line-height-3">
              Quisque sagittis purus sit amet volutpat consequat mauris nunc.
              Scelerisque eleifend.
            </span>
            <a
              tabIndex="0"
              className="text-blue-500 font-medium flex align-items-center mt-2"
            >
              <span>Explore</span>
              <i className="pi pi-arrow-right ml-3"></i>
            </a>
          </div>
          <div className="w-full lg:w-6 xl:w-3 p-5">
            <img
              src="/demo/images/blocks/feature/feature-illustration-4.svg"
              alt="Image"
              className="w-full"
            />
            <div className="mt-3 mb-2 font-medium text-900 text-xl">
              Risus Feugiat In Ante
            </div>
            <span className="text-700 line-height-3">
              Quisque sagittis purus sit amet volutpat consequat mauris nunc.
              Scelerisque eleifend.
            </span>
            <a
              tabIndex="0"
              className="text-blue-500 font-medium flex align-items-center mt-2"
            >
              <span>Explore</span>
              <i className="pi pi-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
        <div className="font-bold text-900 text-3xl mb-3 text-center">
          Explore The Features
        </div>
        <div className="text-700 text-center mb-5 line-height-3">
          Libero justo laoreet sit amet cursus sit amet dictum. Auctor neque
          vitae tempus quam pellentesque nec nam.
        </div>
        <div className="flex lg:justify-content-center mb-5">
          <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img
              src="/demo/images/blocks/feature/feature-timeline-1.png"
              alt="Image"
              className="w-full mr-8"
            />
          </div>
          <div className="flex flex-column align-items-center w-2rem">
            <span
              className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            >
              1
            </span>
            <div
              className="h-full bg-blue-500"
              style={{ width: "2px", minHeight: "4rem" }}
            ></div>
          </div>
          <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div className="text-900 text-xl mb-2 font-medium">
              Ornare Arcu Odio
            </div>
            <span className="block text-700 line-height-3 mb-3">
              Quisque sagittis purus sit amet volutpat consequat mauris nunc.
              Scelerisque eleifend.
            </span>
            <div className="pt-3 border-top-1 border-300">
              <div className="mb-2 line-height-3">
                <span className="text-900 font-medium">
                  Sed lectus vestibulum
                </span>{" "}
                mattis ullamcorper velit. Laoreet sit amet cursus sit.
              </div>
              <div className="line-height-3">
                <span className="text-900 font-medium">Fames ac turpis</span>{" "}
                egestas sed tempus urna et. Cursus turpis massa.
              </div>
            </div>
            <img
              src="/demo/images/blocks/feature/feature-timeline-1.png"
              alt="Image"
              className="w-full mt-3 block lg:hidden"
            />
          </div>
        </div>
        <div className="flex justify-content-center mb-5">
          <div className="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
            <div className="text-900 text-xl mb-2 font-medium">
              A diam maecenas
            </div>
            <span className="block text-700 line-height-3 mb-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </span>
            <div className="pt-3 border-top-1 border-300">
              <div className="mb-2 line-height-3">
                <span className="text-900 font-medium">
                  Quis hendrerit dolor
                </span>{" "}
                magna eget est. Pellentesque pulvinar pellentesque.
              </div>
              <div className="line-height-3">
                <span className="text-900 font-medium">Lectus urna duis</span>{" "}
                convallis convallis tellus id interdum velit laoreet.
              </div>
            </div>
            <img
              src="/demo/images/blocks/feature/feature-timeline-2.png"
              alt="Image"
              className="w-full mt-3 block lg:hidden"
            />
          </div>
          <div className="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1">
            <span
              className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            >
              2
            </span>
            <div
              className="h-full bg-yellow-500"
              style={{ width: "2px", minHeight: "4rem" }}
            ></div>
          </div>
          <div className="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2">
            <img
              src="/demo/images/blocks/feature/feature-timeline-2.png"
              alt="Image"
              className="w-full mr-8"
            />
          </div>
        </div>
        <div className="flex justify-content-center">
          <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
            <img
              src="/demo/images/blocks/feature/feature-timeline-3.png"
              alt="Image"
              className="w-full mr-8"
            />
          </div>
          <div className="flex flex-column align-items-center w-2rem">
            <span
              className="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            >
              3
            </span>
            <div
              className="h-full bg-cyan-500"
              style={{ width: "2px", minHeight: "4rem" }}
            ></div>
          </div>
          <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
            <div className="text-900 text-xl mb-2 font-medium">
              Pharetra et ultrices neque
            </div>
            <span className="block text-700 line-height-3 mb-3">
              Id interdum velit laoreet id. A iaculis at erat pellentesque
              adipiscing commodo elit at imperdiet.
            </span>
            <div className="pt-3 border-top-1 border-300">
              <div className="mb-2 line-height-3">
                <span className="text-900 font-medium">Egestas dui id</span>{" "}
                ornare arcu odio ut. Mi bibendum neque egestas congue.
              </div>
              <div className="line-height-3">
                <span className="text-900 font-medium">
                  Sed velit dignissim
                </span>{" "}
                sodales ut eu. Massa placerat duis ultricies lacus.
              </div>
            </div>
            <img
              src="/demo/images/blocks/feature/feature-timeline-3.png"
              alt="Image"
              className="w-full mt-3 block lg:hidden"
            />
          </div>
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="text-orange-500 text-center mb-3">
          VITAE TEMPUS QUAM
        </div>
        <div className="font-bold text-5xl text-900 text-center mb-6">
          Take your vision to the next level
        </div>
        <div className="grid grid-nogutter">
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-blue-50 text-center p-5 border-round flex flex-column">
              <i className="text-blue-500 pi pi-play text-4xl block mb-4"></i>
              <span className="text-900 text-5xl">52000</span>
              <div className="text-blue-700 mt-3 font-medium">Streams</div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-purple-50 text-center p-5 border-round flex flex-column">
              <i className="text-purple-500 pi pi-users text-4xl block mb-4"></i>
              <span className="text-900 text-5xl">21000</span>
              <div className="text-purple-700 mt-3 font-medium">Engagement</div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-teal-50 text-center p-5 border-round flex flex-column">
              <i className="text-teal-500 pi pi-camera text-4xl block mb-4"></i>
              <span className="text-900 text-5xl">71.2h</span>
              <div className="text-teal-700 mt-3 font-medium">Watch Time</div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="bg-indigo-50 text-center p-5 border-round flex flex-column">
              <i className="text-indigo-500 pi pi-thumbs-up text-4xl block mb-4"></i>
              <span className="text-900 text-5xl">4500</span>
              <div className="text-indigo-700 mt-3 font-medium">Likes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div
          className="flex flex-wrap relative overflow-hidden"
          style={{
            borderRadius: "1rem",
            background:
              "radial-gradient(100% 1126.49% at 100% 0%, rgba(106, 200, 212, 0.4) 0%, rgba(33, 33, 33, 0) 100%), #212121",
          }}
        >
          <div className="px-6 py-8">
            <span className="uppercase text-cyan-500 font-bold">
              BE THE FIRST ONE
            </span>
            <div className="text-white text-medium text-5xl mt-3 mb-5">
              Join the waitlist Today!
            </div>
            <button
              className="p-ripple appearance-none p-3 bg-cyan-500 hover:bg-cyan-300 cursor-pointer transition-colors font-medium gray-900 border-none p-component transition-colors transition-duration-150"
              style={{ borderRadius: "35px" }}
            >
              Reserve Your Username
              <Ripple />
            </button>
          </div>

          <img
            src="/demo/images/blocks/cta/cta-browser.png"
            alt="Image"
            className="static lg:absolute block mx-auto"
            style={{ height: "400px", top: "-2rem", right: "-1rem" }}
          />
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table
            className="w-full white-space-nowrap"
            style={{ borderCollapse: "collapse", borderSpacing: "0" }}
          >
            <thead>
              <tr>
                <td className="surface-100 p-3">
                  <div className="text-3xl text-900 mb-2">Pricing</div>
                  <span className="text-600 line-height-3">
                    Fringilla est ullamcorper eget nulla facilisi etiam
                  </span>
                </td>
                <td className="surface-100 p-3 text-center">
                  <div className="text-900 text-xl font-medium mb-3">Basic</div>
                  <div className="text-600 mb-3">
                    <span className="text-3xl text-900">$10</span> /month
                  </div>
                  <Button className="p-button-rounded" label="Free Trial" />
                </td>
                <td className="surface-100 p-3 text-center">
                  <div className="text-900 text-xl font-medium mb-3">
                    Premium
                  </div>
                  <div className="text-600 mb-3">
                    <span className="text-3xl text-900">$20</span> /month
                  </div>
                  <Button className="p-button-rounded" label="Buy Now" />
                </td>
                <td className="surface-100 p-3 text-center">
                  <div className="text-900 text-xl font-medium mb-3">
                    Enterprise
                  </div>
                  <div className="text-600 mb-3">
                    <span className="text-3xl text-900">$30</span> /month
                  </div>
                  <Button
                    className="p-button-rounded p-button-outlined"
                    label="Contact Us"
                  />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Arcu purus
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Posuere felis
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Curabitur mollis
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Vitae odio
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Orci, mi
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-500 pi pi-times"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Tincidunt vulputate
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-500 pi pi-times"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-500 pi pi-times"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Quis felis
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-500 pi pi-times"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-500 pi pi-times"></i>
                </td>
                <td className="text-center p-medium border-bottom-1 border-200">
                  <i className="text-green-500 pi pi-check"></i>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-900 font-medium border-bottom-1 border-200">
                  Dignissim vivamus
                </td>
                <td className="text-center text-600 border-bottom-1 border-200">
                  Up to <span className="text-900">5</span> files
                </td>
                <td className="text-center text-600 border-bottom-1 border-200">
                  Up to <span className="text-900">10</span> files
                </td>
                <td className="text-center text-900 border-bottom-1 border-200">
                  Unlimited
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="flex align-items-start lg:align-items-center lg:justify-content-between pb-5 border-bottom-1 border-300 flex-column lg:flex-row">
          <div className="pr-0 lg:pr-8">
            <img
              src="/demo/images/blocks/logos/bastion-700.svg"
              alt="Image"
              height="50"
            />
            <p className="text-600 line-height-3 text-xl mb-0 mt-5">
              Consequat nisl vel pretium lectus quam. Scelerisque eu ultrices
              vitae auctor eu augue ut lectus arcu. Integer quis auctor elit
              sed.
            </p>
          </div>
          <Button
            label="Get Started"
            className="mt-5 lg:mt-0 white-space-nowrap min-w-max"
          />
        </div>
        <div className="py-5 border-bottom-1 border-300">
          <div className="grid">
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
              <span className="text-900 block font-bold line-height-3 mb-3">
                Company
              </span>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">News</a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Investor Relations
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
              <span className="text-900 block font-bold line-height-3 mb-3">
                Resources
              </span>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Get Started
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">Learn</a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
              <span className="text-900 block font-bold line-height-3 mb-3">
                Developer
              </span>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Courses
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Documentation
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    API Reference
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Status
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Papers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Development Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
              <span className="text-900 block font-bold line-height-3 mb-3">
                Community
              </span>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Discord
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Events
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">FAQ</a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
              <span className="text-900 block font-bold line-height-3 mb-3">
                Connect
              </span>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Newsletters
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">Press</a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Code of Conduct
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Security Guide
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Bug Bounty
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 sm:col-6 md:col-4 lg:col-2">
              <span className="text-900 block font-bold line-height-3 mb-3">
                Legal
              </span>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Brand Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Privacty Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-700 cursor-pointer line-height-3">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-content-between align-items-center py-5">
          <span>&copy; 2021 Bastion Tech</span>
          <div className="flex align-items-center justify-content-between">
            <a className="cursor-pointer text-500 md:ml-3 ml-2">
              <i className="pi pi-twitter text-xl"></i>
            </a>
            <a className="cursor-pointer text-500 md:ml-3 ml-2">
              <i className="pi pi-facebook text-xl"></i>
            </a>
            <a className="cursor-pointer text-500 md:ml-3 ml-2">
              <i className="pi pi-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
