import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import KlipLogin from "./KlipLogin";

interface propsType {
  user: any;
}

export default function LoginButton({ user }: propsType): JSX.Element {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  function handleWalletOpen(wallet: any) {
    switch (wallet) {
      case "klip":
        setIsWalletOpen(true);
        break;
      default:
        break;
    }
  }

  function handleWalletClose(wallet: any) {
    switch (wallet) {
      case "klip":
        setIsWalletOpen(false);
        break;
      default:
        break;
    }
  }

  return (
    <Box>
      <Button variant="contained" onClick={() => handleWalletOpen("klip")}>
        Login
      </Button>
      <KlipLogin
        user={user}
        open={isWalletOpen}
        onClose={() => handleWalletClose("klip")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      />
    </Box>
  );
}
