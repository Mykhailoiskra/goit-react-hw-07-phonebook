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
    return await phoneBookApi.addContact(contact);
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await phoneBookApi.deleteContact(id);
    return id;
  }
);
