

export function listener() {
  const handleKeyPress = (e) => {
    console.log("Key pressed: ", e.key);
  };

  // Attach the event listener to the document
  document.addEventListener("keydown", handleKeyPress);

  // Optionally, return a cleanup function to remove the listener later
  return () => {
    document.removeEventListener("keydown", handleKeyPress);
  };
}

