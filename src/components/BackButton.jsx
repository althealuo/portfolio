// src/components/BackButton.jsx
// import "../styles/coming-soon.scss";

function BackButton({ onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.history.back(); // fallback to browser back
    }
  };

  return (
    <div className="button-container">
        <button onClick={handleClick}>
        BACK
        </button>
    </div>
  );
}

export default BackButton;
