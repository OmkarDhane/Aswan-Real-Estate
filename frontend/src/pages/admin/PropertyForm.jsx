import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PropertyForm = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  // Validate type
  if (type !== 'sale' && type !== 'rent') {
    return <div className="text-center mt-10">Invalid property type</div>;
  }

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    beds: '',
    type: '',
    area: '',
    location: '',
    amenities: '',
    images: '',
    googleMapLink: '',
  });

  useEffect(() => {
    if (isEditMode) {
      fetchProperty();
    }
  }, [id, type]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`https://aswan-real-estate.onrender.com/api/properties/${type}/${id}`);
      const data = await response.json();
      setFormData({
        ...data,
        amenities: data.amenities ? data.amenities.join(', ') : '',
        images: data.images ? data.images.join(', ') : '',
      });
    } catch (error) {
      console.error('Error fetching property:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      amenities: formData.amenities.split(',').map((item) => item.trim()),
      images: formData.images.split(',').map((item) => item.trim()),
    };

    const url = isEditMode
      ? `https://aswan-real-estate.onrender.com/api/properties/${type}/${id}`
      : `https://aswan-real-estate.onrender.com/api/properties/${type}`;
    const method = isEditMode ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate('/admin/dashboard');
      } else {
        alert('Error saving property');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-[Poppins]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">
          {isEditMode ? 'Edit Property' : 'Add New Property'} ({type === 'sale' ? 'For Sale' : 'For Rent'})
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Price (AED)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Beds</label>
              <input
                type="number"
                name="beds"
                value={formData.beds}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="e.g. Apartment, Villa, Office"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Area (sqft/Location)</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g. Downtown, Dubai Marina, JLT, JVC"
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded h-32"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Amenities (comma separated)</label>
            <input
              type="text"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Gym, Pool, Parking"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Image URLs (comma separated)</label>
            <textarea
              name="images"
              value={formData.images}
              onChange={handleChange}
              className="w-full border p-2 rounded h-24"
              placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Google Map Link (Embed URL)</label>
            <input
              type="text"
              name="googleMapLink"
              value={formData.googleMapLink}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="https://www.google.com/maps/embed?..."
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              {isEditMode ? 'Update Property' : 'Save Property'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;

