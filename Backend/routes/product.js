const express = require("express");
const router = express.Router();
const product1 = require("../models/product1");
const { body, validationResult } = require('express-validator');

// POST endpoint to create multiple products
router.post("/fetch", async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Insert multiple products
        const createdProducts = await product1.find({});

        res.status(201).json(createdProducts);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
