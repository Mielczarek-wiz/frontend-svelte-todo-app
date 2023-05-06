import { _callGet } from "../api/api";


export async function load() {
  const res = await _callGet();

  return {...res};
}