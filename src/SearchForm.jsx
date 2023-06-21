import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form search-input">
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input"
        />
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
