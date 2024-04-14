import {useState} from 'react'

function Lec14RenderingLists() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: 'Item 1' },
    { id : crypto.randomUUID(), name: 'Item 2'} , 
  ])

  function addItem() {
    setItems(currentItems => {
      return [
        ...currentItems,
        { id: crypto.randomUUID(), name: `Item ${currentItems.length + 1}` }
      ]
    
    })
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>

      {/* Rendering a List --->  */}
      {/* <pre>{[ <div>1</div>, <div>2</div>, <div>3</div> , <div>4</div> ]}</pre> */} 

      <pre>
        {items.map(item => {
          // providing unique key to each item is nessesary as it helps react to identify each item uniquely  
          return <div key={item.id}>{item.name}</div>
        })
        }
      </pre>
    </div>
  )
}

export default Lec14RenderingLists