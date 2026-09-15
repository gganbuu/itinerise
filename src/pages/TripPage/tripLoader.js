import { data } from "react-router";
import { getTrip } from "../../data/trips";

export async function tripLoader({params}) {
    const trip = getTrip(params.tripId);

    if (!trip) {
        throw data("Trip not found", {status: 404})
    }

    return trip;
}