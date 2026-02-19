const readEnv = (key: string) => {
  const value = import.meta.env[key];
  if (typeof value !== "string") return "";
  return value.trim();
};

const address = readEnv("VITE_WORKSHOP_ADDRESS") || "Address shared in registration confirmation email";
const city = readEnv("VITE_WORKSHOP_CITY") || "Little Rock, AR";

export const workshopConfig = {
  dateLabel: "March 25, 2026",
  timeLabel: "10:00 AM - 12:00 PM",
  timeZone: "CST",
  formatLabel: "In-Person Workshop",
  seatCap: 40,
  address,
  city,
};
