import Property from "../models/property.js";
import cloudinary from "../config/cloudinary.js";

/**
 * @desc Add a new property
 * @route POST /api/properties
 */
export const addProperty = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "You must be logged in to add a property!" });
    }

    const { title, price, location } = req.body;
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const property = new Property({
      title,
      price,
      location,
      imageUrl,
      user: req.user._id,
    });

    await property.save();
    res.status(201).json(property);

  } catch (error) {
    res.status(500).json({ message: "Failed to add property", error: error.message });
  }
};

/**
 * @desc Get all properties
 * @route GET /api/properties
 */
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("user", "email");
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch properties", error: error.message });
  }
};

/**
 * @desc Get single property by ID
 * @route GET /api/properties/:id
 */
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate("user", "name email");

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(property);

  } catch (error) {
    res.status(500).json({ message: "Error fetching property", error: error.message });
  }
};
