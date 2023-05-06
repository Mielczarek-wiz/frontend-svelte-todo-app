import type { ITodos } from "$lib/Models/models";
import { _callGet } from "../api/api";

// Function which get data when the app is started
export async function load() {
  let res:ITodos[] = []
  try {
    res = await _callGet();
  }
  catch(error){
    console.error(error);
  }
  return {...res};
}