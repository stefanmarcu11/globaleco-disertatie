import React, { useState } from "react";
import "../pages/styleCss/collectionPoints.css";
import PickupAndPack from "../common/components/pickupForm";
import CollectionPointDetails from "../common/components/collectionPointDetails";

type Review = {
  user: string;
  rating: number; // Rating out of 5
  comment: string;
  date: string;
};

type CollectionPoint = {
  id: number;
  name: string;
  address: string;
  type: string;
  latitude: number;
  longitude: number;
  phone: string;
  administrator: string;
  images: string[];
  reviews: Review[];
  availability: "Open" | "Closed" | "Full";
};

const collectionPoints: CollectionPoint[] = [
  {
    id: 1,
    name: "Plastic and Paper Recycling - Bucharest",
    address: "93-95 Lânăriei Street, Bucharest",
    type: "Plastic, Paper, Glass",
    latitude: 44.4268,
    longitude: 26.1025,
    phone: "+40 123 456 789",
    administrator: "John Doe",
    images: [
      "https://unsplash.com/photos/a-woman-picking-up-garbage-plastic-bottles-into-a-box-and-plastic-bag-for-recycling-concept-veclvSgj9vg",
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe2",
    ],
    reviews: [
      { user: "Alice", rating: 5, comment: "Great service and very clean!", date: "2025-05-06" },
      { user: "Bob", rating: 4, comment: "Helpful staff, but parking is limited.", date: "2025-05-06" },
    ],
    availability: "Open",
  },
  {
    id: 2,
    name: "WEEE - Electronics Collection - Cluj-Napoca",
    address: "51 Fabricii de Zahăr Street, Cluj-Napoca",
    type: "Electronics, Batteries",
    latitude: 46.7712,
    longitude: 23.6236,
    phone: "+40 987 654 321",
    administrator: "Jane Smith",
    images: [],
    reviews: [
      { user: "Charlie", rating: 3, comment: "Average experience, but convenient location.", date: "2025-05-09" },
      { user: "Diana", rating: 4, comment: "Quick and easy drop-off process.", date: "2025-05-09" },
    ],
    availability: "Closed"
  },
  {
    id: 3,
    name: "Recycling Center - Iași",
    address: "34 Păcurari Road, Iași",
    type: "Plastic, Metal, Cardboard",
    latitude: 47.156,
    longitude: 27.5879,
    phone: "+40 555 666 777",
    administrator: "Alex Popescu",
    images: [],
    reviews: [
      { user: "Eve", rating: 5, comment: "Very organized and efficient!", date: "2025-05-09" },
      { user: "Frank", rating: 4, comment: "Good location, but could use more signage.", date: "2025-05-09" },
    ],
    availability: "Full"

  },
  {
    id: 4,
    name: "Eco Center - Timișoara",
    address: "100 Șagului Road, Timișoara",
    type: "Glass, Paper, Plastic",
    latitude: 45.7489,
    longitude: 21.2087,
    phone: "+40 444 555 666",
    administrator: "Maria Ionescu",
    images: [],
    reviews: [
      { user: "Grace", rating: 4, comment: "Friendly staff and easy to find.", date: "2025-05-09" },
      { user: "Hank", rating: 3, comment: "Could improve the cleanliness of the area.", date: "2025-05-07" },
    ],
    availability: "Full"
  },
  {
    id: 5,
    name: "Battery Recycling - Constanța",
    address: "400 Tomis Boulevard, Constanța",
    type: "Batteries, Electronics",
    latitude: 44.1733,
    longitude: 28.6383,
    phone: "+40 444 555 666",
    administrator: "Maria Ionescu",
    images: [],
    reviews: [
      { user: "Ivy", rating: 5, comment: "Great initiative for battery recycling!", date: "2025-05-07" },
      { user: "Jack", rating: 4, comment: "Convenient location, but a bit crowded.", date: "2025-05-07" },
    ],
    availability: "Closed"
  },
  {
    id: 6,
    name: "Green Point - Brașov",
    address: "119 Zizinului Street, Brașov",
    type: "Plastic, Paper, Metal",
    latitude: 45.6556,
    longitude: 25.6108,
    phone: "+40 333 222 111",
    administrator: "George Vasilescu",
    images: [],
    reviews: [
      { user: "Karen", rating: 4, comment: "Well-maintained and easy to use.", date: "2025-05-07" },
      { user: "Leo", rating: 5, comment: "Excellent service and very clean!", date: "2025-05-07" },
    ],
    availability: "Closed"
  },
  {
    id: 7,
    name: "WEEE Collection Center - Craiova",
    address: "325 Calea București, Craiova",
    type: "Electronics, Appliances",
    latitude: 44.3302,
    longitude: 23.7949,
    phone: "+40 721 123 456",
    administrator: "Andrei Popescu",
    images: [],
    reviews: [
      { user: "Mia", rating: 3, comment: "Good for electronics, but needs better organization.", date: "2024-05-05" },
      { user: "Nate", rating: 4, comment: "Helpful staff and quick service.", date: "2024-06-05" },
    ],
    availability: "Closed"
  },
  {
    id: 8,
    name: "Glass Recycling - Oradea",
    address: "171 Ogorului Street, Oradea",
    type: "Glass",
    latitude: 47.0722,
    longitude: 21.9217,
    phone: "+40 722 987 654",
    administrator: "Ioana Dumitrescu",
    images: [],
    reviews: [
      { user: "Olivia", rating: 5, comment: "Perfect for glass recycling!", date: "2025-05-05" },
      { user: "Paul", rating: 4, comment: "Easy to access and well-organized.", date: "2025-05-05" },
    ],
    availability: "Closed"
  },
  {
    id: 9,
    name: "Recycling Center - Galați",
    address: "165 Brăilei Street, Galați",
    type: "Plastic, Paper, Metal, Glass",
    latitude: 45.435,
    longitude: 28.007,
    phone: "+40 726 111 999",
    administrator: "Cristina Tudor",
    images: [],
    reviews: [
      { user: "Quinn", rating: 4, comment: "Great variety of recycling options.", date: "2025-05-05" },
      { user: "Rachel", rating: 5, comment: "Very clean and efficient!", date: "2025-05-05" },
    ],
    availability: "Closed"
  },
  {
    id: 10,
    name: "Collection Point - Ploiești",
    address: "98 Gheorghe Doja Street, Ploiești",
    type: "Plastic, Paper, Cardboard",
    latitude: 44.9384,
    longitude: 26.0226,
    phone: "+40 725 333 222",
    administrator: "George Vasilescu",
    images: [],
    reviews: [
      { user: "Sam", rating: 4, comment: "Good service, but parking is limited.", date: "2025-05-05" },
      { user: "Tina", rating: 5, comment: "Very helpful staff and easy to use.", date: "2025-05-05" },
    ],
    availability: "Closed"
  },
  {
    id: 13,
    name: "Plastic Recycling - Bacău",
    address: "78 Mărășești Street, Bacău",
    type: "Plastic, Paper, Glass, Metal",
    latitude: 46.5678,
    longitude: 26.8992,
    phone: "+40 733 777 999",
    administrator: "Adriana Neagu",
    images: [],
    reviews: [
      { user: "Uma", rating: 5, comment: "Excellent for plastic recycling!", date: "2025-05-05" },
      { user: "Victor", rating: 4, comment: "Good location, but could use more bins.", date: "2025-05-05" },
    ],
    availability: "Closed"
  },
];

const CollectionPointsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [showPickupForm, setShowPickupForm] = useState(false);
  const [showCollectionPointsModal, setShowCollectionPointsModal] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(
    null
  );

  const handleAddReview = (review: Review) => {
    if (selectedPoint) {
      selectedPoint.reviews.push(review); // Add the review to the selected point
      setSelectedPoint({ ...selectedPoint }); // Update the state to trigger a re-render
    }
  };

  // Get unique locations and materials for dropdown filters
  const uniqueLocations = Array.from(
    new Set(collectionPoints.map((point) => point.address.split(",")[1]?.trim()))
  );
  const uniqueMaterials = Array.from(
    new Set(
      collectionPoints
        .flatMap((point) => point.type.split(","))
        .map((material) => material.trim())
    )
  );

  // Filter collection points based on search term, location, and material
  const filteredPoints = collectionPoints.filter((point) => {
    const matchesSearch = `${point.name} ${point.address} ${point.type}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      !selectedLocation || point.address.includes(selectedLocation);
    const matchesMaterial =
      !selectedMaterial ||
      point.type.toLowerCase().includes(selectedMaterial.toLowerCase());

    return matchesSearch && matchesLocation && matchesMaterial;
  });



  const handleOpenPickupForm = (point: CollectionPoint) => {
    setSelectedPoint(point);
    setShowPickupForm(true);
    setShowCollectionPointsModal(false);
  };

  const handleClosePickupForm = () => {
    setSelectedPoint(null);
    setShowPickupForm(false);
  };

  const handleConfirmPickup = () => {
    alert(`Pickup confirmed for ${selectedPoint?.name}!`);
    setShowPickupForm(false);
  };

  const handleOpenModal = (point: CollectionPoint) => {
    setShowCollectionPointsModal(true);
    setSelectedPoint(point);
    setShowPickupForm(false);
  };

  const handleCloseModal = () => {
    setSelectedPoint(null);
  };

  return (
    <div className="main">
      <div
        style={{
          minHeight: "100vh",
          padding: "40px 0",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#205c3b", fontSize: "2.5rem", marginBottom: 24 }}>
          Collection Points
        </h1>
        <p
          style={{
            color: "#205c3b",
            fontSize: "1.2rem",
            marginBottom: 32,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Find the nearest recycling and waste collection points in your city.
          Click on the map icon to view the location.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, address, or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 16px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            width: "100%",
            maxWidth: "600px",
          }}
        />

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          {/* Location Filter */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              flex: 1,
            }}
          >
            <option value="">Filter by Location</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          {/* Material Filter */}
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              flex: 1,
            }}
          >
            <option value="">Filter by Material</option>
            {uniqueMaterials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>

        {/* Collection Points */}
        <div style={{ width: "100%", maxWidth: 700 }}>
          {filteredPoints.length > 0 ? (
            filteredPoints.map((point) => (
              <div
                key={point.id}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  padding: 24,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h2
                    style={{ margin: 0, color: "#205c3b", fontSize: "1.5rem" }}
                  >
                    {point.name}
                  </h2>
                  <p style={{ margin: "8px 0 0 0", color: "#333" }}>
                    <strong>Address:</strong> {point.address}
                  </p>
                  <p style={{ margin: "4px 0 0 0", color: "#333" }}>
                    <strong>Accepted:</strong> {point.type}
                  </p>
                  <p style={{ margin: "4px 0 0 0", color: "#333" }}>
                    <strong>Phone:</strong>{" "}
                    <a href={`tel:${point.phone}`}>{point.phone}</a>
                  </p>
                  <p style={{ margin: "4px 0 0 0", color: "#333" }}>
                    <strong>Administrator:</strong>{" "}
                    <a href={`/profile/${point.administrator}`}>
                      {point.administrator}
                    </a>
                  </p>
                  {/* Availability Section */}
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      color:
                        point.availability === "Open"
                          ? "#4caf50"
                          : point.availability === "Closed"
                            ? "#f44336"
                            : "#ff9800",
                      fontWeight: "bold",
                    }}
                  >
                    <strong>Availability:</strong> {point.availability}
                  </p>
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "10px 20px",
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                    onClick={() => handleOpenPickupForm(point)}
                  >
                    Pickup and Pack
                  </button>
                </div>
                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#4caf50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleOpenModal(point)}
                  title="View on map"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p style={{ color: "#333", textAlign: "center" }}>
              No collection points found for your search or filters.
            </p>
          )}
        </div>
      </div>

      {/* Render the PickupAndPack component */}
      {showPickupForm && selectedPoint && (
        <PickupAndPack
          collectionPoint={selectedPoint.type.split(",")}
          onClose={handleClosePickupForm}
          onConfirm={handleConfirmPickup}
        />
      )}
      {showCollectionPointsModal && selectedPoint && (
        <CollectionPointDetails
          isOpen={!!selectedPoint}
          onClose={handleCloseModal}
          latitude={selectedPoint.latitude}
          longitude={selectedPoint.longitude}
          images={selectedPoint.images}
          name={selectedPoint.name}
          address={selectedPoint.address}
          reviews={selectedPoint.reviews}
          onAddReview={handleAddReview}
        />
      )}
    </div>
  );
};

export default CollectionPointsPage;
