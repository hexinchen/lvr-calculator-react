let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const getItems = (req, res) => {
  res.json(items);
};

const calculateLVR = (req, res) => {
  const { loanAmount, cashOutAmount, propertyValue } = req.body;
  const lvr = ((loanAmount + cashOutAmount) / propertyValue) * 100;

  setTimeout(() => {
    res.status(200).json(lvr);
  }, 1500);
};

const getItemById = (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((i) => i.id === itemId);
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
};

const createItem = (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((i) => i.id === itemId);
  if (!item) return res.status(404).send("Item not found");

  item.name = req.body.name;
  res.json(item);
};

const deleteItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((i) => i.id === itemId);
  if (itemIndex === -1) return res.status(404).send("Item not found");

  items.splice(itemIndex, 1);
  res.status(204).send();
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  calculateLVR,
};
