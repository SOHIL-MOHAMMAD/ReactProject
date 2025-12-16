import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard" ;

interface User {
  id :number ;
  name :string ;
  email : string;
  website : string;
}
const UseListWithSkeleton = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading , setLoading] = useState<boolean>(true)


  useEffect(()=>{
    setTimeout(async()=>{
      try{
        const res =await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUser(data)
      } catch (err){
        console.error(err)
      } finally {
        setLoading(false)
      }
    },3000)
  },[])
  return (
    <>
     <div style={{padding:'20px', maxWidth: '500px' , margin: '0 auto'}}>
      <h1>users Directory</h1>

      {loading ? (
        Array.from({length :6}).map((_,index)=>(
          <SkeletonCard key={index}/>
        ))
      ): (
        user.map((users)=> (
          <div 
          key={users.id}
          style={{
            border : '1px solid #ddd',
            padding: '20px',
            borderRadius : '8px',
            marginBottom : '10px'
          }}>
            <h3 style={{margin : ' 0 0 10px 0'}}>{users.name}</h3>
            <p style={{ margin :'0 0 5px 0', color : '#555'}}>{users.email}</p>
            <p style={{margin: '0' , color:'#777'}}>{users.website}</p>
          </div>
        ))
      )}
    </div> 
    </>
  )
}

export default UseListWithSkeleton
