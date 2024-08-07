import QRCode from "react-qr-code";
import { useState } from "react";

export default function QrGenerate() {
  const [qrCode, setQrCode] = useState<string>("");
  const [input, setInput] = useState<string>("");

  function GenerateQr() {
    setInput("")
    setQrCode(input)
  }

  return (
    <div >
      <div
       style={{
         position:"relative",
         top:"15px",
         left:"570px",
         fontSize:"50px",
         fontFamily:"cursive",
         fontWeight:"bolder"
      }}
      >QR Code Generator</div>

      <div
       style={{
        position:"relative",
        top:"40px",
        left:"630px",
        fontSize:"50px"
     }}
      >
        <input
          onChange={(f) => setInput(f.target.value)}
          name="Generated-Qrcode"
          value={input}
          type="text"
          placeholder="Enter text to generate QR code"
          style={{
            height:"3vh",
            width:"30vh"
          }}
        />

        <button
          disabled={input && input.trim() !== "" ? false : true}
            
          onClick={GenerateQr}
          style={{
            height:"25px",
            width:"20vh"
          }}
        >
          Generate QR Code
        </button>
      </div>

      <div 
        style={{
          position:"relative",
          left:"610px",
          top:"100px"
        }}>
        <QRCode id="code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
