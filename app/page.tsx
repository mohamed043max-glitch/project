export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", fontFamily: "sans-serif", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      {/* Header */}
      <header style={{ padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e293b" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", background: "linear-gradient(to right, #38bdf8, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Luxury Store
        </h2>
        <span style={{ fontSize: "14px", backgroundColor: "#1e293b", padding: "6px 14px", borderRadius: "20px", color: "#38bdf8" }}>
          الحالة: يعمل بنجاح 🚀
        </span>
      </header>

      {/* Hero Section */}
      <main style={{ textAlign: "center", padding: "80px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px", lineHeight: "1.2" }}>
          مرحباً بك في أحدث منصات التسوق الإلكتروني
        </h1>
        <p style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "40px" }}>
          تم ربط المشروع بنجاح على Vercel وإعداد بيئة العمل بالكامل بأعلى كفاءة.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <button style={{ backgroundColor: "#38bdf8", color: "#0f172a", border: "none", padding: "12px 28px", fontSize: "16px", fontWeight: "bold", borderRadius: "8px", cursor: "pointer", transition: "0.3s" }}>
            استعرض المنتجات
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #1e293b", color: "#64748b", fontSize: "14px" }}>
        جميع الحقوق محفوظة © 2026
      </footer>
    </div>
  );
}
