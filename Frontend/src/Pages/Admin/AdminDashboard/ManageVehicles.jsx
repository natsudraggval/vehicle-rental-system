import React, { useState, useEffect } from 'react'
import { BiSearch } from "react-icons/bi";
import { vehicleService } from '../../../services/vehicleService';
import { toast } from 'react-toastify';

function ManageVehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        vehicleNumber: '',
        price: '',
        category: '',
        imageUrl: '',
        description: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    // Fetch vehicles on component mount
    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            setLoading(true);
            const data = await vehicleService.getAllVehicles();
            setVehicles(data);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error fetching vehicles');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (editMode) {
                await vehicleService.updateVehicle(editId, formData);
                toast.success('Vehicle updated successfully');
                setEditMode(false);
                setEditId(null);
            } else {
                await vehicleService.createVehicle(formData);
                toast.success('Vehicle added successfully');
            }
            fetchVehicles();
            setFormData({
                name: '',
                vehicleNumber: '',
                price: '',
                category: '',
                imageUrl: '',
                description: ''
            });
        } catch (error) {
            console.error('Error details:', error.response || error);
            toast.error(error.response?.data?.message || `Error ${editMode ? 'updating' : 'adding'} vehicle`);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this vehicle?')) {
            try {
                console.log('Deleting vehicle with ID:', id); // Add logging
                await vehicleService.deleteVehicle(id);
                toast.success('Vehicle deleted successfully');
                fetchVehicles();
            } catch (error) {
                console.error('Delete error:', error.response || error); // Add detailed error logging
                toast.error(error.response?.data?.message || 'Error deleting vehicle');
            }
        }
    };

    const handleUpdate = async (vehicle) => {
        setEditMode(true);
        setEditId(vehicle._id);
        setFormData({
            name: vehicle.name,
            vehicleNumber: vehicle.vehicleNumber,
            price: vehicle.price,
            category: vehicle.category,
            imageUrl: vehicle.imageUrl,
            description: vehicle.description
        });
    };

    return (
        <div>
            {/* ADD VEHICLES FORM */}
            <div
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition"
            >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Add Vehicles</h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter vehicle name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1"
                        >Vehicle Number</label
                        >
                        <input
                            type="text"
                            placeholder="Enter vehicle number"
                            value={formData.vehicleNumber}
                            onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Price</label>
                        <input
                            type="text"
                            placeholder="e.g. 1500"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-2"
                        >Category</label
                        >
                        <div className="flex space-x-6">

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Car"
                                    checked={formData.category === 'Car'}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="sr-only peer"
                                />
                                <span
                                    className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-cyan-500 peer-checked:bg-cyan-500 transition"
                                >
                                    <span
                                        className="w-3 h-3 rounded-full bg-white peer-checked:bg-white"
                                    ></span>
                                </span>
                                <span className="text-gray-700 font-medium">Car</span>
                            </label>


                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Bike"
                                    checked={formData.category === 'Bike'}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="sr-only peer"
                                />
                                <span
                                    className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-cyan-500 peer-checked:bg-cyan-500 transition"
                                >
                                    <span
                                        className="w-3 h-3 rounded-full bg-white peer-checked:bg-white"
                                    ></span>
                                </span>
                                <span className="text-gray-700 font-medium">Bike</span>
                            </label>


                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Scooter"
                                    checked={formData.category === 'Scooter'}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="sr-only peer"
                                />
                                <span
                                    className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-cyan-500 peer-checked:bg-cyan-500 transition"
                                >
                                    <span
                                        className="w-3 h-3 rounded-full bg-white peer-checked:bg-white"
                                    ></span>
                                </span>
                                <span className="text-gray-700 font-medium">Scooter</span>
                            </label>
                        </div>
                    </div>


                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1"
                        >Image URL</label
                        >
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            value={formData.imageUrl}
                            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1"
                        >Description</label
                        >
                        <textarea
                            rows="3"
                            placeholder="Enter description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        ></textarea>
                    </div>


                    <div className="md:col-span-2 flex space-x-4 pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg font-medium shadow transition flex items-center justify-center min-w-[150px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (<img src="/wspinner.svg" alt="Loading..." className="w-6 h-6" />) : editMode ? 'Update Vehicle' : 'Save Vehicle'}
                        </button>
                        <button
                            type="button" onClick={() => {
                                setFormData({
                                    name: '',
                                    vehicleNumber: '',
                                    price: '',
                                    category: '',
                                    imageUrl: '',
                                    description: ''
                                });
                                setEditMode(false);
                                setEditId(null);
                            }}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium transition"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>



            {/* Manage Vehicles Table  */}
            <div
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition mt-6"
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Manage Vehicles</h3>


                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search vehicles..."
                            className="p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition w-64 bg-gray-50"
                        />

                        <BiSearch className="absolute left-3 top-2.5 text-gray-500 text-lg" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600">
                                <th className="py-3 px-4 text-left">No.</th>
                                <th className="py-3 px-4 text-left">Image</th>
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Vehicle No.</th>
                                <th className="py-3 px-4 text-left">Category</th>
                                <th className="py-3 px-4 text-left">Price</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicles.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="py-4 text-center text-gray-500">
                                        No vehicles found
                                    </td>
                                </tr>
                            ) : (
                                vehicles.map((vehicle, index) => (
                                    <tr key={vehicle._id} className="border-t border-gray-300 hover:bg-gray-50 transition">
                                        <td className="py-3 px-4">{index + 1}</td>
                                        <td className="py-3 px-4">
                                            <img
                                                src={vehicle.imageUrl}
                                                alt={vehicle.name}
                                                className="w-16 h-12 object-cover rounded"
                                            />
                                        </td>
                                        <td className="py-3 px-4 font-medium">{vehicle.name}</td>
                                        <td className="py-3 px-4">{vehicle.vehicleNumber}</td>
                                        <td className="py-3 px-4">{vehicle.category}</td>
                                        <td className="py-3 px-4">Rs {vehicle.price}</td>
                                        <td className="py-3 px-4 space-x-2">

                                            <button
                                                className="border border-gray-300 text-gray-700 hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-600 py-1.5 px-4 rounded-lg text-sm shadow-sm transition"
                                                onClick={() => handleUpdate(vehicle)}
                                            >
                                                Update
                                            </button>


                                            <button
                                                className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-4 rounded-lg text-sm shadow transition"
                                                onClick={() => handleDelete(vehicle._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageVehicles
