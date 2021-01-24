import firebase from "firebase";
import initializeApp = firebase.initializeApp;
import { Item, StoryType, User } from "@/api/api-types";

initializeApp({
  databaseURL: "https://hacker-news.firebaseio.com"
});


const api = firebase.database().ref("/v0");

function fetch(child: string): Promise<unknown> {
  return api
    .child(child)
    .once("value")
    .then(snapshot => {
      const val = snapshot.val();
      if (val) {
        val.__lastUpdated = Date.now()
      }
      return val;
    });
}

export function fetchIdsByType(type: StoryType) {
  return fetch(`${type}stories`) as Promise<number[]>;
}

export function fetchItem(id: number) {
  return fetch(`item/${id}`) as Promise<Item>;
}

export function fetchItems(ids: number[]) {
  return Promise.all(ids.map(id => fetchItem(id)));
}

export function fetchListData(type: StoryType) {
  return fetchIdsByType(type).then(ids => fetchItems(ids));
}

export function fetchUser(id: number) {
  return fetch(`user/${id}`) as Promise<User>;
}
