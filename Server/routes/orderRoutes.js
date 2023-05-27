const express = require("express");

const orderController = require('../controller/orderController.js');
const router = express.Router();

router.post(`/addOrder`, orderController.addOrder);
router.delete(`/deleteOrder/:id`, orderController.deleteOrder);
router.get(`/getOneOrder/:id`, orderController.getOneOrder);
router.patch(`/updateOrder/:id`, orderController.updateOrder);

module.exports = router;