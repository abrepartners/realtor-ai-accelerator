import { useEffect, useMemo, useState } from "react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

const EMPTY_STATE: CountdownState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: true,
};

const getState = (targetMs: number): CountdownState => {
  if (!Number.isFinite(targetMs)) return EMPTY_STATE;

  const delta = targetMs - Date.now();
  if (delta <= 0) return EMPTY_STATE;

  const totalSeconds = Math.floor(delta / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    expired: false,
  };
};

export const useCountdown = (targetIso: string) => {
  const targetMs = useMemo(() => Date.parse(targetIso), [targetIso]);
  const [state, setState] = useState<CountdownState>(() => getState(targetMs));

  useEffect(() => {
    setState(getState(targetMs));
    if (!Number.isFinite(targetMs)) return undefined;

    const timer = window.setInterval(() => {
      setState(getState(targetMs));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetMs]);

  return state;
};
