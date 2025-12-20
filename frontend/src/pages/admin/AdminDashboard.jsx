import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchProperties();
  }, [navigate]);

  const fetchProperties = async () => {
    try {
      const saleRes = await fetch('http://localhost:3000/api/properties/sale');
      const rentRes = await fetch('http://localhost:3000/api/properties/rent');
      
      const saleData = await saleRes.json();
      const rentData = await rentRes.json();

      const combined = [
        ...saleData.map(p => ({ ...p, status: 'For Sale', typeKey: 'sale' })),
        ...rentData.map(p => ({ ...p, status: 'For Rent', typeKey: 'rent' }))
      ];
      
      setProperties(combined);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleDelete = async (id, typeKey) => {
    if (!window.confirm('Are you sure you want to delete this property?')) return;

    try {
      const response = await fetch(`http://localhost:3000/api/properties/${typeKey}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProperties(properties.filter((p) => p._id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="space-x-4 flex items-center">
            <Link
              to="/admin/add-property/sale"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              For Sale
            </Link>
            <Link
              to="/admin/add-property/rent"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              For Rent
            </Link>
            <button
              onClick={handleLogout}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 border-b">Title</th>
                <th className="p-4 border-b">Type</th>
                <th className="p-4 border-b">Price</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property._id} className="hover:bg-gray-50">
                  <td className="p-4 border-b">{property.title}</td>
                  <td className="p-4 border-b">{property.type}</td>
                  <td className="p-4 border-b">AED {property.price.toLocaleString()}</td>
                  <td className="p-4 border-b">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        property.status === 'For Sale'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {property.status}
                    </span>
                  </td>
                  <td className="p-4 border-b space-x-2">
                    <Link
                      to={`/admin/edit-property/${property.typeKey}/${property._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(property._id, property.typeKey)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {properties.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No properties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
