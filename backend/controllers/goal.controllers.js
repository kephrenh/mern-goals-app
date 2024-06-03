const asyncHandler = require("express-async-handler");

const Goal = require("../models/goal.model");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error(`Cannot find any goal with ID: ${id}`);
  }
  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(updatedGoal);

  // res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error(`Cannot find any goal with ID: ${id}`);
  }

  // const deletedGoal = await Goal.findByIdAndDelete(id);
  await goal.deleteOne();
  res.status(200).json({ id: id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
