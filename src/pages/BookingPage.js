import Heading from "./reservePages/BookingForm";
import ReservationForm from "./reservePages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../bookingAPI";

export default function BookingPage() {
  function updateTimes(date) {
    return date;
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
