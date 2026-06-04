const { getBankingData } = require('../models/bankingData');

function createBaseData(title) {
  return {
    title,
    data: getBankingData()
  };
}

function home(req, res) {
  res.render('home', createBaseData('Home'));
}

function dashboard(req, res) {
  res.render('dashboard', createBaseData('Dashboard'));
}

function savingsGoals(req, res) {
  res.render('savings-goals', createBaseData('Savings Goals'));
}

function piggyBank(req, res) {
  res.render('piggy-bank', createBaseData('Piggy Bank'));
}

function transactions(req, res) {
  res.render('transactions', createBaseData('Transactions'));
}

function parentApproval(req, res) {
  res.render('parent-approval', createBaseData('Parent Approval'));
}

function about(req, res) {
  res.render('about', createBaseData('About'));
}

module.exports = {
  home,
  dashboard,
  savingsGoals,
  piggyBank,
  transactions,
  parentApproval,
  about
};
