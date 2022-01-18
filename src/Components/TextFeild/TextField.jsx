import "./TextField.css";

const Textfield = ({ label, placeholder, required, Icon }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <div className="inputDiv"
      >
        {Icon && <Icon className="inputIcon" />}
        <input
          required={required}
          placeholder={placeholder}
          className="input"
          label={label}
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
  );
};
export default Textfield;
