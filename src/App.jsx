import { useEffect, useState } from "react";

import Nav from "./components/Nav"
import ListCast from "./components/ListCast"
import Modals from "./components/Modals";

import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";
import "./App.css";

function App() {
  const name = 'Stargazers';
  let [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div className="container">
      <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <img src="images/group.svg" alt="StarGazers Group" />
      <hgroup>
        <h1>Meet the {name}</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      </hgroup>
      {memberInfo &&
        <Modals
          member={memberInfo}
          handleClose={() => { setMemberInfo(null) }}
          handleChange={(info) => { setMemberInfo(cast[info]) }}
        />
      }
      <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
    </div>
  )
}

export default App;
