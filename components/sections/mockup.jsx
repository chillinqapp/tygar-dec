"use client"
import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import OutlinedButton from "../OutlinedButton";
import Title from "../Title";
import { section4Content } from "../lib/content";
import { HeroSubtitle, HeroTitle } from "../hero";
import { Button } from "../button";

const { top, bottom } = section4Content;

const Mockup = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ mt: { xs: 15, md: 20, lg: 25 } }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <h1 className="text-gradient my-6 text-5xl md:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">{top.title}</h1>

            <HeroSubtitle variant="body2" color="text.white" sx={{ pb: 2 }}>
              {top.subtitle}
            </HeroSubtitle>

            {/* <OutlinedButton arrow fit >
              Host
            </OutlinedButton> */}
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <img
            src={top.image}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      {/* BOTTOM */}

      <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 10, md: 15 } }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src={bottom.TABS[tabValue].image}
            style={{ width: "80%", 
             objectFit: "contain" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <h1 className="text-gradient my-6 text-5xl md:text-6xl">{bottom.title}</h1>

            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
            >
              {bottom.TABS.map(({ name }) => (
                <Tab
                className="text-white"
                  label={name}
                  key={name}
                  sx={{
                    minWidth: 60,
                    "&.Mui-selected": { color: "text.white" },
                  }}
                />
              ))}
            </Tabs>

            <HeroSubtitle
              variant="body2"
              color="text.white"
              sx={{ pb: 2, minHeight: 70 }}
            >
              {bottom.TABS[tabValue].subtitle}
            </HeroSubtitle>

            <OutlinedButton arrow fit>
              Learn more
            </OutlinedButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mockup;
