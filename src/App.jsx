import "./App.css";
import { TextField, Stack, Button, Typography } from "@mui/material/";

import { useState } from "react";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [validPrinciple, setValidPrinciple] = useState(true);
  const [validRate, setValidRate] = useState(true);
  const [validYear, setValidYear] = useState(true);

  const validateInputUsers = (e) => {
    const { value, name } = e.target;
    if (value.match(/^\d*\.?\d+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setValidPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(true);
      } else {
        setYear(value);
        setValidYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setValidPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setValidRate(false);
      } else {
        setYear(value);
        setValidYear(false);
      }
    }
  };

  const resetAll = () => {
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setValidPrinciple(true);
    setValidRate(true);
    setValidYear(true);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!principle || !rate || !year) {
      alert("Please fill the inputs compleately!!");
    } else {
      setInterest((principle * rate * year) / 100);
    }
  };

  return (
    <div className="calculator">
      <h1>Simple Interest calculator</h1>
      <h3>Calculate your simple interest Easily</h3>
      <div className="display">
        <h1>₹ {interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      <form onSubmit={handleCalculate}>
        <TextField
          id="outlined-basic-principle"
          label="Principle Amount"
          variant="outlined"
          color="secondary"
          name="principle"
          onChange={(e) => validateInputUsers(e)}
          InputProps={{
            sx: {
              color: "white",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          value={principle || ""}
        />
        {!validPrinciple && (
          <Typography variant="caption" sx={{ color: "red" }}>
            *Invalid Principle Amount input
          </Typography>
        )}
        <TextField
          id="outlined-basic-rate"
          label="Rate of interest (p.a)%"
          variant="outlined"
          color="secondary"
          name="rate"
          InputProps={{
            sx: {
              color: "white",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          onChange={(e) => validateInputUsers(e)}
          value={rate || ""}
        />
        {!validRate && (
          <Typography variant="caption" sx={{ color: "red" }}>
            *Invalid Rate input
          </Typography>
        )}
        <TextField
          id="outlined-basic-time-period"
          label="Time Period ( Yr )"
          variant="outlined"
          color="secondary"
          name="year"
          InputProps={{
            sx: {
              color: "white",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          onChange={(e) => validateInputUsers(e)}
          value={year || ""}
        />
        {!validYear && (
          <Typography variant="caption" sx={{ color: "red" }}>
            *Invalid Year input
          </Typography>
        )}
        <Stack direction={"row"} spacing={2}>
          <Button
            type="submit"
            size="large"
            color="inherit"
            sx={{
              py: 2,
              borderRadius: "10px",
              background: "rgba(14,231,223,0.9)",
              fontWeight: "bold",
            }}
            disabled={validPrinciple && validRate && validYear ? false : true}
          >
            CALCULATE
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="large"
            sx={{
              py: 2,
              borderRadius: "10px",
              fontWeight: "bold",
              border: "2px solid rgba(14,231,223,0.9)",
            }}
            onClick={resetAll}
          >
            RESET
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default App;
