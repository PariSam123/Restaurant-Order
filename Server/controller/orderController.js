const OrderModel = require('../model/orderModel.js');

exports.addOrder = async (req, res) => {
    const { price, dish, table } = req.body
    const newOrder = await OrderModel.create({
        price: price,
        dish: dish,
        table: table
    })
    if(newOrder)
        return res.status(200).send("Order Added successfully");
    res.status(400).send("Error while adding order ")
}
exports.deleteOrder = async (req, res) => {
    const id = req.params.id
    await OrderModel.destroy({
        where: {
            id: id
        }
    })
    res.status(200).send("delete Order Successfully")
}
exports.getOneOrder = async (req, res) => {
    const id = req.params.id
    const order = await OrderModel.findOne({
            where: {
            id: id
        }
    })
    console.log(order)
    res.status(200).send("get one order caller")
}
exports.updateOrder = async (req, res) => {
    const id = req.params.id
    const { price, dish, table } = req.body
    const updateOrder = await OrderModel.update({
        price: price,
        dish: dish,
        table: table
    },{
        where: {
            id: id
        }
    });
    if(updateOrder)
        return res.status(200).send("update order Successfully")
        res.status(400).send("Error while updating order");
}