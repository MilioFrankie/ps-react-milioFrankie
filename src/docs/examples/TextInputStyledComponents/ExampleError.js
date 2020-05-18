import React from "react";
import TextInputStyledComponents from "ps-react/TextInputStyledComponents";

/** Required TextInput with errror */
const ExampleError = () => {
  return (
    <TextInputStyledComponents
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
