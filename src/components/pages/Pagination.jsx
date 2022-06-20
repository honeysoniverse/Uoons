import React, { useState, useEffect } from "react";
import { Flex, Link, List, ListItem } from '@chakra-ui/react'
import { colors } from "../../resources/colors";
import Button from "../Button";
import { CPseudoBox } from '@chakra-ui/vue'
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <>
      <Flex justifyContent="space-evenly" p="10">
        <Link href="#" onClick={() => onButtonClick("prev")}>Previous</Link>

        {new Array(Math.ceil(total / showPerPage)).fill("").map((el, index) => (
          <List>
            <ListItem>
              <Link href="#" onClick={() => setCounter(index + 1)}>
                <Button name={index+1}></Button>
            </Link>
            </ListItem>
          </List>
        ))}
        <List>
          <ListItem>
            <Link href="#" onClick={() => onButtonClick("next")}>Next</Link>
          </ListItem>
        </List>
      </Flex>
    </>
  );
};

export default Pagination;