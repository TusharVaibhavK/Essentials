const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(cors())

// Connect to MongoDB
const connectToDB = async()=>{
   try{
    await mongoose.connect('mongodb://localhost:27017/prog10', {})
    console.log('Connected to MongoDB')
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error)
    }
}
connectToDB()


const UserSchema = new mongoose.Schema({
    name: String,
    email: String
})

const User = mongoose.model("user", UserSchema)

app.use(express.json())


app.post('/api/users', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(400).send('Failed to create user')
    }
})

app.listen(8000, () => {
    console.log('Server started on http://localhost:8000')
})