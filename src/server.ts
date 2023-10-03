import mongoose from "mongoose";
import swaggerDocs from '@src/utils/swagger';

import app from "./main";
import { getEnvironmentVariables } from "@src/environments/environment";

const port = getEnvironmentVariables().port
mongoose.connect(getEnvironmentVariables().db_host)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running. Use our API on port: ${port}`)
      swaggerDocs(app, port)
    })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })