import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import _ from "lodash";

const HeaderPage = (props) => {
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      name: "features",
      headerContent: "explore everthing our platform has to offer",
      link: "/web/features/list",
    },
    {
      name: "integrations",
      headerContent: "discoverintergrations that plug directly into your app",
      link: "/web/integrations/list",
    },
    {
      name: "app templates",
      headerContent: "discoverintergrations that plug directly into your app",
      link: "/web/apptemplates/list",
    },
    {
      name: "roadMap",
      headerContent: "get a preview of what is coming next",
      link: "/web/roadmap/list",
    },
    {
      name: "changelog",
      headerContent: "see what's new and track your changes",
      link: "/web/changelog/list",
    },
  ]);

  const label = process.env.REACT_APP_PROJECT_LABEL;


  return (
    <>
      {" "}
      <div className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
        {/* <img
          src="/demo/images/blocks/logos/hyper-light.svg"
          alt="Image"
          height="50"
        /> */}
        <span className="text-red-600 text-2xl font-bold">{label}</span>
        <StyleClass
          nodeRef={btnRef3}
          selector="@next"
          enterClassName="hidden"
          leaveToClassName="hidden"
          hideOnOutsideClick
        >
          <a
            ref={btnRef3}
            className="cursor-pointer block lg:hidden text-gray-400"
          >
            <i className="pi pi-bars text-4xl"></i>
          </a>
        </StyleClass>
        <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none z-2">
          <section></section>
          <ul className="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row cursor-pointer">
            <li>
              <StyleClass
                nodeRef={btnRef4}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeout"
                hideOnOutsideClick
              >
                <a
                  ref={btnRef4}
                  className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150"
                >
                  <span>Products</span>
                  <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                  <Ripple />
                </a>
              </StyleClass>
              <div className="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-70">
                <div className="flex flex-wrap p-6">
                  <div className="w-80 lg:w-6 mb-4 lg:mb-0">
                    <span className="block font-normal text-2xl mb-4 text-white">
                      Products
                    </span>
                    <p key="product" className="line-height-3 m-0 text-gray-400">
                      Products
                    </p>
                  </div>
                  <div className="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                    {data
                      .filter((item) => item.headerContent)
                      .map((item) => (
                        <div key={item._id} className="px-3 lg:px-3 py-3" onClick={(()=> navigate(item.link))}>
                          <span className="text-white">
                            {_.startCase(item.name)}
                          </span>
                          <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                            {item.headerContent
                              ? String(item.headerContent)
                              : "No Content"}
                          </p>
                        </div>
                      ))}
                  </div>
                  {/* <div className="w-full lg:w-6">
                    <div className="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                      <div className="px-0 lg:px-3 py-3">
                        <span className="text-white">Shodan</span>
                        <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                          Porta lorem mollis aliquam ut porttitor leo a diam.
                        </p>
                      </div>
                      <div className="px-0 lg:px-3 py-3">
                        <span className="text-white">Bastion</span>
                        <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                          Amet purus gravida quis blandit.
                        </p>
                      </div>
                      <div className="px-0 lg:px-3 py-3">
                        <span className="text-white">Hodly</span>
                        <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                          Aenean vel elit scelerisque mauris.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap">
                      <div className="px-0 lg:px-3 py-3">
                        <span className="text-white">Peak</span>
                        <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                          Feugiat pretium nibh ipsum consequat.
                        </p>
                      </div>
                      <div className="px-0 lg:px-3 py-3">
                        <span className="text-white">Franki</span>
                        <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                          Tristique nulla aliquet enim tortor.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </li>
            <li>
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                <span>Corporate</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                <span>Resources</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                <span>Pricing</span>
                <Ripple />
              </a>
            </li>
          </ul>
          <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
            <Button
              label="Login"
              onClick={() => navigate("/login")}
              className="p-button-text font-bold"
            />
            <Button
              label="Register"
              onClick={() => navigate("/signup")}
              className="ml-3 font-bold"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
