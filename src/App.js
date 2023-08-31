
import React from "react";
import { Button, Card, CardContent} from "@mui/material";
import { Cric } from "./component/Cric";
import { Foot } from "./component/Foot";
import { Kab } from "./component/Kab";

function App() {
  return (
    <Card sx={{
      bgcolor:"navy"
    }}>
      <CardContent>
        <Cric/>
        <Foot/>
        <Kab/>
      </CardContent>
    </Card>
  );
}

export default App;
