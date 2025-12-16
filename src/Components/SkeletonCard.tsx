
const SkeletonCard = () => {
  return (
    <div 
    style={{
      border :"1px solid #ddd",
      padding : "20px",
      borderRadius : "8px",
      marginBottom : '10px',
      background : 'white'
    }}>
      <div className="skeleton " style={{height:'24px' , width: '60%', marginBottom : '15px'}}></div>
      <div className="skeleton " style={{height:'16px' , width: '80%' , marginBottom : '10px'}}></div>
      <div className="skeleton " style={{height : '16px' , width : '40%'}}></div>
    </div>
  )
}

export default SkeletonCard
