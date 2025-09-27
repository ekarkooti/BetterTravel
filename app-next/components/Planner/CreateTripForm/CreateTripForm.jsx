"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateTripForm.module.css";
import Button from "../Button/Button";

export default function CreateTripForm({
  onTripCreate,
  isLoading,
  onDismissError,
}) {
  const router = useRouter();
  const [tripName, setTripName] = useState("My Trip to Rome");
  const [destination, setDestination] = useState("Rome, Italy");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCreate = () => {
    onDismissError();

    const newErrors = {};
    if (!tripName) newErrors.tripName = "Trip name is required.";
    if (!destination) newErrors.destination = "Destination is required.";
    if (!startDate) newErrors.startDate = "Start date is required.";
    if (!endDate) newErrors.endDate = "End date is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token") ||
          localStorage.getItem("authToken") ||
          localStorage.getItem("accessToken")
        : null;

    if (!token) {
      router.push("/login");
      return;
    }

    const destinationParts = destination.split(",").map((part) => part.trim());
    if (destinationParts.length !== 2) {
      setErrors({
        destination: "Destination must be in 'City, Country' format.",
      });
      return;
    }

    const [city_name, country_name] = destinationParts;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration_days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (duration_days < 1) {
      setErrors({ endDate: "End date must be on or after the start date." });
      return;
    }

    const formData = {
      name: tripName,
      description: `A trip to ${city_name}, ${country_name}.`,
      start_date: startDate,
      duration_days: duration_days,
      destinations: [
        {
          city_name,
          country_name,
          duration_days: duration_days,
          stop_order: 1,
        },
      ],
    };

    onTripCreate(formData);
  };

  return (
    <div className={styles.viewContainer}>
      <div className={styles.createTripContainer}>
        <h1>Create Your Trip</h1>
        <p className={styles.subtitle}>
          Fill out the details below to get started with your next adventure.
        </p>

        <div className={styles.formGroup}>
          <label htmlFor="trip-name">Trip Name</label>
          <input
            id="trip-name"
            type="text"
            placeholder="e.g., My Trip to Rome"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            className={errors.tripName ? styles.inputError : ""}
          />
          {errors.tripName && (
            <p className={styles.errorText}>{errors.tripName}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            type="text"
            placeholder="e.g., Rome, Italy"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={errors.destination ? styles.inputError : ""}
          />
          {errors.destination && (
            <p className={styles.errorText}>{errors.destination}</p>
          )}
        </div>
        <div className={`${styles.formGroup} ${styles.dateInputs}`}>
          <div style={{ flex: 1 }}>
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={errors.startDate ? styles.inputError : ""}
            />
            {errors.startDate && (
              <p className={styles.errorText}>{errors.startDate}</p>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={errors.endDate ? styles.inputError : ""}
            />
            {errors.endDate && (
              <p className={styles.errorText}>{errors.endDate}</p>
            )}
          </div>
        </div>
        <Button onClick={handleCreate} disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Trip & Start Planning →"}
        </Button>
      </div>
    </div>
  );
}
