export default function Home() {
  return (
    <div style={{
      backgroundColor: "#111111",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      direction: "rtl"
    }}>
      <div style={{ position: "absolute", top: "20px", right: "30px", fontSize: "18px", opacity: 0.8 }}>
        בסיעתא דשמיא
      </div>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        סדק של אור
      </h1>
      <p style={{ fontSize: "20px", opacity: 0.7 }}>
        כדי לפתוח את הסדק האישי שלך – היכנס בשקט פנימה.
      </p>
    </div>
  );
}
