const { Account } = require('../models')

const getAllAccounts = async (req, res) => {
  try {
    const results = await Account.find()
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addNewAccount = async (req, res) => {
  try {
    const results = await new Account(req.body)
    await results.save()
    return res.status(201).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllAccounts,
  addNewAccount
}