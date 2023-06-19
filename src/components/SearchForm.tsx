import { useEffect } from "react";
import { useState } from "react";

const SearchForm = (props: any) => {
  const [query, setQuery] = useState("");

  const submitForm = (evt: any) => {
    evt.preventDefault();
    props.refreshResults(query);
  }

  useEffect(() => {

  }, []);

  return (
    <form onSubmit={submitForm}>
      <input onChange={(evt) => setQuery(evt.target.value)} value={query} type="text" placeholder="Search..." name="query" id="query" />
      <input type="submit" value="Perform Search"/>
    </form>
  );
}

export default SearchForm;
