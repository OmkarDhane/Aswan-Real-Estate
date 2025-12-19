const mongoose = require('mongoose');

const forSaleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    amenities: {
      type: [String],
      required: false,
    },
    images: {
      type: [String],
      required: true,
    },
    googleMapLink: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ForSale = mongoose.model('ForSale', forSaleSchema);

module.exports = ForSale;
