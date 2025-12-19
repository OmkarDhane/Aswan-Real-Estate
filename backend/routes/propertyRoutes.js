const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/propertyController');

// For Sale Routes
router.route('/sale').get(getForSaleProperties).post(createForSaleProperty);
router
  .route('/sale/:id')
  .get(getForSalePropertyById)
  .put(updateForSaleProperty)
  .delete(deleteForSaleProperty);

// For Rent Routes
router.route('/rent').get(getForRentProperties).post(createForRentProperty);
router
  .route('/rent/:id')
  .get(getForRentPropertyById)
  .put(updateForRentProperty)
  .delete(deleteForRentProperty);

module.exports = router;

