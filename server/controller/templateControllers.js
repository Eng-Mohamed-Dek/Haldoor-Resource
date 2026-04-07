import Template from "../models/Template.js";

// CREATE a new template
export const createTemplate = async (req, res) => {
  try {
    const { title, description, category, fileUrl } = req.body;

    if (!title || !description || !category || !fileUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const avatar = req.file ? req.file.path : "https://res.cloudinary.com/dn4px5d11/image/upload/v1773664680/cover-01_ggkyle.png";

    const newTemplate = await Template.create({
      title,
      description,
      category,
      fileUrl,
      avatar
    });

    res.status(201).json({ message: "Template created", template: newTemplate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET templates with search + pagination
export const getTemplatesClient = async (req, res) => {
  try {
    const { search = "", category = "", page = 1, limit = 12 } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      query.category = category;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const templates = await Template.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Template.countDocuments(query);
    const totalPages = Math.ceil(total / parseInt(limit));

    res.json({ templates, page: parseInt(page), totalPages, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getTemplates = async (req, res) => {
  try {
    const { search = "", page = 1, limit = 10 } = req.query;

    const regex = new RegExp(search, "i");

    const query = search
      ? {
          $or: [
            { title: regex },
            { description: regex },
            { category: regex }
          ],
        }
      : {};

    const templates = await Template.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Template.countDocuments(query);

    res.json({
      templates,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET templates by category
export const getTemplatesByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const templates = await Template.find({
      category: { $regex: new RegExp(`^${category}$`, "i") }
    }).sort({ createdAt: -1 });

    res.json({ templates });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET single template by ID
export const getTemplateById = async (req, res) => {
  try {
    const { id } = req.params;

    const template = await Template.findById(id);
    if (!template) return res.status(404).json({ error: "Template not found" });

    res.json({ template });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE template
export const updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, fileUrl } = req.body;


    const template = await Template.findById(id);
    if (!template) return res.status(404).json({ error: "Template not found" });

    let avatar;
    if (req.file) {
      avatar = req.file.path
    }


      template.title = title || template.title;
    template.description = description || template.description;
    template.category = category || template.category;
    template.fileUrl = fileUrl || template.fileUrl;
    template.avatar = avatar || template.avatar;

    await template.save();

    res.json({ message: "Template updated", template });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE template
export const deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;

    const template = await Template.findByIdAndDelete(id);
    if (!template) return res.status(404).json({ error: "Template not found" });

    res.json({ message: "Template deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};