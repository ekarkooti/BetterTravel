import styles from "./ProgressTracker.module.css";

export default function ProgressTracker({
  currentPhase,
  onPhaseChange,
  isSoloTrip,
  isOwner,
}) {
  let phases = [
    { key: "shortlisting", label: "1. Shortlist" },
    { key: "voting", label: "2. Vote" },
    { key: "itinerary", label: "3. Itinerary" },
    { key: "accommodations", label: "4. Hotel" },
    { key: "flights", label: "5. Flights" },
  ];

  if (isSoloTrip) {
    phases = phases.filter((phase) => phase.key !== "voting");
  }

  const currentPhaseIndex = phases.findIndex((p) => p.key === currentPhase);

  return (
    <div className={styles.progressTracker}>
      {phases.map((phase, index) => {
        const isCompleted = index < currentPhaseIndex;
        const isActive = index === currentPhaseIndex;

        let statusClass = "";
        if (isCompleted) statusClass = styles.completed;
        if (isActive) statusClass = styles.active;

        return (
          <button
            key={phase.key}
            className={`${styles.progressStep} ${statusClass}`}
            disabled={!isOwner || isActive}
            onClick={() => onPhaseChange(phase.key)}
          >
            {phase.label}
          </button>
        );
      })}
    </div>
  );
}
