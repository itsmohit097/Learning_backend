import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { Jwt } from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true, // to enable for searching in database
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: "string",
        required: true,
        trim: true,
        index: true, // to enable for searching in database
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],

    //! Password
    password: {
        type: String,
        required: [true, 'password is required']
    },
    refreshToken: {
        type: String,

    }

},
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);