import express from "express"
import {addUser,getUser,getSingleUser,deleteUSer,loginUser,updateUser} from "../controller/userDataController.js"
import authanticateToken from '../utils/authMiddlware.js'
import upload from "../utils/uploadMiddleware.js"
const router = express.Router()

router.post('/api/add-user',upload.single('image'),addUser)
router.get('/api/get-user',authanticateToken,getUser)
router.get('/api/get-singleuser/:uid',authanticateToken,getSingleUser)
router.put('/api/update-user/:uid',authanticateToken,updateUser)
router.delete('/api/delete-user/:uid',authanticateToken,deleteUSer)
router.post('/api/login',loginUser)


export default router