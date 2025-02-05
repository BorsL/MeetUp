import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    image:{
        type: String,
        require: true,
    }
},{
    timestamps: true //createdAt, updatedAt each document
});

const Event = mongoose.model('Event', eventSchema); //uppercase and singular cause mongo hanle it for you

export default Event;