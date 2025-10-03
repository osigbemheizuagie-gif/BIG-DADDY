import React, { useEffect, useState } from "react";

// List your preferred time zones and display names here
const timeZones = [
  { label: "UTC", zone: "UTC" },
  { label: "New York", zone: "America/New_York" },
  { label: "London", zone: "Europe/London" },
  { label: "Tokyo", zone: "Asia/Tokyo" },
  { label: "Lagos", zone: "Africa/Lagos" }
];

function DigitalClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>World Clock</h2>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
        {timeZones.map((tz) => (
          <div key={tz.zone} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", background: "#fafafa", minWidth: "150px" }}>
            <h3>{tz.label}</h3>
            <p style={{ fontSize: "1.5rem", margin: 0 }}>
              {now.toLocaleTimeString("en-US", { timeZone: tz.zone })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DigitalClock;