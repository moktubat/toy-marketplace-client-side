import ReactDOM from "react-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyCategory = () => {
  return (
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList>
        <Tab className='text-center'>Our Products</Tab>
      </TabList>
      <TabPanel>
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab>Marvel</Tab>
            <Tab>DC Comics</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Transformers</Tab>
          </TabList>
          <TabPanel>
            <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png"
              alt="Homer Simpson"
            />
          </TabPanel>
          <TabPanel>
            <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
              alt="Marge Simpson"
            />
          </TabPanel>
          <TabPanel>
            <p>
              Oldest child and only son of Homer and Marge; brother of Lisa and
              Maggie.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
              alt="Bart Simpson"
            />
          </TabPanel>
          <TabPanel>
            <p>
              Middle child and eldest daughter of Homer and Marge; sister of
              Bart and Maggie.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
              alt="Lisa Simpson"
            />
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

ReactDOM.render(<ToyCategory />, document.getElementById("root"));

export default ToyCategory;
