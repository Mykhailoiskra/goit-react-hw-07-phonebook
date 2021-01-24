import { createAsyncThunk } from "@reduxjs/toolkit";
import * as phoneBookApi from "services/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await phoneBookApi.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    // const contacts = await phoneBookApi.fetchContacts();
    // if (contacts.find((item) => item.name === contact.name)) {
    //   alert(`${contact.name} is already in the list`);
    //   return;
    // }
    return await phoneBookApi.addContact(contact);
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    return await phoneBookApi.deleteContact(id);
  }
);
