import { useMemo, useState } from "react";

interface Product {
  id : number;
  name:string;
  categories : "Electronics" | "Clothing" | "Books";
  price : number
}

const allProduct :  Product[] = [
  {id :1, name:"laptop",categories:"Electronics",price:50000},
  {id :2, name:"T-shirt",categories:"Clothing",price:500},
  {id :3, name:"React Book",categories:"Books",price:1200},
  {id :4, name:"Mobile",categories:"Electronics",price:15000},
  {id :5, name:"jeans",categories:"Clothing",price:2000},
]

const FilterSort = () => {
  const [selectedCategories, SetSelectedCategories] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("low-to-high");

  const processData = useMemo(()=>{
    let data = [...allProduct];

    if(selectedCategories !== "All"){
      data = data.filter((item)=> item.categories === selectedCategories)
    }
    data.sort((a,b)=>{
      if(sortOrder === "low-to-high"){
        return a.price - b.price;
      } else if(sortOrder === "high-to-low"){
        return b.price - a.price;
      } else if(sortOrder === "name-asc"){
        return a.name.localeCompare(b.name)
      }
      return 0;
    });
    return data;
  },[selectedCategories,sortOrder])
  return (
    <div style={{padding:"20px"}}>
      <h1>Shop System</h1>
      <div style={{marginBottom:"20px",display:"flex",gap:"10px"}}>
        <select name="" id=""
        onChange={(e)=>SetSelectedCategories(e.target.value)}
        style={{padding:"8px"}}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>

          <select name="" id=""
        onChange={(e)=>setSortOrder(e.target.value)}
        style={{padding:"8px"}}
        >
          <option value="low-to-high">Price : Low to High</option>
          <option value="high-to-low">Price High to Low</option>
          <option value="name-asc">Nmae : A-Z</option>
        </select>
      </div>      

      <ul style={{listStyle:"none",padding:0}}>
        {processData.map((product)=>(
          <li
          key={product.id}
          style={{
            border:"1px solid #ddd",
            padding:"10px",
            marginBottom :"5px",
            display :"flex",
            justifyContent : "space-between"
          }}>
            <span>{product.name} {product.categories}</span>
            <strong>{product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterSort
