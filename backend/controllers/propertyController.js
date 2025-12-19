const ForSale = require('../models/forSaleModel');
const ForRent = require('../models/forRentModel');

// --- FOR SALE CONTROLLERS ---

// @desc    Get all properties for sale
// @route   GET /api/properties/sale
// @access  Public
const getForSaleProperties = async (req, res) => {
  try {
    const properties = await ForSale.find({});
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single property for sale
// @route   GET /api/properties/sale/:id
// @access  Public
const getForSalePropertyById = async (req, res) => {
  try {
    const property = await ForSale.findById(req.params.id);
    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a property for sale
// @route   POST /api/properties/sale
// @access  Private/Admin
const createForSaleProperty = async (req, res) => {
  try {
    const property = new ForSale(req.body);
    const createdProperty = await property.save();
    res.status(201).json(createdProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a property for sale
// @route   PUT /api/properties/sale/:id
// @access  Private/Admin
const updateForSaleProperty = async (req, res) => {
  try {
    const property = await ForSale.findById(req.params.id);

    if (property) {
      Object.assign(property, req.body);
      const updatedProperty = await property.save();
      res.json(updatedProperty);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a property for sale
// @route   DELETE /api/properties/sale/:id
// @access  Private/Admin
const deleteForSaleProperty = async (req, res) => {
  try {
    const property = await ForSale.findById(req.params.id);

    if (property) {
      await property.deleteOne();
      res.json({ message: 'Property removed' });
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- FOR RENT CONTROLLERS ---

// @desc    Get all properties for rent
// @route   GET /api/properties/rent
// @access  Public
const getForRentProperties = async (req, res) => {
  try {
    const properties = await ForRent.find({});
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single property for rent
// @route   GET /api/properties/rent/:id
// @access  Public
const getForRentPropertyById = async (req, res) => {
  try {
    const property = await ForRent.findById(req.params.id);
    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a property for rent
// @route   POST /api/properties/rent
// @access  Private/Admin
const createForRentProperty = async (req, res) => {
  try {
    const property = new ForRent(req.body);
    const createdProperty = await property.save();
    res.status(201).json(createdProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a property for rent
// @route   PUT /api/properties/rent/:id
// @access  Private/Admin
const updateForRentProperty = async (req, res) => {
  try {
    const property = await ForRent.findById(req.params.id);

    if (property) {
      Object.assign(property, req.body);
      const updatedProperty = await property.save();
      res.json(updatedProperty);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a property for rent
// @route   DELETE /api/properties/rent/:id
// @access  Private/Admin
const deleteForRentProperty = async (req, res) => {
  try {
    const property = await ForRent.findById(req.params.id);

    if (property) {
      await property.deleteOne();
      res.json({ message: 'Property removed' });
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getForSaleProperties,
  getForSalePropertyById,
  createForSaleProperty,
  updateForSaleProperty,
  deleteForSaleProperty,
  getForRentProperties,
  getForRentPropertyById,
  createForRentProperty,
  updateForRentProperty,
  deleteForRentProperty,
};

