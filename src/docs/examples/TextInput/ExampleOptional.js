import React from "react";
import TextInput from "ps-react/TextInput";

/** Optional TextInput */
const ExampleOptional = () => {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstName"
      onChange={() => {}}
    />
  );
};

export default ExampleOptional;
