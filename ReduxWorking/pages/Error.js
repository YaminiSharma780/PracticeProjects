import "../App.css";

export default function Error({ isError }) {
  return (
    <div className="error-container">
      <div className="error">{isError}</div>
    </div>
  );
}
