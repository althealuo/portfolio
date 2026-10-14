import TextBlock from "./TextBlock";

function TrajectorySection({ label, entries = [] }) {
  return (
    <TextBlock label={label} title="">
      <div className="trajectory-entries">
        {entries.map(({ title, institute, time, content = [] }) => (
          <div className="trajectory-entry" key={`${title}-${institute}`}>
            <div className="exp-list">
              <h3>{title}</h3>
              <p className="sub-text">{institute}</p>
            </div>

            {time && <p className="sub-text">{time}</p>}

            {content.length > 0 && (
              <ul className="exp-content">
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </TextBlock>
  );
}

export default TrajectorySection;
