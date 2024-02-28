import React, { useState } from "react";
import styled from "styled-components";
import { Box, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import QRCode from "react-qr-code";
import { allProducts } from "../../AllProducts";
import { useParams } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let i;

function Payment() {

  let { id } = useParams();

  let shuffledProducts = [...allProducts];
  shuffledProducts.sort(() => Math.random() - 0.5);

  let productIndex = shuffledProducts.findIndex(product => product.id === +id);

  let selectedProduct = shuffledProducts[productIndex] || shuffledProducts[0];

  let { name, sprice, aprice } = selectedProduct;

  const [open, setOpen] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(2 * 60);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  React.useEffect(() => {
    if (timeLeft === 0) {

      setTimeLeft(2 * 60);
    }
  }, [timeLeft]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Section>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Total Payable Amount: ₹{sprice}
          </p>
        </Box>
        <ClickableBox onClick={handleClickOpen}>
          <img
            style={{ width: "3rem" }}
            alt="QR Code Example"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/256px-QR_Code_Example.svg.png"
          />
          <span
            style={{
              fontSize: "14px",
              marginLeft: "0.75rem",
            }}
          >
            QR Code
          </span>
        </ClickableBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "0.5rem",
            border: "0.1rem solid #e5e7eb",
            borderRadius: "8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "3rem" }}
              alt="QR Code Example"
              src="https://kalamandir.online/static/media/paytm_icon.3d48b89988f13e784e647886decd7ae5.svg"
            />
            <span
              style={{
                fontSize: "14px",
                marginLeft: "0.75rem",
              }}
            >
              Paytm
            </span>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ height: "9rem" }}
              alt="QR Code Example"
              src="https://kalamandir.online/static/media/paytm-20.128a0d33315995426dce.jpg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "0.5rem",
            border: "0.1rem solid #e5e7eb",
            borderRadius: "8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "3rem" }}
              alt="QR Code Example"
              src="https://kalamandir.online/static/media/phonepeicon.e79785763e0c4095b6335e54e9971960.svg"
            />
            <span
              style={{
                fontSize: "14px",
                marginLeft: "0.75rem",
              }}
            >
              PhonePe
            </span>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ height: "9rem" }}
              alt="QR Code Example"
              src="https://kalamandir.online/static/media/PhonePe20.f93a4e940e893aea3f89.jpg"
            />
          </Box>
        </Box>
        <ClickableBox>
          <img
            style={{ width: "3rem" }}
            alt="QR Code Example"
            src="https://kalamandir.online/static/media/whatspp_pay.e2ed34befa5836e5a0be68764c2ee95f.svg"
          />
          <span
            style={{
              fontSize: "14px",
              marginLeft: "0.75rem",
            }}
          >
            Whatsapp Pay
          </span>
        </ClickableBox>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Toolbar
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <QRCode
                size={256}
                style={{ width: '100%', height: "auto", maxWidth: '100%' }}
                value={`upi://pay?pa=mab.037323010500111@axisbank&pn=Shop&purpose=00&am=${sprice}`}
                viewBox="0 0 256 256"
              />

              <p style={{
                marginTop: "1.25rem",
                color: 'black',
                letterSpacing: "normal"
              }}>
                Time Remaining:{" "}{minutes}:{seconds < 10 ? `0${seconds}` : seconds} minutes
              </p>
              <button
                style={{
                  backgroundColor: "rgb(234 88 12)",
                  padding: "1rem 3rem",
                  marginTop: "1.25rem",
                  color: "white",
                  border: "none",
                  borderRadius: "0.25rem",
                  fontSize: "100%",
                  fontFamily: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                }}
              >
                Continue
              </button>
              <p
                onClick={handleClose}
                style={{
                  marginTop: "1.25rem",
                  textDecorationLine: "underline",
                  fontSize: "1.125rem",
                  letterSpacing: "1px",
                }}
              >
                Exit
              </p>
            </div>
          </Box>
        </Dialog>
      </Section>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <p style={{ padding: "1rem", fontSize: "2rem" }}>Order Summary</p>
      </Box>
      <Section style={{ cursor: "default", marginBottom: "0.95rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{}}>₹{sprice} <span style={{textDecoration: "line-through"}}>₹{aprice}</span></Typography>
        <Typography sx={{}}>
          {name}
        </Typography>
        <Typography sx={{}}>Quantity : 1</Typography>
        {/* <Typography sx={{}}>Size : xs</Typography> */}
      </Box>
    </Section >
      <Section style={{ cursor: "default", padding: "9px 15px" }}>
        <Typography sx={{}}>PRICE DETAILS</Typography>
      </Section>
      <Section
        style={{
          cursor: "default",
          padding: "10px 15px",
          marginBottom: "0.95rem",
          display: "flex",
          gap: "0.1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{}}>Price (1 item)</Typography>
          <Typography sx={{}}>₹{sprice}</Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{}}>Delivery Charges</Typography>
          <Typography sx={{}}>Free</Typography>
        </div>
        <hr></hr>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{}}>Amount Payable</Typography>
          <Typography sx={{}}>₹{sprice}</Typography>
        </div>
      </Section>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          alt="QR Code Example"
          src="https://kalamandir.online/static/media/lasttwo.bfe814c92613f117536e.jpg"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ maxWidth: "100%", height: "auto", width: "100%" }}
          alt="QR Code Example"
          src="https://kalamandir.online/static/media/lastone.57da0c2b54ec9277a65b5a0951628ee4.svg"
        />
      </Box>
    </>
  );
}

export default Payment;

const Section = styled.section`
  padding: 50px 0;
  max-width: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  margin: 0px auto 0px;
  padding: 20px 15px;
  border: 1px solid #e5e7eb;
  padding-bottom: 20px;
  background-color: white;
  border-radius: 3px;
`;

const ClickableBox = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem;
  border: 0.1rem solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
`;