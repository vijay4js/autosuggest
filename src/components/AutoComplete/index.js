import React, { useRef, useMemo, useState } from "react";
import "./index.css";

function Suggestion({ name, onSelect }) {
  function handleOptionClick() {
    onSelect(name);
  }

  return (
    <div className="suggestion" onClick={handleOptionClick}>
      {name}
    </div>
  );
}

function AutoComplete({ options = [] }) {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  React.useEffect(() => {
    function handleOutsideClick(e) {
      if (wrapperRef.current.contains(e.target)) return;
      setVisible(false);
    }
    window.addEventListener("click", handleOutsideClick, { capture: true });

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  React.useEffect(() => {
    let id = setTimeout(() => setDebouncedTerm(term), 200);

    return () => {
      clearTimeout(id);
    };
  }, [term]);

  function filteredOptions() {
    return options.filter((o) =>
      o.name.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }

  const memoizedFilteredOptions = useMemo(filteredOptions, [
    options,
    debouncedTerm
  ]);

  function handleInputChange(e) {
    setTerm(e.target.value);
  }

  function generateAutoSelectOptions() {
    function onSelect(name) {
      setTerm(name);
      setVisible(false);
    }
    return memoizedFilteredOptions.map((option) => {
      return <Suggestion onSelect={onSelect} key={option.name} {...option} />;
    });
  }

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="input-wrapper">
        <input
          value={term}
          className="input"
          type="text"
          onClick={() => setVisible(true)}
          onChange={handleInputChange}
        />
      </div>
      {visible && (
        <div className="sugestion-wrapper">{generateAutoSelectOptions()}</div>
      )}
    </div>
  );
}

export default AutoComplete;
