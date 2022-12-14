#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-solid-library", {
  templateRoot,
  promptForEmail: false,
  promptForPackageManager: true,
  after: () => console.log(`Enjoy building your library!`),
});
