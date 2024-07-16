import { Box, Button, Typography, TextField } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import frem from "./images/layouts/frem.png";
import chip from "./images/layouts/chip.png";

const LayoutPage = () => {
  const [vizacard, mycards] = useState(false);
  const [cards, setCards] = useState([
    {
      cardNumber: "**** **** **** 2404",
      cardHolder: "Sardor",
      expiryDate: "02/30",
    },
    {
      cardNumber: "**** **** **** 2345",
      cardHolder: "Islom",
      expiryDate: "08/28",
    },
  ]);

  const [newCard, setNewCard] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
  });

  const Mycard = (isVizaCard: boolean) => {
    mycards(isVizaCard);
  };

  const addCards = () => {
    setCards([...cards, newCard]);
    setNewCard({ cardNumber: "", cardHolder: "", expiryDate: "" });
    mycards(false);
  };

  const inputvaluesi = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F7F9FC",
        padding: "20px",
        width: "100%",
        position: "relative",
      }}
    >
      <img
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "20px",
          left: "390px",
        }}
        src={frem}
        alt=""
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: { xs: "89%", md: "69%", lg: "51%" },
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        <Box
          className={`card_box2 ${!vizacard ? "hover_box" : ""}`}
          sx={{
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: !vizacard ? "#FFF" : "#834cff1a",
            border: !vizacard ? "1px solid #834cff" : "none",
            transition: "background-color 0.3s, border 0.3s",
          }}
          onClick={() => Mycard(false)}
        >
          <CiCreditCard1 />
          <Typography>New Credit Card</Typography>
        </Box>
        <Box
          className={`card_box2 ${vizacard ? "hover_box" : ""}`}
          sx={{
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: vizacard ? "#FFF" : "#834cff1a",
            border: vizacard ? "1px solid #834cff" : "none",
            transition: "background-color 0.3s, border 0.3s",
          }}
          onClick={() => Mycard(true)}
        >
          <CiCreditCard1 />
          <Typography>My Cards</Typography>
        </Box>
      </Box>
      {vizacard ? (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "1000px",
            justifyContent: "center",
            marginTop: "20px",
            width: { xs: "90%", md: "70%", lg: "53%" },
          }}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                maxWidth: "300px",
                height: "200px",
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                marginTop: "20px",
              }}
              className="hover_box"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#1a73e8",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#fff",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "80px",
                      height: "60px",
                      marginLeft: "-20px",
                    }}
                    src={chip}
                    alt=""
                  />
                  <Typography sx={{ fontSize: "24px" }}>VISA</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: "23px" }}>
                    {card.cardNumber}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "12px" }}>
                      Card Holder Name
                    </Typography>
                    <Typography sx={{ fontSize: "18px" }}>
                      {card.cardHolder}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "12px" }}>
                      Expiry Date
                    </Typography>
                    <Typography sx={{ fontSize: "18px" }}>
                      {card.expiryDate}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          sx={{ width: { xs: "90%", md: "70%", lg: "50%" }, marginTop: "50px" }}
        >
          <div className="mt-5">
            <Typography
              sx={{
                fontSize: "30px",
                lineHeight: "32px",
                marginBottom: "10px",
                letterSpacing: "-0.02em",
              }}
            >
              Add New Card
            </Typography>
            <Typography className="text-slate-500">
              Do more with unlimited blocks, files, automations & integrations.
            </Typography>
          </div>
          <Box style={{ marginTop: "60px" }}>
            <label className="text-slate-500" htmlFor="cardHolder">
              Who is
            </label>
            <TextField
              id="cardHolder"
              name="cardHolder"
              value={newCard.cardHolder}
              onChange={inputvaluesi}
              className="newCard_input"
              fullWidth
              variant="outlined"
            />
            <div className="mt-5">
              <label className="text-slate-500" htmlFor="cardNumber">
                Payment Details
              </label>
              <TextField
                id="cardNumber"
                name="cardNumber"
                value={newCard.cardNumber}
                onChange={inputvaluesi}
                className="newCard_input"
                fullWidth
                variant="outlined"
              />
              <TextField
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                name="expiryDate"
                value={newCard.expiryDate}
                onChange={inputvaluesi}
                className="newCard_input"
                fullWidth
                variant="outlined"
              />
              <select className="newCard_input">
                <option value="option1">United States</option>
              </select>
            </div>
          </Box>
          <Box className="mt-5 flex gap-5 items-center">
            <Button className="button_hover1">Cancel</Button>
            <Button className="button_hover" onClick={addCards}>
              Add
            </Button>
          </Box>
          <Typography
            sx={{ fontSize: "13px", marginTop: "20px" }}
            className="text-slate-500"
          >
            By providing your card information, you allow us to charge your card
            for future payment in accordance with their terms.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LayoutPage;
