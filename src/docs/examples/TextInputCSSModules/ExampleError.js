import React from "react";
import TextInputCSSModules from "ps-react/TextInputCSSModules";

/** Required TextInput with errror */
const ExampleError = () => {
  return (
    <TextInputCSSModules
      htmlId="example-optional"
      label="First Name"
      name="firstName"
      onChange={() => {}}
      required
      error="First name is Required"
    />
  );
};

export default ExampleError;
