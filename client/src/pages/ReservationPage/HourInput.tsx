interface HourInputProps {
  service: "Service du Midi" | "Service du Soir" | "";
}

const HourInput: React.FC<HourInputProps> = ({ service }) => {
  let hourOptions = [];

  if (service === "Service du Midi") {
    hourOptions = [
      { value: "12:00", label: "12h00" },
      { value: "12:15", label: "12h15" },
      { value: "12:30", label: "12h30" },
      { value: "12:45", label: "12h45" },
      { value: "13:00", label: "13h00" },
      { value: "13:15", label: "13h15" },
      { value: "13:30", label: "13h30" },
    ];
  } else if (service === "Service du Soir") {
    hourOptions = [
      { value: "19:00", label: "19h00" },
      { value: "19:15", label: "19h15" },
      { value: "19:30", label: "19h30" },
      { value: "19:45", label: "19h45" },
      { value: "20:00", label: "20h00" },
      { value: "20:15", label: "20h15" },
      { value: "20:30", label: "20h30" },
      { value: "20:45", label: "20h45" },
      { value: "21:00", label: "21h00" },
    ];
  } else {
    hourOptions = [{ value: "", label: "Choisissez un service" }];
  }

  return (
    <select name="Heure" id="heure">
      <option value="">Choisissez l'heure</option>
      {hourOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default HourInput;
