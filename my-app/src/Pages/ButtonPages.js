import React from "react";
import Button from "../Component/Button";
import {
  GoAlert,
  GoCloudDownload,
  GoDashboard,
  GoDatabase,
  GoGlobe,
} from "react-icons/go";

const ButtonPages = () => {
  // console.log("Button");
  // const handleSuccessClick = () => {
  // console.log("success");
  // };
  return (
    <>
      <div>
        <Button primary outline>
          <GoAlert />
          Button 1
        </Button>
      </div>

      <div>
        <Button secondary rounded>
          <GoCloudDownload />
          Button 2
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoDashboard />
          Button 3
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoDatabase />
          Button 4
        </Button>
      </div>
      <div>
        <Button danger>
          <GoGlobe />
          Button 5
        </Button>
      </div>
    </>
  );
};

export default ButtonPages;
