import React, { useState } from "react";
import {
  InputGroup,
  Button,
  InputGroupAddon,
  FormGroup,
  Input,
} from "reactstrap";

function InputField(props) {
  const [input, setInput] = useState("");

  const inputValue = (e) => {
    setInput(e.target.value);
  };

  const searchValue = () => {
    props.searchRecipe(input);
  };

  return (
    <FormGroup className={props.heroInput}>
      <InputGroup>
        <Input
          type="text"
          name="text"
          placeholder={props.placeholder}
          autoComplete="off"
          value={input}
          onChange={inputValue}
        />
        <InputGroupAddon addonType="prepend">
          <Button onClick={searchValue} className="search_btn">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  );
}

export default InputField;
