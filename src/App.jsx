import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
const App = () => {
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      );
      setUser(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [index]);

  let printUser = (
    <h3 className="text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      Loading....
    </h3>
  );
  if (user.length > 0) {
    printUser = user.map(function (elem, id) {
      return (
        <div key={id}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto text-white p-4">
      <div className="flex flex-wrap gap-4 pl-15 h-[90%]">{printUser}</div>
      <div className="flex gap-2 justify-center items-center p-4">
        <Buttons index={index} setIndex={setIndex} setUser={setUser} />
      </div>
    </div>
  );
};

export default App;
