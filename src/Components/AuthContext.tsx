import { createContext, useContext, useState, ReactNode } from "react";

// 1. Types Define karo
interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;      // Agar null hai, matlab logged out
  login: (username: string) => void;
  logout: () => void;
}

// Context create kiya (Empty initially)
const AuthContext = createContext<AuthContextType | null>(null);

// 2. Provider Component (Jo app ko wrap karega)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock Login Function
  const login = (username: string) => {
    setUser({ username }); // Real app mein yahan API call hogi
  };

  // Mock Logout Function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook (Taaki baar baar useContext na likhna pade)
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};