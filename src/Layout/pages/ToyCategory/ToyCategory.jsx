import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCategory = () => {
  const [marvelLego, setMarvelLego] = useState([]);
  const [DCLego, setDCLego] = useState([]);
  const [starWarsLego, setStarWarsLego] = useState([]);
  const [transformersLego, setTransformersLego] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/marvel")
      .then((res) => res.json())
      .then((result) => {
        setMarvelLego(result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/DcComics")
      .then((res) => res.json())
      .then((result) => {
        setDCLego(result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/starWars")
      .then((res) => res.json())
      .then((result) => {
        setStarWarsLego(result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/transformers")
      .then((res) => res.json())
      .then((result) => {
        setTransformersLego(result);
      });
  }, []);

  return (
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList>
        <Tab className="py-6 text-3xl sm:text-5xl font-bold tracking-wide text-gray-900 text-center">
          Our Products
        </Tab>
      </TabList>
      <TabPanel>
        <Tabs forceRenderTabPanel>
          <TabList className="text-center flex items-center justify-center gap-3 py-3">
            <Tab className="bg-[#7A3E3E] hover:bg-[#482121] text-white font-bold py-2 px-4 rounded">
              Marvel
            </Tab>
            <Tab className="bg-[#7A3E3E] hover:bg-[#482121] text-white font-bold py-2 px-4 rounded">
              DC Comics
            </Tab>
            <Tab className="bg-[#7A3E3E] hover:bg-[#482121] text-white font-bold py-2 px-4 rounded">
              Star Wars
            </Tab>
            <Tab className="bg-[#7A3E3E] hover:bg-[#482121] text-white font-bold py-2 px-4 rounded">
              Transformers
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid justify-center items-center gap-4 sm:grid-cols-2">
              {marvelLego.map((ml) => (
                <div
                className="card w-96 bg-white rounded-lg shadow-xl flex justify-center items-center mx-auto"
                key={ml._id}
                >
                  <figure>
                    <img className="w-64" src={ml.image} alt="Toy" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{ml.toy_name}</h2>
                    <p>Price: $ {ml.price}</p>
                    <p>Rating: {ml.rating}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary w-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid justify-center items-center gap-4 sm:grid-cols-2 py-4">
              {DCLego.map((dl) => (
                <div
                  className="card w-96 bg-white rounded-lg shadow-xl flex justify-center items-center mx-auto"
                  key={dl._id}
                >
                  <figure>
                    <img className="w-64" src={dl.image} alt="Toy" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{dl.toy_name}</h2>
                    <p>Price: $ {dl.price}</p>
                    <p>Rating: {dl.rating}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary w-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid justify-center items-center gap-4 sm:grid-cols-2">
              {starWarsLego.map((sl) => (
                <div
                className="card w-96 bg-white rounded-lg shadow-xl flex justify-center items-center mx-auto"
                key={sl._id}
                >
                  <figure>
                    <img className="w-64" src={sl.image} alt="Toy" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{sl.toy_name}</h2>
                    <p>Price: $ {sl.price}</p>
                    <p>Rating: {sl.rating}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary w-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid justify-center items-center gap-4 sm:grid-cols-2">
              {transformersLego.map((tl) => (
                <div
                className="card w-96 bg-white rounded-lg shadow-xl flex justify-center items-center mx-auto"
                key={tl._id}
                >
                  <figure>
                    <img className="w-64" src={tl.image} alt="Toy" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{tl.toy_name}</h2>
                    <p>Price: $ {tl.price}</p>
                    <p>Rating: {tl.rating}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary w-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

ReactDOM.render(<ToyCategory />, document.getElementById("root"));

export default ToyCategory;
