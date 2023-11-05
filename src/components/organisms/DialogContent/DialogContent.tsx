import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Heroes, PowerStats } from "@/types/heroes";
import { calculateTotalPower } from "@/utils/calculateTotalPower";
import { statIcons } from "@/constants/constants";

type IDialogContentProps = {
  selectedHeroes: Heroes[];
  winner: string | null;
};

function DialogContentComponent({
  selectedHeroes,
  winner,
}: IDialogContentProps) {
  return (
    <Box display="flex" justifyContent="space-between">
      {selectedHeroes.map((hero) => (
        <Card key={hero.id} style={{ maxWidth: 345, margin: "0.5rem" }}>
          <CardMedia
            component="img"
            height="140"
            image={hero.images.lg}
            alt={hero.name}
            style={{
              filter:
                winner && hero.name !== winner ? "grayscale(100%)" : "none",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {hero.name}
            </Typography>
            {Object.entries(hero.powerstats).map(([key, value]) => (
              <Box key={key} className="flex items-center gap-1">
                <span style={{ fontSize: "1.2em" }}>
                  {statIcons[key as keyof PowerStats]}
                </span>
                <Typography variant="body2" color="text.secondary">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </Typography>
              </Box>
            ))}
            <Box className="flex items-center gap-1 ml-1">
              {winner && hero.name === winner && (
                <Typography
                  variant="body1"
                  className=" text-green-500  bg-black p-2 w-full"
                >
                  🏆 Winner:
                  {calculateTotalPower(hero.powerstats)}
                </Typography>
              )}
              {winner && hero.name !== winner && (
                <Typography
                  variant="body1"
                  className="font-black  text-red-500 bg-black p-2 w-full"
                >
                  😐 Loser:
                  {calculateTotalPower(hero.powerstats)}
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default DialogContentComponent;
