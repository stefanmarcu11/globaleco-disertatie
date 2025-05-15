import React, { useState, useEffect } from "react";
import "../styleCss/pickupForm.css";

const PickupAndPack: React.FC<{ collectionPoint: any; onClose: () => void; onConfirm: () => void }> = ({
    collectionPoint,
    onClose,
    onConfirm,
}) => {
    const [locationLoading, setLocationLoading] = useState(true);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

    // State to track invalid fields
    const [invalidFields, setInvalidFields] = useState<string[]>([]);

    useEffect(() => {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                        setLocationLoading(false);
                    },
                    (error) => {
                        console.error("Error getting location:", error);
                        setLocationLoading(false);
                    }
                );
            } else {
                setLocationLoading(false);
            }
        } catch (error) {
            console.log("Something went wrong!");
        }
    }, []);

    const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

    // Validation logic
    const handleConfirm = () => {
        const invalid: string[] = [];

        // Check each field
        const pickupDay = (document.getElementById("pickupDay") as HTMLSelectElement)
            .value;
        const pickupTime = (document.getElementById("pickupTime") as HTMLSelectElement)
            .value;
        const packageType = (document.getElementById("packageType") as HTMLSelectElement)
            .value;
        const packageSize = (document.getElementById("packageSize") as HTMLSelectElement)
            .value;

        if (!pickupDay) invalid.push("pickupDay");
        if (!pickupTime) invalid.push("pickupTime");
        if (!packageType) invalid.push("packageType");
        if (!packageSize) invalid.push("packageSize");

        setInvalidFields(invalid);

        // If no invalid fields, proceed with confirmation
        if (invalid.length === 0) {
            onConfirm();
        }
    };

    // Handle field change to remove invalid state
    const handleFieldChange = (fieldId: string) => {
        setInvalidFields((prev) => prev.filter((field) => field !== fieldId));
    };

    return (
        <div className="modal-container">
            <div className="form-container">
                {/* Close Button */}
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2 className="form-title">Pickup and Pack</h2>
                <form className="form-grid">
                    {/* Pickup Day */}
                    <div
                        className={`form-group ${invalidFields.includes("pickupDay") ? "invalid" : ""
                            }`}
                    >
                        <label htmlFor="pickupDay">
                            Pickup Day<span className="required">*</span>
                        </label>
                        <select
                            id="pickupDay"
                            name="pickupDay"
                            onChange={() => handleFieldChange("pickupDay")}
                        >
                            <option value="">Select a day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>

                    {/* Pickup Time */}
                    <div
                        className={`form-group ${invalidFields.includes("pickupTime") ? "invalid" : ""
                            }`}
                    >
                        <label htmlFor="pickupTime">
                            Pickup Time<span className="required">*</span>
                        </label>
                        <select
                            id="pickupTime"
                            name="pickupTime"
                            onChange={() => handleFieldChange("pickupTime")}
                        >
                            <option value="">Select a time</option>
                            <option value="08:00 - 10:00">08:00 - 10:00</option>
                            <option value="10:00 - 12:00">10:00 - 12:00</option>
                            <option value="12:00 - 14:00">12:00 - 14:00</option>
                            <option value="14:00 - 16:00">14:00 - 16:00</option>
                            <option value="16:00 - 18:00">16:00 - 18:00</option>
                        </select>
                    </div>

                    {/* Package Type */}
                    <div
                        className={`form-group ${invalidFields.includes("packageType") ? "invalid" : ""
                            }`}
                    >
                        <label htmlFor="packageType">
                            Package Type<span className="required">*</span>
                        </label>
                        <select
                            id="packageType"
                            name="packageType"
                            onChange={() => handleFieldChange("packageType")}
                        >
                            <option value="">Select an option</option>
                            {collectionPoint.map((option: string, index: string) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Package Size */}
                    <div
                        className={`form-group ${invalidFields.includes("packageSize") ? "invalid" : ""
                            }`}
                    >
                        <label htmlFor="packageSize">
                            Package Size<span className="required">*</span>
                        </label>
                        <select
                            id="packageSize"
                            name="packageSize"
                            onChange={() => handleFieldChange("packageSize")}
                        >
                            <option value="">Select a size</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>

                    {/* Pickup Location */}
                    <div className="form-group">
                        <label htmlFor="pickupLocation">Pickup Location</label>
                        {!locationLoading ? (
                            <iframe
                                title="User Location"
                                src={mapSrc}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    borderRadius: "10px",
                                    border: "none",
                                }}
                            ></iframe>
                        ) : (
                            <p>Loading map...</p>
                        )}
                    </div>

                    {/* Location Detail */}
                    <div className="form-group">
                        <label htmlFor="locationDetail">Location Detail (optional)</label>
                        <input
                            type="text"
                            id="locationDetail"
                            name="locationDetail"
                            placeholder="Any landmarks near your location?"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="form-submit">
                        <button
                            type="button"
                            className="form-cancel-button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="form-confirm-button"
                            onClick={handleConfirm}
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PickupAndPack;
