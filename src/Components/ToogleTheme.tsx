import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const ToogleTheme = () => {
  const [theme , setTheme] = useState<Theme>(()=>{
    const savedTheme = localStorage.getItem("app-theme");

    return (savedTheme as Theme) || "light"
  });

  useEffect(()=>{
    localStorage.setItem("app-theme",theme)
    document.body.className = theme;
  },[theme])

  const toogletheme = ()=>{
    setTheme((prev)=> (prev === "light" ? "dark" : "light"))
  }
  return (
    <div className="container">
      <h1>Dark Mode Example</h1>
      <p>current Theme : <strong>{theme.toUpperCase()}</strong></p>

      <button
      onClick={toogletheme}
      style={{
        padding:"10px 20px",
        cursor:"pointer",
        borderRadius:"5px",
        border:"none",
        backgroundColor: theme === "dark" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        fontWeight: "bold"
      }}>
        switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>      
    </div>
  )
}

export default ToogleTheme
