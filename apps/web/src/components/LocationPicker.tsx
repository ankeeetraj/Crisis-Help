import React, { useState, useEffect } from 'react';
import styles from '../styles/LocationPicker.module.css';

interface LocationPickerProps {
  onLocationChange: (lat: number, lng: number) => void;
  initialLat?: number;
  initialLng?: number;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
  onLocationChange,
  initialLat,
  initialLng,
}) => {
  const [lat, setLat] = useState<number>(initialLat || 20.5937); // Default to India center
  const [lng, setLng] = useState<number>(initialLng || 78.9629);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (initialLat && initialLng) {
      setLat(initialLat);
      setLng(initialLng);
      onLocationChange(initialLat, initialLng);
    }
  }, [initialLat, initialLng, onLocationChange]);

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setIsGettingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLat = position.coords.latitude;
        const newLng = position.coords.longitude;
        setLat(newLat);
        setLng(newLng);
        onLocationChange(newLat, newLng);
        setIsGettingLocation(false);
      },
      (error) => {
        setLocationError('Unable to get your location. Please enter coordinates manually.');
        setIsGettingLocation(false);
      }
    );
  };

  const handleLatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setLat(value);
      onLocationChange(value, lng);
    }
  };

  const handleLngChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setLng(value);
      onLocationChange(lat, value);
    }
  };

  return (
    <div className={styles.locationPicker}>
      <div className={styles.locationControls}>
        <button
          type="button"
          onClick={getCurrentLocation}
          disabled={isGettingLocation}
          className={styles.gpsButton}
        >
          {isGettingLocation ? 'Getting Location...' : '📍 Use My Location'}
        </button>
        {locationError && <p className={styles.error}>{locationError}</p>}
      </div>
      <div className={styles.coordinates}>
        <div className={styles.coordinateInput}>
          <label htmlFor="lat">Latitude:</label>
          <input
            id="lat"
            type="number"
            step="0.000001"
            value={lat}
            onChange={handleLatChange}
            placeholder="20.5937"
          />
        </div>
        <div className={styles.coordinateInput}>
          <label htmlFor="lng">Longitude:</label>
          <input
            id="lng"
            type="number"
            step="0.000001"
            value={lng}
            onChange={handleLngChange}
            placeholder="78.9629"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationPicker;

