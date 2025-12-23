import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../../services/restClient";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import _ from "lodash";

const ChangeLogPage = (props) => {
  const [changeLogs, setChangeLogs] = useState([]);
  useEffect(() => {
    //on mount
    client
      .service("cms")
      .find({
        query: {
          $limit: 10000,
          $populate: [
            {
              path: "createdBy",
              service: "users",
              select: ["name"],
            },
            {
              path: "updatedBy",
              service: "users",
              select: ["name"],
            },
          ],
        },
      })
      .then((res) => {
        let results = res.data;
        setChangeLogs(results);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  return <></>;
};

export default ChangeLogPage;
