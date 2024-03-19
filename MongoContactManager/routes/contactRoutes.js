import express from 'express'
import bodyParser from 'body-parser'

import {getContacts,getContactById,postContact,putContactById,deleteContactById} from '../Controllers/ContactControllers.js'

const router = express.Router()



// get method
// path for route = /api/contacts/ this is comming from server.js me se app.use
router.route('/').get(getContacts) // getContact method code written in Controllers//ContactControllers

// get method = getting specific contact as specified id from the  server
// path for route = /api/contacts/ plus /:id id we specified here and rest route comming from server.js 
router.route('/:id').get(getContactById)

// post method
// path for route = /api/contacts/ this is comming from server.js me se app.use
router.route('/').post(postContact)

// put method = update the existing resource in the server
// path for route = /api/contacts/ plus id , id specified here and rest comming from the  server.js me se app.use

router.route('/:id').put(putContactById)

// delete method = delete the existing resource from the server
// path for route = /api/contacts plus id, id specified here and rest comming from the  server.js me se app.use
router.route('/:id').delete(deleteContactById)


export default router 