var express = require('express');
var fs = require('fs')
var path = require('path')
var router = express.Router();
var productModel = require('../models/product')
var { upload } = require('../Middleware/upload')
const { detoken, checkRole } = require('../Middleware/auth')

router.post('/', detoken, checkRole(['admin']), upload, async (req, res) => {
    try {
        let body = req.body

        let newProduct = new productModel({
            product_image: req.file.filename,
            product_name: body.product_name,
            price: body.price,
            amount: body.amount
        })

        let product = await newProduct.save()     // เอาข้อมูลที่ปั้นมาบันทึกลง DB

        return res.status(201).send({
            data: product,
            message: "Successfully created product"
        })


    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
})

router.get('/', detoken, checkRole(['user', 'admin']), async (req,res) => {
    try {
        let product = await productModel.find()
        return res.status(200).send({
            data: product,
            message: "Show all products"
        })
    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
})

router.get('/:id', detoken, checkRole(['user', 'admin']), async (req,res) => {
    try {
        let id = req.params.id
        let product = await productModel.findById(id)

        if (!product) {
            return res.status(401).send("Didn't find the product you were looking for.") 
        }

        return res.send({
            data: product,
            message: `Show ${product.product_name} success.`
        })
    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
})

router.put('/:id', detoken, checkRole(['admin']), upload, async (req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;

        let updateFields = {
            product_name: body.product_name,
            price: body.price,
            amount: body.amount
        };

        if (req.file) {
            updateFields.product_image = req.file.filename;
        }

        let product = await productModel.findByIdAndUpdate(
            id,
            { $set: updateFields },
            { new: true }
        );

        if (!product) {
            return res.status(404).send("Product not found");
        }

        return res.send({
            data: product,
            message: `${product.product_name} has been successfully updated.`
        });
    } catch (err) {
        return res.status(err.status || 500)
            .send(err.message);
    }
});

router.delete('/:id', detoken, checkRole(['admin']), async (req,res) => {
    try {
        let id = req.params.id
        let product = await productModel.findById(id)

        if (!product) {
            return res.status(401).send("Didn't find the product you were looking for.") 
        }

        // ลบไฟล์รูปภาพ
        const imagePath = path.join(__dirname, '../public/images', product.product_image);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Failed to delete image file:', err);
                return res.status(500).send('Failed to delete image file.');
            }
        });
        
        await productModel.deleteOne({ _id: id })

        return res.send({
            message: `${product.product_name} has been successfully deleted.`
        })
    } catch (err) {
        return res.status(err.status || 500)
        .send(err.message)
    }
})



module.exports = router