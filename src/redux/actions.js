import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const addContact = createAction(
  "addContact",
  function prepare({ name, number }) {
    return {
      payload: {
        name,
        number,
        id: shortid.generate(),
      },
    };
  }
);

export const deleteContact = createAction("deleteContact");

export const changeFilter = createAction("changeFilter");
