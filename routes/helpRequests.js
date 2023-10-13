const express = require("express");
const helpRequestController = require("../controllers/helpRequestController");
const router = express();

//Gets all help requests from db
router.get("/api/help_requests", helpRequestController.loadHelpRequests);

//Marks help request as done
router.post("/api/help_requests", helpRequestController.newHelpRequest);

//Marks help request as done
router.put("/api/help_requests", helpRequestController.markRequestAsDone);

module.exports = router;
