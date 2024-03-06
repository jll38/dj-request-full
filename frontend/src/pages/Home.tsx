import React from "react";

import { Typography, Button } from "@mui/material";
import "./Home.css";
export default function Home() {
  return (
    <main className="container">
      <section
        style={{ display: "flex", alignItems: "center",gap: "20px", height: "600px" }}
      >
        <div>
          <Typography
            order={2}
            variant={"h2"}
            fontWeight={800}
            fontSize={52}
            lineHeight={0.9}
            
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
            sx={{ maxWidth: "55%", marginY: 1}}
            color="gray"
          >
            Connect with the DJ like never before, tossing your favorite tunes
            into the mix.
          </Typography>
          <Button sx={{ marginY: 1 }} variant="contained" color="primary">
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
