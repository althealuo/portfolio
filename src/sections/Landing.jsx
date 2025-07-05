import { useEffect, useState } from "react";
import "../styles/landing.scss";

function Landing() {
  const line1Full = "  Understanding the mind with AI";
  const line2Full = " creating artistic worlds";

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const delay = 80;
    const startTyping = setTimeout(() => {
      const typeLine1 = setInterval(() => {
        if (i < line1Full.length-1) {
          setTypedLine1((prev) => prev + line1Full[i]);
          i++;
        } else {
          clearInterval(typeLine1);

          let j = 0;
          const typeLine2 = setInterval(() => {
            if (j < line2Full.length-1) {
              setTypedLine2((prev) => prev + line2Full[j]);
              j++;
            } else {
              clearInterval(typeLine2);
              setTypingDone(true); // 🔹 hide cursor when done
            }
          }, delay);
        }
      }, delay);
    }, 1000); // delay before typing starts (1s for bar animation)

    return () => clearTimeout(startTyping);

    return () => {
      clearInterval(typeLine1);
    };
  }, []);

  return (
    <section className="section landing">
      <div className="landing-container">
        <div className="landing-left">
          <p className="landing-title">Althea</p>
          <div className="title-underline" />
        </div>

        <div className="landing-right">
          <div className="landing-divider" />
          <p className={`landing-subtext typewriter ${typingDone ? "done" : ""}`}>{typedLine1}</p>
          <p className="landing-subtext highlight">&</p>
          <p className={`landing-subtext typewriter ${typingDone ? "done" : ""}`}>
            {typedLine2}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
