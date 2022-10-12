import React, { useState } from "react";
import { Flex, List  } from '@chakra-ui/react';
import Button from "../Button";

const Pagination = ({ showPerPage , total, currentPage }) => {
  const [counter, setCounter] = useState(0);

 const onHandleButtonClick = (value) => {
  setCounter(value)
  currentPage(value)
 }

  const onButtonClick = (type) => {
    console.log("clicked")
    if (type === "prev") {
      if (counter === 0) {
        currentPage(0);
        setCounter(0)
      } else {
       
        currentPage(counter - 1);
        setCounter(counter - 1)
      }
    } else if (type === "next") {
      // console.log(">>>counter",counter)
      // console.log(">>>Math.ceil(total / showPerPage)",Math.ceil(total / showPerPage))
      if (counter === Math.ceil(total / showPerPage)-1) {
        currentPage(counter);
        setCounter(0)
      } else {
        currentPage(counter + 1);
        setCounter(counter + 1)
      }
    }
  };
  return (
    <>
      <Flex justifyContent="space-evenly" p="10">
        <Button name="prev" handleOnClick={() => onButtonClick("prev")}></Button>
       
        {new Array(Math.ceil(total / showPerPage)).fill("").map((el, index) => (
          <List key={index}>
              <Button handleOnClick={() => onHandleButtonClick(index)} name={index+1}></Button>
          </List>
        ))}
        <Button name="next" handleOnClick={() => onButtonClick("next")}></Button>    
      </Flex>
    </>
  );
};

export default Pagination;