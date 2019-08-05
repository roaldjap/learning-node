const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter store name!'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
});

// BEFORE IT WILL SAVE, run a function
storeSchema.pre('save', function(next){
    if(!this.isModified('name')){ // if the store name is NOT modified
        next(); // skip
        return; // stop this function
    }

    this.slug = slug(this.name); // slug we required
    next();
    
    // TODO make more resiliant so slugs are unique-1, unique-2
});

module.exports = mongoose.model('Store', storeSchema);