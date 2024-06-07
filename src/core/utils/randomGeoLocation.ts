const getRandomCoordinate = (min:number, max:number) => {
    return Math.random() * (max - min) + min;
}

export const getRandomGeolocation = () => {
    const minLat = (-4.2); 
    const maxLat = (12.5); 
    const minLng = (-79.0);
    const maxLng = (-66.9); 

    const latitude = getRandomCoordinate(minLat, maxLat);
    const longitude = getRandomCoordinate(minLng, maxLng);

    return {
        latitude: latitude,
        longitude: longitude
    };
}

export const getRandomCoordinateInRadius = (centerLat: number, centerLng: number, radius: number) => {
    const getRandomOffset = (max: number) => Math.random() * max * (Math.random() < 0.5 ? -1 : 1);

    const radiusInDegrees = radius / 111.32; // 1 degree ~ 111.32 km

    const offsetLat = getRandomOffset(radiusInDegrees);
    const offsetLng = getRandomOffset(radiusInDegrees);

    const latitude = centerLat + offsetLat;
    const longitude = centerLng + offsetLng;

    return {
        latitude: latitude,
        longitude: longitude
    };
}