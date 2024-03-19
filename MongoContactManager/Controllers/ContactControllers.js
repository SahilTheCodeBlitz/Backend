// whenever we connect with mongodb the response we get is promise 
// so we have to use async await to handle the promise
// to handle exeception or error we have to use try catch but instead we can use asynchandler middleware
import express from 'express'

import pkg from 'node-async-handler';
const { asyncHandler } = pkg;


// @desc Get all contacts
// @route Get api/contacts
// @access public

const app = express()



export const getContacts =asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"})
}) 

// @desc Get  contact by id
// @route Get api/contacts/:id
// @access public

export const getContactById = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get contact from server whose id = ${req.params.id}`})
})    

// @desc post  contact by id
// @route post api/contacts/
// @access public

export const postContact = asyncHandler(async(req,res)=>{
    // lets do handling if user does not passes json content in the body
    // we accept user to pass three  fields name , email and phone number
    const {name,email,phoneNumber} = req.body
    if(!name || !email || !phoneNumber){
        res.status(400).json({message:"Please fill all the fields"})
    }
    else{
        console.log(req.body);
        res.status(200).json({message:"Create Contacts"})
    }
    
})

// @desc put contact by id
// @route post api/contacts/:id
// @access public

export const putContactById = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update Contact whose id = ${req.params.id}`})
}) 


// @desc delete contact by id
// @route post api/contacts/:id
// @access public

export const deleteContactById = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contact whose id  = ${req.params.id}`})
})




// mongodb+srv://sahilsk20comp:FKKkGL3WnCS5SjZ8@contact.fqsl0pq.mongodb.net/