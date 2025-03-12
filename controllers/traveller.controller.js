const multer = require("multer");
const Traveller = require("./../models/traveller.model.js");
const path = require("path");
const fs = require("fs");
//-------------------------------------------------------------------------------------
//ใช้prismaในการทำงานผ่านdatabase crud
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
//-------------------------------------------------------------------------------------
exports.uploadTraveller = multer.diskStorage({
    storage: storage,
    limits: {
      fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const mimetype = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error: Images Only!");
    },
  }).single("travellerImage");
//-------------------------------------------------------------------------------------
//เพิ่มข้อมูลTraveller
exports.createTraveller = async (req, res) => {
    try {
        //---------------
        const result = await prisma.traveller_tb.create()
        
        //---------------
        res.status(201).json({
          message: "Traveller created successfully",
          data: result,
         });
    } catch (error) {
      res.status(500).json({
        message: error.message,});
    }
  };
//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------