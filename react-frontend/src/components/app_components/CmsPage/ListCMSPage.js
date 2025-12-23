import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Card } from "primereact/card";
import client from "../../../services/restClient";

const ListCMSPage = (props) => {
  const urlParams = useParams();
  const location = useLocation();
  console.log("params", urlParams);
  console.log("location", location);
  const [data, setData] = useState([
    {
      _id: 1,
      name: "test",
    },
  ]);

  const path = location.pathname.replace("/app/cms","");
  console.log(path);

    useEffect(() => {
      //on mount
      client
        .service("cms")
        .find({
          query: {
            $limit: 10000,
            path: path,
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
          setData(results);
        })
        .catch((error) => {
          console.log({ error });
        });
    }, []);

  return (
    <div>
      Todo List here
      {data.map((item) => (
        <Card
          key={item._id}
          title={item.name}
          subTitle="Card subtitle"
          className="md:w-25rem"
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      ))}
    </div>
  );
};

export default ListCMSPage;
