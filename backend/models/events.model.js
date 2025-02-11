import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    location:{
        name:{
            type: String,
            require: true,
        },
        link:{
            type: String,
        }
    },
    image:{
        type: String,
        require: true,
    },
    data:{
        payable: {type: Boolean},
        category: {
            type: String,
            enum: ["Technology", "Cars", "Music"],
        },
        partecipants: {
            type: Number,
            default: 0,
        },
    }
},{
    timestamps: true //createdAt, updatedAt each document
});

const Event = mongoose.model('Event', eventSchema); //uppercase and singular cause mongo hanle it for you


export default Event;