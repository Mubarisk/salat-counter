import React, { useEffect, useState } from "react";
import "./Home.css";
import firebase from "../config";
function Home() {
  const [fajrC, setFajrC] = useState();
  const [duhrC, setDuhrC] = useState();
  const [esarC, setEsarC] = useState();
  const [magribC, setMagribC] = useState();
  const [ishaC, setIshaC] = useState();
  function fajr() {
    if (fajrC > 0) {
      setFajrC(fajrC - 1);
      firebase
        .firestore()
        .collection("salat")
        .doc("fajr")
        .update({ fajr: fajrC - 1 })
        .then(() => {
          console.log("ok");
        })
        .catch((err) => {
          console.log("err");
        });
    }
  }
  function duhr() {
    if (duhrC > 0) {
      setDuhrC(duhrC - 1);
      firebase
        .firestore()
        .collection("salat")
        .doc("duhr")
        .update({ duhr: duhrC - 1 })
        .then(() => {
          console.log("ok");
        })
        .catch((err) => {
          console.log("err");
        });
    }
  }
  function esar() {
    if (esarC > 0) {
      setEsarC(esarC - 1);
      firebase
        .firestore()
        .collection("salat")
        .doc("esar")
        .update({ esar: esarC - 1 })
        .then(() => {
          console.log("ok");
        })
        .catch((err) => {
          console.log("err");
        });
    }
  }
  function magrib() {
    if (magribC > 0) {
      setMagribC(magribC - 1);
      firebase
        .firestore()
        .collection("salat")
        .doc("magrib")
        .update({ magrib: magribC - 1 })
        .then(() => {
          console.log("ok");
        })
        .catch((err) => {
          console.log("err");
        });
    }
  }
  function isha() {
    if (ishaC > 0) {
      setIshaC(ishaC - 1);
      firebase
        .firestore()
        .collection("salat")
        .doc("isha")
        .update({ isha: ishaC - 1 })
        .then(() => {
          console.log("ok");
        })
        .catch((err) => {
          console.log("err");
        });
    }
  }
  useEffect(() => {
    firebase
      .firestore()
      .collection("salat")
      .doc("fajr")
      .get()
      .then((res) => {
        console.log(res.data());
        setFajrC(res.data().fajr);
      });
    firebase
      .firestore()
      .collection("salat")
      .doc("duhr")
      .get()
      .then((res) => {
        console.log(res.data());
        setDuhrC(res.data().duhr);
      });
    firebase
      .firestore()
      .collection("salat")
      .doc("esar")
      .get()
      .then((res) => {
        console.log(res.data());
        setEsarC(res.data().esar);
      });
    firebase
      .firestore()
      .collection("salat")
      .doc("magrib")
      .get()
      .then((res) => {
        console.log(res.data());
        setMagribC(res.data().magrib);
      });
    firebase
      .firestore()
      .collection("salat")
      .doc("isha")
      .get()
      .then((res) => {
        console.log(res.data());
        setIshaC(res.data().isha);
      });
  }, []);
  return (
    <div className="home">
      <div className="header">
        <h3 className="head">Khalaah Reminder 🕌</h3>
      </div>
      <div className="body">
        <table>
          <tr>
            <td>
              <div className="names">
                <div className="outer">
                  {" "}
                  <p className="inner"> Fajr </p>{" "}
                </div>
              </div>
            </td>
            <td>
              <div className="countmain">
                <span className="count">{fajrC ? fajrC : ""}</span>
              </div>
            </td>
            <td>
              <div className="buttons">
                <button onClick={fajr}>-</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="names">
                <div className="outer">
                  {" "}
                  <p className="inner"> Duhr </p>{" "}
                </div>
              </div>
            </td>
            <td>
              <div className="countmain">
                <span className="count">{duhrC ? duhrC : ""}</span>
              </div>
            </td>
            <td>
              <div className="buttons">
                <button onClick={duhr}>-</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="names">
                <div className="outer">
                  {" "}
                  <p className="inner"> Esar </p>{" "}
                </div>
              </div>
            </td>
            <td>
              <div className="countmain">
                <span className="count">{esarC ? esarC : ""}</span>
              </div>
            </td>
            <td>
              <div className="buttons">
                <button onClick={esar}>-</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="names">
                <div className="outer">
                  {" "}
                  <p className="inner"> Magrib</p>{" "}
                </div>
              </div>
            </td>
            <td>
              <div className="countmain">
                <span className="count">{magribC ? magribC : ""}</span>
              </div>
            </td>
            <td>
              <div className="buttons">
                <button onClick={magrib}>-</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="names">
                <div className="outer">
                  {" "}
                  <p className="inner"> Isha </p>{" "}
                </div>
              </div>
            </td>
            <td>
              <div className="countmain">
                <span className="count">{ishaC ? ishaC : ""}</span>
              </div>
            </td>
            <td>
              <div className="buttons">
                <button onClick={isha}>-</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Home;
