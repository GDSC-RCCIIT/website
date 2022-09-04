import React, { useContext, useEffect, useState } from "react";
import { db, realtimeDatabase } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import {
  child,
  ref as databaseRef,
  get,
  query,
  orderByValue,
} from "firebase/database";

const Database = React.createContext();

export function useDatabase() {
  return useContext(Database);
}

export function DatabaseProvider({ children }) {
  const [data, setData] = useState({});
  const [speakers, setSpeakers] = useState([]);
  const [events, setEvents] = useState({});

  useEffect(() => {
    getData();
    getSpeakersData();
  }, []);

  function getData() {
    get(child(databaseRef(realtimeDatabase), "/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
    get(
      query(child(databaseRef(realtimeDatabase), "events"), orderByValue("id"))
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEvents(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getSpeakersData() {
    getDocs(collection(db, "Speakers")).then((querySnapshot) => {
      const speakerList = [];
      querySnapshot.docs.forEach((doc) => {
        speakerList.push(doc.data());
      });
      setSpeakers(speakerList);
    });
  }

  const value = {
    data,
    speakers,
    events,
  };

  return <Database.Provider value={value}>{children}</Database.Provider>;
}
