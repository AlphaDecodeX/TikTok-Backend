import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    messages: String,
    shares: String,
})

// Collectoin Inside the Database
export default mongoose.model('tiktokVideos', tiktokSchema);