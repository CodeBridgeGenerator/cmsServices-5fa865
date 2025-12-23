import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import SingleCmsPage from "../components/app_components/CmsPage/SingleCmsPage";
import CmProjectLayoutPage from "../components/app_components/CmsPage/CmProjectLayoutPage";
import FeaturesListPage from "../components/web_components/ProductPage/FeaturesListPage";
import IntegrationsPage from "../components/web_components/ProductPage/IntegrationsPage";
import RoadMapPage from "../components/web_components/ProductPage/RoadMapPage";
import ChangeLogPage from "../components/web_components/ProductPage/ChangeLogPage";
import AppTemplatesPage from "../components/web_components/ProductPage/AppTemplatesPage";

//  ~cb-add-import~

const WebRouter = () => {
  const location = useLocation();
  console.log("loc", location);
  return (
    <Routes>
      {/* ~cb-add-unprotected-route~ */}
      <Route path="/features" exact element={<FeaturesListPage />} />
      <Route
        path="/integrations/list"
        exact
        element={<IntegrationsPage />}
      />
      <Route path="/roadmap/list" exact element={<RoadMapPage />} />
      <Route path="/changelog/list" exact element={<ChangeLogPage />} />
      <Route
        path="/apptemplates/list"
        exact
        element={<AppTemplatesPage />}
      />
    </Routes>
  );
};

const mapState = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(WebRouter);
