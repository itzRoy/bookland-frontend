const schemaBook = new mongoose.Schema(
    {
        id: {
            type: Number,
        },
        img: {
            type: String,
        },
        title: {
            type: String,
        },
        author: {
            type: String,
        },

        year: {
            type: Number,
            default: 2020,
        },

        desc: {
            type: String,
        },
        category: {
            type: String,
        },

        price: {
            type: Number,
            default: 15,
        },
        rating: {
            type: Number,
            default: 4,
        },
    });
