import styles from "../allstyles.module.css";
import { useSelector } from "react-redux";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";
import { Typography } from "@mui/material";

const steps = ["Address", "Order Summary", "Payment"];

export default function Checkout() {
  const step = useSelector((state) => state.step);
  const [timeLeft, setTimeLeft] = React.useState(20 * 60); // 15 minutes in seconds

  React.useEffect(() => {
      const timer = setInterval(() => {
          setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <Box sx={{ p: "2rem",backgroundColor:'white',mb:'20px',
    "@media (max-width: 600px)": {
     px:"0.5rem"
    },
    }}>
      <Stepper
        sx={{
          width: "100%",
          padding: "0",
          "& .MuiStepLabel-label": {
            fontSize: "2.5rem",
          },
          "& .MuiStepIcon-root": {
            fontSize: "3.9rem",
          },
          "& .MuiStepConnector-line": {
            border: "2px solid #a6b9cb",
            position: "absolute",
            top: "12px",
            width: "calc(100% / 2)",
            marginLeft: "calc(100% / 4)",
          },
          "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
            color: step === 2 ? "#1976d2" : "#a6b9cb",
          },
          "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": {
            color: step === 2 ? "#1976d2" : "#a6b9cb",
          },
          "@media (max-width: 600px)": {
            flexDirection: "row",
            "& .MuiStepLabel-label": {
              fontSize: "1.2rem",
            },
            "& .MuiStepIcon-root": {
              fontSize: "1.5rem",
            },
            "& .MuiStepConnector-line": {
              top: "0px",
            },
          },
        }}
        activeStep={2}
        alternativeLabel
        connector={<StepConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            {index !== steps.length - 3 && <StepConnector />}
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display:'flex', justifyContent:"center", mt:"2rem"}}>
        <Typography sx={{ fontSize:'1.5rem',lineHeight:"2rem", color:"black", fontWeight:"600"}}>Offer ends in : <span style={{color:"rgb(234 88 12"}}>  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span></Typography>
      </Box>
    </Box>
  );
}