//เรียกใช้งาน expesee เพื่อใช้งาน Router() ในการจัดการเส้นทางเพื่อการเรียกใช้งาน
const express = require("express"); //จัดการส่วนต่างๆ ของ Backend

//นำเข้า traveller.controller.js เพื่อกำหนด endpoint หรือเส้นทาง
//ในการทำงานกับแต่ละฟังก์ชันใน traveller.controller.js ที่ทำงานกับ traveller_tb
const travellerController = require("./../controllers/traveller.controller");

//เรียกใช้งาน Router() ในการจัดการเส้นทางเพื่อการเรียกใช้งาน
const router = express.Router();

//ในการกำหนดเส้นทางเป็นตามหลักการของ REST API
//เพิ่ม post(), แก้ไข put()/patch(), ลบ delete(), ค้นหา/ตรวจสอบ/ดึง/ดู get()
router.post("/", travellerController.uploadTraveller, travellerController.createTraveller);
router.get("/:travellerEmail/:travellerPassword", travellerController.checkLoginTraveller);
router.put("/:travellerId", travellerController.uploadTraveller  ,travellerController.editTraveller);

//export router ออกไปเพื่อการเรียกใช้งาน
module.exports = router;


