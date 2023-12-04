import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import useTanstack from "../../shared/Hooks/useTanstack";
import CatagoryCart from "./CatagoryCart";
import Loding from "../../shared/Loding/Loding";
const Catagoreis = () => {
  const [catagory, setCaragory] = useState("Development");
  const { data, isLoading } = useTanstack(catagory);

  return (
    <div>
      <div className="text-center py-5 md:my-16">
        <div className="pb-4"data-aos="zoom-in-up" data-aos-duration="1500">
          <h1 className="text-xl md:text-2xl font-medium text-black dark:text-white">Career pulse focuses on the job marketing website promotion of a  focuses</h1>
          <p className="md:w-9/12 mx-auto md:pt-3 text-lg md:text-xl text-black dark:text-white">Career Pulse is a dedicated job marketing website that specializes in promoting job listings and career opportunities. With a focus on helping job seekers and employers connect, it provides a platform for posting and finding a wide range of job opportunities in various industries.</p>
        </div>
        {isLoading ? (
          <div>
            <Loding/>
          </div>
        ) : (
          <>
            <Tabs>
              <TabList>
                <Tab onClick={() => setCaragory("Development")}>
                  Web development
                </Tab>
                <Tab onClick={() => setCaragory("Marketing")}>
                  Digital marketing
                </Tab>
                <Tab onClick={() => setCaragory("Graphics")}>
                  Graphics design
                </Tab>
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data?.map((catagory) => (
                    <CatagoryCart key={catagory._id} catagory={catagory} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data?.map((catagory) => (
                    <CatagoryCart key={catagory._id} catagory={catagory} />
                  ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data?.map((catagory) => (
                    <CatagoryCart key={catagory._id} catagory={catagory} />
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default Catagoreis;
