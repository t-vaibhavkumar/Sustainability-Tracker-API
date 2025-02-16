const fs = require("fs");
const dataPath = process.env.DATA_PATH || "./data.json";

const readData = () => {
    try {
        return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    } catch (err) {
        return [];
    }
};

const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};


// @desc get all contacts
// @router Get /api/actions

const getActions = async (req, res) => {
    const actions = readData();
    res.status(200).json(actions);
}


// @desc add a contact
// @router POST /api/actions

const addAction = (req, res) => {
    const { action, date, points } = req.body;

    if (!action || !date || !points) {
        return res.status(400).json({ error: "All fields (action, date, points) are required." });
    }

    const data = readData();

    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    const newAction = { id: newId, action, date, points };
    data.push(newAction);
    writeData(data);

    res.status(201).json({ message: "Action added successfully!", data: newAction });
};


module.exports = { getActions, addAction };