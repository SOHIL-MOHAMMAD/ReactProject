import React, { useState, useEffect } from "react";

export default function ImageUploader() {
  // 1. State: Asli file (Server ke liye) aur Preview URL (Dikhane ke liye)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // 2. LOGIC: Jab bhi file select ho
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check karo file exist karti hai ya nahi
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    // Pehli file uthao
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // 3. LOGIC: Preview Generate Karna + Memory Cleanup
  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    // Magic Line: Browser ki memory mein ek temporary URL banao
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // CLEANUP FUNCTION (Sabse Important)
    // Jab component unmount ho ya naya photo select ho, purana URL delete kar do.
    // Agar ye nahi karoge, to browser ki memory full ho jayegi.
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Upload Profile</h1>

      {/* Input Field */}
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="file" 
          accept="image/*" // Sirf images allow karo
          onChange={handleFileSelect} 
        />
      </div>

      {/* Preview Area */}
      <div 
        style={{
          border: "2px dashed #ccc",
          padding: "10px",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          background: "#f9f9f9"
        }}
      >
        {preview ? (
          <div style={{ textAlign: "center" }}>
            <img 
              src={preview} 
              alt="Preview" 
              style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }} 
            />
            <p style={{ fontSize: "12px", color: "green" }}>
              ✅ File Selected: {selectedFile?.name}
            </p>
          </div>
        ) : (
          <p style={{ color: "#aaa" }}>No image selected</p>
        )}
      </div>

      {/* Reset Button */}
      {preview && (
        <button 
          onClick={() => setSelectedFile(null)}
          style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}
        >
          Remove Image
        </button>
      )}
    </div>
  );
}