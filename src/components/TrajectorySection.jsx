import TextBlock from "./TextBlock";

function TrajectorySection({ label, entries = [] }) {
  return (
    <TextBlock label={label} title="">
      <div className="trajectory-entries">
        {entries.map(({ title, institute, time, content = [], image, imageAlt }) => (
          <div className="trajectory-entry" key={`${title}-${institute}`}>
            {image && (
              <div className="trajectory-logo-frame">
                <img className="trajectory-logo" src={image} alt={imageAlt || ""} />
              </div>
            )}

            <div className="trajectory-entry-content">
              <div className="exp-list">
                <h3>{title}</h3>
                {time && <p className="sub-text">{time}</p>}
              </div>

              <p className="sub-text">{institute}</p>

              {content.length > 0 && (
                <ul className="exp-content">
                  {content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </TextBlock>
  );
}

export default TrajectorySection;
