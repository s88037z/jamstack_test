import React, { useEffect, useState } from "react";
import ListLink from "./components/ListLink";
import LinkForm from './components/LinkForm';


function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    const resp = await fetch("/api/getLinks");
    const links = await resp.json();
    setLinks(links);
  };


  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">ALL Links!</h1>
      <LinkForm refreshLinks={loadLinks} />
      <ListLink links={links} refreshLinks={loadLinks}/>
    </div>
  );
}

export default App;
