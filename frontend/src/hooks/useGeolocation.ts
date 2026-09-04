import { useState } from "react";

export const useGeolocation =() => {
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude 
            })
        },
        () => {
            setError('Geolocation denied')
        })
    } 

    return { location, error, getLocation };
};

export default useGeolocation;