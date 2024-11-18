import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import ReusableCard from "../ReusableCard";
import '../css/home.css'
const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);
  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        "https://laara-api-dev-3rc4fb3npa-ew.a.run.app/search/stays/filtered",
        {
          headers: {
            "x-app-id": "3a2f3e5b-4a89-4fcb-a7e1-31421c7a6344",
          },
        }
      );
      getPropertyId(response.data.data);
    } catch (err) {
      setError("Failed to fetch properties. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };
  const getPropertyId = async (data) => {
    try {
      setLoading(true);
      const fetchedProperties = [];
      for (const id of data) {
        const response = await axios.get(
          `https://laara-api-dev-3rc4fb3npa-ew.a.run.app/search/stays/${id.id}`,
          {
            headers: {
              "x-app-id": "3a2f3e5b-4a89-4fcb-a7e1-31421c7a6344",
            },
          }
        );
        fetchedProperties.push(response.data.data);
      }
      setProperties(fetchedProperties);
    } catch (err) {
      setError("Failed to fetch properties. Please try again.", err);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {properties.map((property) => {
            return (
              <ReusableCard
                title={property.name}
                subheader={property.description}
                propertyImages={property.propertyImages}
                foodImages={property.foodImages}
                address={property.address}
                mealOptions={property.mealOptions}
                ratings={property.propertyRatings}
                rooms={property.rooms}
                staffImages={property.staffImages}
                accessibility={property.accessibilityFeatures}
                host={property.host}
                verification={property.guestVerificationMethod}
                amenities={property.propertyAmenities}
                languages={property.propertyLanguages}
                policies={property.propertyPolicies}
                type={property.type}
              />
            );
          })}
        </Box>
      </>
    </div>
  );
};

export default Home;
