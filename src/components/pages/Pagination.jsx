import React, { useState, useEffect } from "react";
import { Flex, Link, List, ListItem } from '@chakra-ui/react';
import Button from "../Button";

const Pagination = ({ showPerPage , total, currentPage }) => {
  const [counter, setCounter] = useState(0);

 const onHandleButtonClick = (value) => {
  setCounter(value)
  currentPage(value)
 }

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 0) {
        currentPage(0);
        setCounter(0)
      } else {
       
        currentPage(counter - 1);
        setCounter(counter - 1)
      }
    } else if (type === "next") {
      console.log(">>>counter",counter)
      console.log(">>>Math.ceil(total / showPerPage)",Math.ceil(total / showPerPage))
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
        <Button name="<<">
        <Link href="#" onClick={() => onButtonClick("prev")} style={{textDecoration:"none"}}></Link>

        </Button>
       
        {new Array(Math.ceil(total / showPerPage)).fill("").map((el, index) => (
          <List key={index}>
            <ListItem>
              <Link href="#" onClick={() => onHandleButtonClick(index)} style={{textDecoration:"none"}}>
                <Button name={index+1}></Button>
            </Link>
            </ListItem>
          </List>
        ))}
        <Button name=">>">
        <Link href="#" onClick={() => onButtonClick("next")} style={{textDecoration:"none"}}></Link>
        </Button>
           
      </Flex>
    </>
  );
};

export default Pagination;