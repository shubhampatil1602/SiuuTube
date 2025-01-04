export function convertTime(str) {
  const time = [];
  let currentValue = "";

  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      // Accumulate numerical characters
      currentValue += str[i];
    } else if (str[i] === "H" || str[i] === "M" || str[i] === "S") {
      // Push the accumulated value with its type
      time.push({
        type: str[i] === "H" ? "Hour" : str[i] === "M" ? "Mins" : "Seconds",
        num: currentValue, // Convert to number, default to 0 if empty
      });
      currentValue = "";
    }
  }

  return time
    .map((t) => {
      if (t.type === "Hour") {
        return `${t.num.length == 1 ? `0${t.num}:` : `${t.num}:`}`;
      } else if (t.type === "Mins") {
        return `${t.num.length == 1 ? `0${t.num}:` : `${t.num}:`}`;
      } else {
        return `${t.num.length == 1 ? `0${t.num}` : `${t.num}`}`;
      }
    })
    .join("");
}
