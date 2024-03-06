import React from "react";

import { Typography, Button } from "@mui/material";
import "./Home.css";
export default function Home() {
  return (
    <main className="container">
      <section
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div className="hero-img-container">
          <img
            className="hero-img"
            srcSet={`${"https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${"https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}?w=164&h=164&fit=crop&auto=format`}
            alt={""}
            loading="lazy"
          />
        </div>

        <div>
          <Typography
            order={2}
            variant={"h2"}
            fontWeight={800}
            fontSize={52}
            lineHeight={0.85}
          >
            Command the <br />
            Dance Floor{" "}
            <span role="img" aria-label="dancing man">
              🕺🏻
            </span>
          </Typography>
          <Typography
            order={3}
            variant="subtitle1"
            fontWeight={500}
            fontSize={20}
            lineHeight={0.85}
            sx={{ maxWidth: "40%" }}
            color="gray"
          >
            Welcome to <strong>TuneToss</strong>, where your musical wishes
            command the night. Connect with the DJ like never before, tossing
            your favorite tunes into the mix.
          </Typography>
          <Button sx={{marginY: 1}} variant="contained" color="primary">Get Started</Button>
        </div>
      </section>
    </main>
  );
}
