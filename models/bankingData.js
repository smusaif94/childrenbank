const accountData = {
  childName: 'Aisha',
  accountNumber: 'CB-204815',
  balance: 1245.5,
  monthlyDeposit: 120,
  rewardPoints: 340,
  rewardsLevel: 'Gold Saver',
  savingsGoals: [
    { name: 'New Bicycle', target: 500, saved: 420, dueDate: '2026-08-01' },
    { name: 'Science Kit', target: 150, saved: 105, dueDate: '2026-07-10' },
    { name: 'Art Workshop', target: 300, saved: 210, dueDate: '2026-09-15' }
  ],
  piggyBank: {
    coins: 148,
    notes: 65,
    weeklyAverage: 18
  },
  transactions: [
    { date: '2026-05-28', type: 'Deposit', description: 'Weekly allowance', amount: 25, status: 'Completed' },
    { date: '2026-05-30', type: 'Withdrawal', description: 'Stationery purchase', amount: -12.5, status: 'Completed' },
    { date: '2026-06-01', type: 'Reward', description: 'Savings milestone bonus', amount: 15, status: 'Completed' },
    { date: '2026-06-02', type: 'Deposit', description: 'Birthday gift deposit', amount: 50, status: 'Completed' },
    { date: '2026-06-03', type: 'Transfer', description: 'Move to bicycle goal', amount: -20, status: 'Pending Parent Approval' }
  ],
  pendingApprovals: [
    {
      requestId: 'PA-991',
      requestType: 'Transfer to Savings Goal',
      amount: 20,
      requestedOn: '2026-06-03',
      note: 'Transfer to bicycle goal'
    },
    {
      requestId: 'PA-992',
      requestType: 'Withdrawal',
      amount: 10,
      requestedOn: '2026-06-04',
      note: 'Book fair spending money'
    }
  ]
};

function getBankingData() {
  return accountData;
}

module.exports = { getBankingData };
