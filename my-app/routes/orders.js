var express = require('express');
var router = express.Router();
var orderModel = require('../models/order')
var productModel = require('../models/product')
var userModel = require('../models/user')
const { detoken, checkRole } = require('../Middleware/auth')

router.post('/:id', detoken, checkRole(['user']), async (req,res) => {
    try {
        const { items } = req.body
        let id = req.params.id
        let total_price = 0
        let updatedItems = []

        let user = await userModel.findById(id)

        if (!user) {
            return res.status(400).send("Invalid buyer ID");
        }

        for (const item of items) {
            let product = await productModel.findById(item.product)
            
            if (!product) {
                return res.status(401).send("Didn't find the product you were looking for.") 
            }

            if (product.amount < item.amount) {
                return res.status(401).send(`Product ${item.product} is not available in sufficient quantity`) 
            }

            product.amount -= item.amount
            await product.save()
            total_price += product.price * item.amount
            updatedItems.push({
                product: item.product,
                amount: item.amount
            })
        }

        let newOrder = new orderModel({
            buyer: user._id,
            items: updatedItems,
            total_price: total_price
        })

        let order = await newOrder.save()

        // Populate product_name
        order = await orderModel.findById(order._id).populate({
            path: 'items.product',
            select: 'product_name'
        }).exec();

        // แปลงข้อมูลเพื่อแสดง product_name แทน ObjectId
        order = order.toObject();
        order.items = order.items.map(item => ({
            product: item.product.product_name,
            amount: item.amount
        }));

        return res.status(201).send({
            data: order,
            message: 'Add the order you want successfully.',
        });

    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
})

router.get('/', detoken, checkRole(['admin']), async (req,res) => {
    try {
        let order = await orderModel.find()
        return res.status(200).send({
            data: order,
            message: "Show all orders"
        })
    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
})

router.get('/:id', detoken, checkRole(['admin', 'user']), async (req,res) => {
    try {
        let id = req.params.id
        let orders = await orderModel.find({ buyer: id })

        let user = await userModel.findById(id);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        if (orders.length === 0) {
            return res.status(404).send("No orders found for this user.") 
        }

        return res.send({
            data: orders,
            message: `Show orders for user ${user.username} successfully`
        })
    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
})

router.put('/:id', detoken, checkRole(['user']), async (req, res) => {
    try {
        let id = req.params.id;
        const { items } = req.body;

        // ค้นหาคำสั่งซื้อที่ต้องการแก้ไข
        let order = await orderModel.findById(id);

        if (!order) {
            return res.status(404).send("Order not found.");
        }

        // เก็บจำนวนสินค้าเดิมไว้เพื่อคืนกลับ
        let oldItems = order.items;

        // คืนจำนวนสินค้าเดิมกลับไป
        for (const item of oldItems) {
            let product = await productModel.findById(item.product);
            if (product) {
                product.amount += item.amount; // เพิ่มจำนวนที่ถูกลบคืนกลับ
                await product.save();
            }
        }

        // อัปเดตคำสั่งซื้อ
        let total_price = 0;
        let updatedItems = [];

        for (const item of items) {
            let product = await productModel.findById(item.product);
            if (!product) {
                return res.status(404).send(`Product ${item.product} not found.`);
            }

            if (product.amount < item.amount) {
                return res.status(400).send(`Product ${item.product} is not available in sufficient quantity.`);
            }

            // เพิ่มจำนวนสินค้าใหม่ในฐานข้อมูล
            product.amount -= item.amount;
            await product.save();

            total_price += product.price * item.amount;
            updatedItems.push({
                product: item.product,
                amount: item.amount
            });
        }

        // อัปเดตคำสั่งซื้อด้วยข้อมูลใหม่
        order.items = updatedItems;
        order.total_price = total_price;
        order.created_at = new Date(); // อัปเดตเวลาสร้างคำสั่งซื้อ

        await order.save();

        // Populate product_name
        order = await orderModel.findById(order._id).populate({
            path: 'items.product',
            select: 'product_name'
        }).exec();

        // แปลงข้อมูลเพื่อแสดง product_name แทน ObjectId
        order = order.toObject();
        order.items = order.items.map(item => ({
            product: item.product.product_name,
            amount: item.amount
        }));

        return res.send({
            data: order,
            message: 'Order has been successfully updated.'
        });

    } catch (err) {
        return res.status(err.status || 500)
            .send(err.message);
    }
});


router.delete('/:id', detoken, checkRole(['user']), async (req, res) => {
    try {
        let id = req.params.id;
        
        // ค้นหาคำสั่งซื้อที่ต้องการลบ
        let order = await orderModel.findById(id);

        if (!order) {
            return res.status(404).send("Order not found.");
        }

        // เพิ่มจำนวนสินค้าในฐานข้อมูลกลับไป
        for (const item of order.items) {
            let product = await productModel.findById(item.product);
            
            if (product) {
                product.amount += item.amount; // เพิ่มจำนวนกลับไป
                await product.save();
            }
        }

        // ลบคำสั่งซื้อ
        await orderModel.deleteOne({ _id: id });

        return res.send({
            message: `Order has been successfully deleted.`
        });
    } catch (err) {
        return res.status(err.status || 500)
            .send(err.message);
    }
});



module.exports = router;