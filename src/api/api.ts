import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import type { IRawTodos, ITodo, ITodos } from "../lib/Models/models";

const mainUrl = "http://localhost:4000/api/todos/";

const preProcessing = (data: IRawTodos, status: number, statusText: string) => {
  const newData: ITodos[] = [];
  if (status === 200) {
    Object.keys(data).map((key) =>
      newData.push({
        _id: data[key]._id,
        __v: data[key].__v,
        done: data[key].done,
        text: data[key].text,
      } as ITodos)
    );
  } else {
    console.log(statusText);
  }
  return newData;
};

export const _callGet = async () => {
  try {

    const res = await axios.get(mainUrl);
    return preProcessing(res.data, res.status, res.statusText);

  } catch (error) {
    console.error(error);
    return [];
  }
};

export const _callPost = async (data: ITodo) => {
  try {

    const res = await axios.post(mainUrl, JSON.stringify({ text: data.text }), {
      headers: { "Content-Type": "application/json" },
    } as AxiosRequestConfig);
    return preProcessing(res.data, res.status, res.statusText);

  } catch (error) {
    console.error(error);
    return [];
  }

};

export const _callDel = async (id: string) => {
  try {

    const res = await axios.delete(mainUrl + id);
    return preProcessing(res.data, res.status, res.statusText);

  } catch (error) {
    console.error(error);
    return [];
  }

};

export const _callPatch = async (id: string, done: boolean) => {
  try {

    const res = await axios.patch(mainUrl + id, JSON.stringify({ done: !done }), {
      headers: { "Content-Type": "application/json" },
    } as AxiosRequestConfig);
    return preProcessing(res.data, res.status, res.statusText);
    
  } catch (error) {
    console.error(error);
    return [];

  }
};