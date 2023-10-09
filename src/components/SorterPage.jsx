import { useEffect, useState } from "react";

export default function SorterPage({ onSort, setItems }) {
  const [sorter, setSorter] = useState("");

  const handleSortChange = (props) => {
    setSorter(props);
    onSort(props);
  };

  useEffect(() => {
    const fetchSorter = async () => {

      try {
        
        const response = await fetch(
          `https://fakestoreapi.com/products?sort=${sorter}`
        );
        const result = await response.json();
        setItems(result);
        console.log(result);

      } catch (error) {
        console.log(error);
      }
    };
    if (sorter !== "") {
      fetchSorter();
    }
  }, [sorter, setItems]);

  return (
    <div className="">
      <select
        value={sorter}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="ascending">Ascending (a-z)</option>
        <option value="descending">Descending (z-a)</option>
      </select>
    </div>
  );
}
