import axios from "axios";
import { fetchingInProgress, fetchingSuccess, fetchingError} from "./contactsSlices";

axios.defaults.baseURL = "https://67419103e4647499008e1340.mockapi.io";

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get("/contacts");
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message || "Failed to fetch contacts"));
  }
};