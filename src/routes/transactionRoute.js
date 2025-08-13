import express from "express";
import {createTransation, deleteTransaction, getSummaryByUserId, getTransactionByUserId} from "../controllers/transactionController.js"

const router = express.Router();

router.get("/:userId",getTransactionByUserId)
router.get("/summary/:userId",getSummaryByUserId)
router.post("/",createTransation)
router.delete("/:id",deleteTransaction)

export default router;