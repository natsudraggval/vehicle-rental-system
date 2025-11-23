import { useEffect, useState } from "react";

const Typewriter = ({ text = "", speed = 50, intervalTime = 10000 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let timeout;

        // Freeze the text at the start of this effect
        const fixedText = text;

        const typeText = () => {
            setDisplayedText(""); // reset
            let index = 0;

            const nextChar = () => {
                if (index < fixedText.length) {
                    setDisplayedText((prev) => prev + fixedText.charAt(index));
                    index++;
                    timeout = setTimeout(nextChar, speed);
                } else {
                    // Wait intervalTime, then start over
                    timeout = setTimeout(typeText, intervalTime);
                }
            };

            nextChar();
        };

        typeText(); // start immediately

        return () => clearTimeout(timeout); // cleanup
    }, [text, speed, intervalTime]);

    return <span>{displayedText}</span>;
};

export default Typewriter;
