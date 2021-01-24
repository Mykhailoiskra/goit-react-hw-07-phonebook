import axios from "axios";

axios.defaults.baseURL = "http://localhost:1234";

export function addContact(contact) {
  return axios.post("/contacts", contact).then(({ data }) => data);
}

export function deleteContact(contactId) {
  return axios.delete(`/contacts/${contactId}`);
}

export function updateContact(contactId, update) {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
}
export function fetchContacts() {
  return axios.get("/contacts").then(({ data }) => data);
}
