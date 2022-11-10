import { Input } from 'antd';

function Search({search, setSearch}) {

  function handleChange(e){
    setSearch(e.target.value)
  }

  return (
    <Input value={search} type="text" onChange={handleChange} placeholder='Digite o nome da comida' />
  );
}

export default Search;