import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { excludeLocations } from "../../utils";

const StartupWrapper = (props) => {
  const location = useLocation();

  useEffect(() => {
    const isExcluded = excludeLocations.some((exclude) => {
      if (typeof exclude === "string") {
        return exclude === location.pathname;
      } else if (exclude instanceof RegExp) {
        return exclude.test(location.pathname);
      }
      return false;
    });

    // runs once
    if (!isExcluded) {
      props.reAuth().catch((error) => {
        console.debug("error", error);
      });
    }
  }, []);

  return null;
};

const mapState = (state) => {
  const { isLoggedIn, user } = state.auth;
  return { isLoggedIn, user };
};
const mapDispatch = (dispatch) => ({
  reAuth: () => dispatch.auth.reAuth(),
});

export default connect(mapState, mapDispatch)(StartupWrapper);
