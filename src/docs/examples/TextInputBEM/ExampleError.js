import React from "react";
import TextInputBEM from "ps-react/TextInputBEM";

/** Required TextInput with errror */
const ExampleError = () => {
  return (
    <TextInputBEM
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
