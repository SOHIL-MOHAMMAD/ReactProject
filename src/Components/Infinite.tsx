import { useEffect, useRef, useState } from "react";


interface Item{
  id : number;
  title : string;
}

const fetchMockData = async(page: number) :Promise<Item[]> =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const newItem = Array.from({length : 10}, (_,i)=>({
        id : (page -1 )* 10 +i+1,
        title : `Post Number ${(page -1 ) *10  + i +1}`,
      }));
      resolve(newItem)
    },1000)
  })
};   

const Infinite = () => {
  const [items, setItems] = useState<Item []>([]);
  const [page , setPage] = useState<number>(1);
  const [loading , setLoading] = useState<boolean>(false);

  const observerTarget = useRef<HTMLDivElement>(null)
  
  useEffect(()=>{
    const loadItem = async ()=>{
      const newItem = await fetchMockData(page);()

      setItems((prev)=> [...prev, ...newItem]);
      setLoading(false)
    }

    loadItem();
  },[page]);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (enteries)=>{
        if(enteries[0].isIntersecting && !loading){
          setPage((prevPage)=> prevPage +1)
        }
      },
      {threshold : 1.0}
    );
    if(observerTarget.current){
      observer.observe(observerTarget.current)
    }

    return ()=>{
      if(observerTarget.current){
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loading])

  return (
    <div style={{padding: '20px' , fontFamily : 'sans-serif'}}>
      <h1>infinite scroll example</h1>
      <ul>
        {items.map((item)=>(
          <li
          key={item.id}
          style={{
            padding: '20px',
            border : '1px solid #ccc',
            marginBottom: '10px',
            borderRadius : '8px',
            background : '#f9f9f9'
          }}
          >
            {item.title}
          </li>
        ))}
      </ul>

      {loading && <p style={{textAlign: 'center'}}>loading more items...</p>}
      <div ref={observerTarget} style={{height: '20px' , background: 'transparent'}}></div>
    </div>
  )
}

export default Infinite
