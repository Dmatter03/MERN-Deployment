const mongoose = require('mongoose');




const StoreSchema = mongoose.Schema (
    {
        store: { type: String, 
            required: [true, "Store is required"],
            minLength: [2, 'At least 2 characters required'],
        },
        number: { type: Number, 
            required: [true, "Number must be greater than 0"],
            unique: [true, 'Already in Use try something Unique'],
        },
        open: { type: String,
            required: [true, "store is required"],
        }

    }, {timestamps: true});

module.exports.Store = mongoose.model('Team', StoreSchema);

