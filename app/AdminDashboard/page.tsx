'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  username: string;
  balance: number;
}

interface Transaction {
  id: number;
  senderId: number;
  receiverId: number;
  amount: number;
  timestamp: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const isAdmin = localStorage.getItem('adminLoggedIn');
    if (!isAdmin) {
      router.push('/login');
    }
    fetchUsers();
    fetchRecentTransactions();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/admin/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const fetchRecentTransactions = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/admin/transactions/recent');
      const data = await res.json();
      setTransactions(data);
    } catch (err) {
      console.error('Error fetching transactions:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/login');
  };

  const handleDeleteUser = async (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await fetch(`http://localhost:8080/api/users/${userId}`, {
          method: 'DELETE',
        });
        alert('User deleted');
        fetchUsers();
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    }
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">{users.length}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold">Total Balance</h2>
          <p className="text-2xl font-bold text-green-600">
            ₹ {users.reduce((sum, u) => sum + u.balance, 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <p className="text-3xl font-bold text-purple-600">{transactions.length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>
        <input
          type="text"
          placeholder="Search by username"
          className="mb-4 w-full px-3 py-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="space-y-2 text-sm">
          {filteredUsers.map((user) => (
            <li key={user.id} className="flex justify-between items-center border-b pb-1">
              <span>
                ID: <strong>{user.id}</strong> - {user.username}
              </span>
              <div className="flex gap-4">
                <span className="text-green-600 font-semibold">
                  ₹ {user.balance.toFixed(2)}
                </span>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul className="space-y-2 text-sm">
          {transactions.map((txn) => (
            <li key={txn.id} className="flex justify-between border-b pb-1">
              <span>
                <strong>From:</strong> {txn.senderId} <strong>To:</strong> {txn.receiverId}
              </span>
              <span className="text-red-600">₹ {txn.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
