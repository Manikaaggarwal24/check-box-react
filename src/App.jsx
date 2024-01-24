import React, { useState } from 'react';

const App = () => {
  const [data] = useState([
    { id: 1, email: 'Gelon@gmail.com', name: 'Gelon', category: 'Type1', wallet1: '1568789', wallet2: '4568789', wallet3: '8568789' },
    { id: 2, email: 'Sandre@gmail.com',name: 'Sandre', category: 'Type2',wallet1: '8568789', wallet2: '9668789', wallet3: '4568789' },
    { id: 3,email: 'Laady@gmail.com', name: 'Laady', category: 'Type1',wallet1: '4568789', wallet2: '42268789', wallet3: '3268789' },
    { id: 4, email: 'Mary@gmail.com',name: 'Mary', category: 'Type2',wallet1: '56565789', wallet2: '4787868789', wallet3: '9668789' }, 
    { id: 5,email: 'Peter@gmail.com', name: 'Peter', category: 'Type3',wallet1: '78768789', wallet2: '4778789', wallet3: '748789' },
    { id: 6,email: 'ggmmlter@gmail.com', name: 'ggmmlter', category: 'Type4',wallet1: '75698789', wallet2: '11568789', wallet3: '4568789' },
    { id: 7,email: 'golmiter@gmail.com', name: 'ggmmlter', category: 'Type3',wallet1: '4568789', wallet2: '168789', wallet3: '1468789' },
    { id: 8,email: 'tenaceter@gmail.com', name: 'tencaeter', category: 'Type1',wallet1: '12568789', wallet2: '45468789', wallet3: '7768789' },
    // Add more items as needed
  ]);

  const [selectedCategories, setSelectedCategories] = useState([false]);
  const [selectAll, setSelectAll] = useState();

  

  const handleCheckboxChange = (category) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((selectedCategory) => selectedCategory !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedSelectedCategories);
  };

  const handleSelectAll = () => {
    setSelectAll(selectAll);
    setSelectedCategories(selectAll ? [] : data.map((item) => item.category));
  };

  const filteredData = data.filter((item) =>
    selectedCategories.length === 0 ? true : selectedCategories.includes(item.category)
  );


  function getItemColor(category) {
    switch (category) {
      case 'Type1':
        return 'lightblue';
      case 'Type2':
        return 'lightgreen';
      case 'Type3':
        return 'lightpink';
        case 'Type4':
        return 'palevioletred';
      default:
        return 'white'; // Default color for unknown categories
    }
  }
  

  return (
    <div>
      <h1 align="center"> Checkbox </h1>

      <div>
        <h2 align="center">Filter by Category:</h2>
        <div align="center">
          <input 
            type="checkbox"
            id="selectAll"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <label  htmlFor="selectAll" >Select All</label>
        </div>
        {Array.from(new Set(data.map((item) => item.category))).map((category) => (
          <div align="center" key={category}>
            <input 
              type="checkbox"
              id={`checkbox-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
            <label htmlFor={`checkbox-${category}`}>{category}</label>
          </div>
        ))}
      </div>

      <div>
        <h2 align="center">Filtered Data:</h2>
        <table align="center">
          <thead>
            <tr>
              <th align="center">ID</th>
              <th align="center">Email</th>
              <th align="center">Name</th>
              
              <th align="center">Wallet-1</th>
              <th align="center">Wallet-2</th>
              <th align="center">Wallet-3</th>

            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}style={{ backgroundColor: getItemColor(item.category) }}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                
                <td>{item.wallet1}</td>
                <td>{item.wallet2}</td>
                <td>{item.wallet3}</td>
              </tr>
            ))}
          </tbody>
        </table>





        
      </div>
    </div>
  );
};

export default App;

