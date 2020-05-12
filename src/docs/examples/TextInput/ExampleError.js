import React from "react";
import TextInput from "ps-react/TextInput";

/** Required TextInput with errror */
const ExampleError = () => {
  return (
    <TextInput
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
