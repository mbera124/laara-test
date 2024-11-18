import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tabs,
  Tab,
  Box as MuiBox,
  Chip,
  Grid,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Map, Marker } from "@vis.gl/react-google-maps";

const ReusableCard = ({
  title,
  subheader,
  propertyImages,
  foodImages,
  address,
  mealOptions,
  rooms,
  staffImages,
  accessibility,
  host,
  verification,
  amenities,
  languages,
  policies,
  type,
}) => {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [markerLocation, setMarkerLocation] = useState({
    lat: address.latitude,
    lng: address.longitude,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 1000,
  };

  return (
    <Card sx={{ margin: "1rem", borderRadius: 2, boxShadow: 5 }}>
      <CardHeader
        title={
          <span>
            <b style={{ margin: 5 }}>{title}</b>
            <b>{type.toLowerCase()}</b>
          </span>
        }
        subheader={subheader}
        sx={{ backgroundColor: "#f5f5f5", textAlign: "center" }}
      />
      <CardContent>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ flex: "1 1 45%" }}>
            <Typography variant="body2" color="text.secondary">
              <Chip
                icon={<LocationCityIcon sx={{ margin: 1 }} />}
                label="COUNTRY"
                color="success"
                variant="outlined"
                sx={{ margin: 1, border: 0 }}
              />
              {address.country}
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 45%" }}>
            <Typography variant="body2" color="text.secondary">
              <Chip
                icon={<LocationCityIcon sx={{ margin: 1 }} />}
                label="CITY"
                color="success"
                variant="outlined"
                sx={{ margin: 1, border: 0 }}
              />
              {address.city}
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 45%" }}>
            <Typography variant="body2" color="text.secondary">
              <Chip
                icon={<LocationCityIcon sx={{ margin: 1 }} />}
                label="COUNTY"
                color="success"
                variant="outlined"
                sx={{ margin: 1, border: 0 }}
              />
              {address.county}
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 45%" }}>
            <Typography variant="body2" color="text.secondary">
              <Chip
                icon={<TrafficIcon sx={{ margin: 1 }} />}
                label="STREET"
                color="success"
                variant="outlined"
                sx={{ margin: 1, border: 0 }}
              />
              {address.street}
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 45%" }}>
            <Typography variant="body2" color="text.secondary">
              <Chip
                icon={<LocationCityIcon sx={{ margin: 1 }} />}
                label="TOWN"
                color="success"
                variant="outlined"
                sx={{ margin: 1, border: 0 }}
              />
              {address.town}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Box sx={{ height: 300, borderRadius: "20px", overflow: "hidden" }}>
            <Map
              style={{ borderRadius: "20px" }}
              defaultZoom={13}
              defaultCenter={markerLocation}
              gestureHandling="greedy"
              disableDefaultUI
            >
              <Marker position={markerLocation} />
            </Map>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button size="small" variant="outlined" onClick={handleClickOpen}>
          Explore
        </Button>
      </CardActions>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="tabs">
              <Tab label="Property Images" />
              <Tab label="Food Images" />
              <Tab label="Meal Options" />
              <Tab label="Rooms" />
              <Tab label="Staff Images" />
              <Tab label="Accessibility Features" />
              <Tab label="Host" />
              <Tab label="Propert Amenities" />
              <Tab label="Property Languages" />
              <Tab label="propertyPolicies" />
            </Tabs>
            {tabValue === 0 && (
              <Box sx={{ padding: 2 }}>
                <Slider {...sliderSettings}>
                  {propertyImages && propertyImages.length > 0 ? (
                    propertyImages.map((image, index) => {
                      return (
                        <Box key={index} sx={{ textAlign: "center" }}>
                          <img
                            src={image.images.url}
                            alt={`Slide ${index}`}
                            style={{
                              width: "100%",
                              height: "500px",
                              borderRadius: "8px",
                            }}
                          />
                        </Box>
                      );
                    })
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Property Information
                    </Typography>
                  )}
                </Slider>
              </Box>
            )}
            {tabValue === 1 && (
              <Box sx={{ padding: 2 }}>
                <Slider {...sliderSettings}>
                  {foodImages && foodImages.length > 0 ? (
                    foodImages.map((image, index) => {
                      return (
                        <Box key={index} sx={{ textAlign: "center" }}>
                          <img
                            src={image.images.url}
                            alt={`Slide ${index}`}
                            style={{
                              width: "100%",
                              height: "500px",
                              borderRadius: "8px",
                            }}
                          />
                        </Box>
                      );
                    })
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Food Images
                    </Typography>
                  )}
                </Slider>
              </Box>
            )}
            {tabValue === 2 && (
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6">
                  <Chip
                    icon={<BrunchDiningIcon sx={{ margin: 5 }} />}
                    label="PLAN"
                    color="success"
                    variant="outlined"
                    sx={{ margin: 1, border: 0 }}
                  />{" "}
                  <b> {mealOptions[0]?.plan || "No plan available"}</b>
                </Typography>
                {mealOptions[0]?.description && (
                  <Typography variant="body1">
                    Description: {mealOptions[0]?.description}
                  </Typography>
                )}
              </Box>
            )}
            {tabValue === 3 && (
              <Box sx={{ padding: 2 }}>
                {rooms &&
                  rooms.length > 0 &&
                  rooms.map((room, index) => (
                    <Box key={index} sx={{ marginBottom: 3 }}>
                      <Typography variant="h6">
                        <Chip
                          label="NAME"
                          color="primary"
                          variant="outlined"
                          sx={{ margin: 1, border: 0 }}
                        />
                        <b>{room.roomTypes.name}</b>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {room.roomTypes.description}
                      </Typography>
                      {room.roomTypes.pricings &&
                        room.roomTypes.pricings.length > 0 &&
                        room.roomTypes.pricings.map((pricing, pricingIndex) => (
                          <Box key={pricingIndex} sx={{ marginTop: 1 }}>
                            <Typography variant="body2">
                              <Chip
                                icon={<AttachMoneyIcon />}
                                color="success"
                                variant="outlined"
                                sx={{ margin: 1, border: 0 }}
                              />
                              <b>
                                {" "}
                                ${pricing.price} {pricing.pricingMode}
                              </b>{" "}
                              <Chip
                                icon={<FamilyRestroomIcon />}
                                label="OCCUPANTS"
                                color="primary"
                                variant="outlined"
                                sx={{ margin: 1, border: 0 }}
                              />{" "}
                              <b> {pricing.occupants}</b>
                            </Typography>
                            <Chip
                              label="PLAN"
                              color="success"
                              variant="outlined"
                              sx={{ margin: 1, border: 0 }}
                            />
                            <b>{pricing.mealOption?.plan || "No meal plan"}</b>
                          </Box>
                        ))}
                      {room.roomTypes.roomTypeImages &&
                        room.roomTypes.roomTypeImages.length > 0 && (
                          <Grid container spacing={2} sx={{ marginTop: 2 }}>
                            {room.roomTypes.roomTypeImages.map(
                              (imageObj, imageIndex) => (
                                <Grid item xs={4} key={imageIndex}>
                                  <img
                                    src={imageObj.images.url}
                                    alt={`Room Image ${imageIndex}`}
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      borderRadius: "8px",
                                    }}
                                  />
                                </Grid>
                              )
                            )}
                          </Grid>
                        )}
                    </Box>
                  ))}
              </Box>
            )}
            {tabValue === 4 && (
              <Box sx={{ padding: 2 }}>
                <Slider {...sliderSettings}>
                  {staffImages && staffImages.length > 0 ? (
                    staffImages.map((image, index) => {
                      return (
                        <Box key={index} sx={{ textAlign: "center" }}>
                          <img
                            src={image.images.url}
                            alt={`Slide ${index}`}
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "8px",
                            }}
                          />
                        </Box>
                      );
                    })
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No staff images to display
                    </Typography>
                  )}
                </Slider>
              </Box>
            )}
            {tabValue === 5 && (
              <Box sx={{ padding: 2 }}>
                {accessibility &&
                  accessibility.length > 0 &&
                  accessibility.map((access, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Typography variant="h6">
                          <Chip
                            icon={<BrunchDiningIcon sx={{ margin: 5 }} />}
                            label="CATEGORY"
                            color="success"
                            variant="outlined"
                            sx={{ margin: 1, border: 0 }}
                          />
                          <b>
                            {access.features.category ||
                              "No category Available"}
                          </b>
                        </Typography>
                        <Typography variant="body1">
                          <Chip
                            icon={<BrunchDiningIcon sx={{ margin: 5 }} />}
                            label="FEATURE"
                            color="success"
                            variant="outlined"
                            sx={{ margin: 1, border: 0 }}
                          />
                          {access.features.feature || "No feature available"}
                        </Typography>
                      </React.Fragment>
                    );
                  })}
              </Box>
            )}
            {tabValue === 6 && (
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6">
                  <Chip
                    icon={<BrunchDiningIcon sx={{ margin: 5 }} />}
                    label="First Name"
                    color="success"
                    variant="outlined"
                    sx={{ margin: 1, border: 0 }}
                  />
                  <b>{host?.firstname}</b>
                </Typography>
                <Typography variant="body1">
                  <Chip
                    icon={<BrunchDiningIcon sx={{ margin: 5 }} />}
                    label="Last Name"
                    color="success"
                    variant="outlined"
                    sx={{ margin: 1, border: 0 }}
                  />
                  {host?.lastname}
                </Typography>
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ReusableCard;
