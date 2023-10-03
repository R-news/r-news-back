import mongoose from "mongoose";

import app from "./main";
import { getEnvironmentVariables } from "@src/environments/environment";

mongoose.connect(getEnvironmentVariables().db_host)
  .then(() => {
    app.listen(getEnvironmentVariables().port, () => {
      console.log(`Server running. Use our API on port: ${getEnvironmentVariables().port}`)
    })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })