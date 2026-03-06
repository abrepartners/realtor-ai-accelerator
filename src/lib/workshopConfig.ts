const readEnv = (key: string) => {
  const value = import.meta.env[key];
  if (typeof value !== "string") return "";
  return value.trim();
};

const city = readEnv("VITE_WORKSHOP_CITY") || "Bryant";
const address =
  readEnv("VITE_WORKSHOP_ADDRESS") ||
  "107 Progress Drive, Suite 200, Bryant, Arkansas, 72022";
const eventStartIso = readEnv("VITE_WORKSHOP_EVENT_START_ISO") || "2026-03-25T11:00:00-05:00";
const timeZoneLabel = readEnv("VITE_WORKSHOP_TIME_ZONE_LABEL") || "CT";
const locationLabel = address.toLowerCase().includes(city.toLowerCase())
  ? address
  : `${address} · ${city}`;

export const workshopConfig = {
  dateLabel: "March 25, 2026",
  timeLabel: "11:00 AM - 1:00 PM",
  timeZone: "CST",
  formatLabel: "In-Person Workshop",
  seatCap: 40,
  address,
  city,
  eventStartIso,
  timeZoneLabel,
  locationLabel,
};
