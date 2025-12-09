import { useEffect, useState } from "react"

const SearchWithDebouncing = () => {
  const [SearchItem , SetsearchItem] = useState<string>("")
  const [debounceItem , SetdebounceItem] = useState<string>("")
   useEffect(()=>{
    const timeID = setTimeout(()=>{
      SetdebounceItem(SearchItem)
    },500)

    return ()=>{
      clearTimeout(timeID)

    }
   },[SearchItem])


   useEffect(()=>{
    if(debounceItem){
      console.log(`API call sent for : ${debounceItem}`)
    }
   },[debounceItem])
  return (
    <div style={{padding:"20px"}}>
      <h1>Dcounde search</h1>
      <input type="text"
      placeholder="search something..."
      value={SearchItem}
      onChange={(e)=>SetsearchItem(e.target.value)}
      style={{padding:"10px",width:"300px"}} />
      <p>typing : {SearchItem}</p>
      <p style={{fontWeight:"bold",color:"green"}}>
        searching fot : {debounceItem}
      </p>
    </div>
  )
}

export default SearchWithDebouncing

//  Iske Peeche Ka Logic (Deep Dive)
// Aapne pichli baar logic pucha tha, iska logic bohot interesting hai. Isme "Cleanup Function" (return () => clearTimeout(...)) hero hai.

// Step-by-step dekhte hain jab user "R-E-A-C-T" type karta hai:

//  1) User ne dabaya 'R':

// > useEffect chala.

// > Timer 1 shuru hua (500ms ka countdown).

// 2) User ne dabaya 'E' (maano 100ms baad):

// > searchTerm change hua -> useEffect fir se trigger hua.

// > Cleanup chala: Isne Timer 1 ko kill kar diya (kyunki abhi 500ms pure nahi hue the). 🔪

// >  Naya Timer 2 shuru hua.

// 3)  User ne dabaya 'A' (fir 100ms baad):

// > Cleanup chala: Isne Timer 2 ko kill kar diya. 🔪

// > Naya Timer 3 shuru hua.

// 4) ... Aise hi chalta rahega jab tak user type karta rahega.

// 5) User type karke ruk gaya:

// > Aakhri Timer (Timer 5) shuru hua.

// >  Ab user ne kuch nahi dabaya, toh cleanup run nahi hua.

// >  500ms pure hue -> setDebouncedTerm chala -> API call gayi. ✅