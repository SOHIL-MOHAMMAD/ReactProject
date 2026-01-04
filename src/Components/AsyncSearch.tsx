import { useState, useEffect, useRef } from "react";

// 1. Data Type
interface ResultItem {
  id: number;
  name: string;
}

// Mock API (Search Simulation)
const fakeApiSearch = async (query: string): Promise<ResultItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allFruits = [
        "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry",
        "Cherry", "Coconut", "Cranberry", "Date", "Dragonfruit", "Durian",
        "Elderberry", "Fig", "Grape", "Guava", "Kiwi", "Lemon", "Mango"
      ];
      
      // Filter logic (Case insensitive)
      const filtered = allFruits
        .filter(fruit => fruit.toLowerCase().includes(query.toLowerCase()))
        .map((fruit, index) => ({ id: index, name: fruit }));
        
      resolve(filtered);
    }, 500); // 0.5 sec delay
  });
};



const AsyncSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<ResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Dropdown dikhana hai ya nahi?

  // LOGIC: Debounce + API Call
  useEffect(() => {
    // Agar input khali hai, to suggestions hata do aur return ho jao
    if (query.length === 0) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    // 1. Timer Set Karo
    const timerId = setTimeout(async () => {
      setLoading(true);
      setIsOpen(true);
      
      try {
        const results = await fakeApiSearch(query);
        setSuggestions(results);
      } catch (error) {
        console.error("Search failed", error);
      } finally {
        setLoading(false);
      }
    }, 500); // 500ms Debounce

    // 2. Cleanup (Agar user jaldi type kare to purana timer cancel)
    return () => clearTimeout(timerId);
  }, [query]);

  // LOGIC: Jab user item select kare
  const handleSelect = (name: string) => {
    setQuery(name);     // Input mein value bhar do
    setIsOpen(false);   // Dropdown band kar do
  };

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h3>Async Search Autocomplete</h3>
      
      {/* Wrapper Div (Relative Position zaroori hai) */}
      <div style={{ position: "relative", width: "300px" }}>
        
        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fruits (e.g., Apple)..."
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            boxSizing: "border-box" // Padding width mein jud jaye
          }}
        />

        {/* Loading Spinner (Input ke andar right side par) */}
        {loading && (
          <span style={{ position: "absolute", right: "10px", top: "10px" }}>
            ⏳
          </span>
        )}

        {/* Dropdown List (Overlay) */}
        {isOpen && suggestions.length > 0 && (
          <ul
            style={{
              position: "absolute", // Input ke upar tairta rahega
              top: "100%",        // Input ke theek niche
              left: 0,
              width: "100%",
              border: "1px solid #ccc",
              borderTop: "none",
              margin: 0,
              padding: 0,
              listStyle: "none",
              backgroundColor: "white",
              zIndex: 10,         // Baaki content ke upar dikhe
              maxHeight: "200px", // Scrollable agar list lambi ho
              overflowY: "auto",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            {suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelect(item.name)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee"
                }}
                // Hover effect ke liye inline CSS mushkil hai, 
                // isliye simple rakha hai. Real app mein CSS classes use karein.
                onMouseEnter={(e) => e.currentTarget.style.background = "#f0f0f0"}
                onMouseLeave={(e) => e.currentTarget.style.background = "white"}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}

        {/* No Results State */}
        {isOpen && !loading && suggestions.length === 0 && query.length > 0 && (
          <div style={{
            position: "absolute",
            top: "100%",
            width: "100%",
            padding: "10px",
            background: "white",
            border: "1px solid #ccc",
            color: "#888"
          }}>
            No fruits found 🍎
          </div>
        )}
      </div>
    </div>
  );
  
}

export default AsyncSearch
