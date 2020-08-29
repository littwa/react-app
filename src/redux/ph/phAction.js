import { createAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const act = createAction("act", (name, number, supercontact, cool, priorytet) => ({
  payload: { contact: { id: uuidv4(), name, number, supercontact, cool, priorytet } },
}));

export default { act };
