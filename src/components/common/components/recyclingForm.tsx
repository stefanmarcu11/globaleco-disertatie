import React, { useState } from "react";
import "../styleCss/recyclingForm.css";

const RecyclingForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        recyclingType: "",
        quantity: "",
        location: "",
        message: "",
        wasteOption: "",
    });

    const wasteOptions = [
        "The collection of non-hazardous waste",
        "Hazardous waste collection",
        "Wholesale trade of waste and scrap",
        "Road freight transport",
        "Transport of hazardous substances",
        "Collection and treatment of other waste",
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for contributing to a greener planet with GlobalEco!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            recyclingType: "",
            quantity: "",
            location: "",
            message: "",
            wasteOption: "",
        });
        onClose(); // Close the modal after submission
    };

    return (
        <div className="modal-container">
            <div className="form-container">
                <h2 className="form-title">Recycle with GLOBALECO</h2>
                <form onSubmit={handleSubmit} className="form-grid">
                    {/* Name, Email, and Phone in the same row */}
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone"
                                required
                            />
                        </div>
                    </div>

                    {/* Waste Option */}
                    <div className="form-group">
                        <label htmlFor="wasteOption">Waste Option</label>
                        <select
                            id="wasteOption"
                            name="wasteOption"
                            value={formData.wasteOption}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select an option</option>
                            {wasteOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Recycling Type */}
                    <div className="form-group">
                        <label htmlFor="recyclingType">Recycling Type</label>
                        <select
                            id="recyclingType"
                            name="recyclingType"
                            value={formData.recyclingType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="plastic">Plastic</option>
                            <option value="paper">Paper</option>
                            <option value="metal">Metal</option>
                            <option value="glass">Glass</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>

                    {/* Quantity */}
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity (kg)</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="Enter quantity"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter an address"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter additional details"
                        />
                    </div>

                    {/* Submit and Close Buttons */}
                    <div className="form-submit">
                        <button type="button" className="form-close-button" onClick={onClose}>
                            Close
                        </button>
                        <button type="submit" className="form-submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecyclingForm;
