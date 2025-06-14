// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Wallet, PlusCircle, Send, History } from 'lucide-react';

// interface Transaction {
//   id: number;
//   senderId: number;
//   receiverId: number;
//   amount: number;
//   timestamp: string;
// }

// export default function UserDashboard() {
//   const [userId, setUserId] = useState<number | null>(null);
//   const [username, setUsername] = useState('');
//   const [balance, setBalance] = useState<number | null>(null);
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const id = localStorage.getItem('userId');
//     const name = localStorage.getItem('username');

//     if (!id || !name) {
//       router.push('/login');
//       return;
//     }

//     const parsedId = parseInt(id);
//     setUserId(parsedId);
//     setUsername(name);

//     fetchBalance(parsedId);
//     fetchTransactions(parsedId);
//   }, []);

//   const fetchBalance = async (id: number) => {
//     try {
//       const res = await fetch(`http://localhost:8080/api/users/${id}/balance`);
//       const data = await res.json();
//       setBalance(data.balance);
//     } catch (err) {
//       console.error('Error fetching balance:', err);
//     }
//   };

//   const fetchTransactions = async (id: number) => {
//     try {
//       const res = await fetch(`http://localhost:8080/api/transactions/user/${id}`);
//       const data = await res.json();
//       setTransactions(data.slice(-5).reverse()); // last 5 transactions
//     } catch (err) {
//       console.error('Error fetching transactions:', err);
//     }
//   };

//   const handleAddMoney = async () => {
//     if (!userId) return;

//     const input = prompt('Enter amount to add:');
//     const amount = parseFloat(input || '0');

//     if (!amount || amount <= 0) {
//       alert('Please enter a valid amount.');
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:8080/api/users/${userId}/add-money`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert(data.message);
//         fetchBalance(userId);
//         fetchTransactions(userId);
//       } else {
//         alert('Add money failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong while adding money.');
//     }
//   };

//   const handleTransferMoney = async () => {
//     if (!userId) return;

//     const receiverId = prompt('Enter receiver ID:');
//     const amountStr = prompt('Enter amount to transfer:');
//     const amount = parseFloat(amountStr || '0');

//     if (!receiverId || !amount || amount <= 0) {
//       alert('Please enter valid receiver ID and amount.');
//       return;
//     }

//     try {
//       const res = await fetch(
//         `http://localhost:8080/api/users/${userId}/transfer?receiverId=${receiverId}&amount=${amount}`,
//         {
//           method: 'POST',
//         }
//       );

//       const data = await res.text();

//       if (res.ok) {
//         alert(data);
//         fetchBalance(userId);
//         fetchTransactions(userId);
//       } else {
//         alert('Transfer failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong while transferring money.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome, {username}</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {/* Balance Card */}
//         <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
//           <div className="bg-green-100 p-3 rounded-full">
//             <Wallet className="text-green-600 w-6 h-6" />
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold text-gray-700">Account Balance</h2>
//             <p className="text-2xl font-bold text-green-600">
//               ₹ {balance !== null ? balance.toFixed(2) : 'Loading...'}
//             </p>
//           </div>
//         </div>

//         {/* Actions Card */}
//         <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between gap-4">
//           <button
//             onClick={handleAddMoney}
//             className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             <PlusCircle className="w-5 h-5" /> Add Money
//           </button>
//           <button
//             onClick={handleTransferMoney}
//             className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//           >
//             <Send className="w-5 h-5" /> Transfer Money
//           </button>
//         </div>

//         {/* Transactions Card */}
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <div className="flex items-center gap-2 mb-4">
//             <History className="w-5 h-5 text-gray-600" />
//             <h2 className="text-lg font-semibold text-gray-700">Last 5 Transactions</h2>
//           </div>
//           <ul className="text-sm space-y-3">
//             {transactions.length === 0 ? (
//               <p className="text-gray-500">No transactions found.</p>
//             ) : (
//               transactions.map((txn) => (
//                 <li key={txn.id} className="border-b pb-2">
//                   <p className="text-gray-800">
//                     <span className="font-medium">To:</span> {txn.receiverId} &nbsp;
//                     <span className="font-medium text-blue-600">₹{txn.amount}</span>
//                   </p>
//                   <p className="text-gray-500 text-xs">
//                     {new Date(txn.timestamp).toLocaleString()}
//                   </p>
//                 </li>
//               ))
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wallet, PlusCircle, Send, History, LogOut } from 'lucide-react';

interface Transaction {
  id: number;
  senderId: number;
  receiverId: number;
  amount: number;
  timestamp: string;
}

export default function UserDashboard() {
  const [userId, setUserId] = useState<number | null>(null);
  const [username, setUsername] = useState('');
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem('userId');
    const name = localStorage.getItem('username');

    if (!id || !name) {
      router.push('/login');
      return;
    }

    const parsedId = parseInt(id);
    setUserId(parsedId);
    setUsername(name);

    fetchBalance(parsedId);
    fetchTransactions(parsedId);
  }, []);

  const fetchBalance = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/api/users/${id}/balance`);
      const data = await res.json();
      setBalance(data.balance);
    } catch (err) {
      console.error('Error fetching balance:', err);
    }
  };

  const fetchTransactions = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:8080/api/transactions/user/${id}`);
      const data = await res.json();
      setTransactions(data.slice(-5).reverse());
    } catch (err) {
      console.error('Error fetching transactions:', err);
    }
  };

  const handleAddMoney = async () => {
    if (!userId) return;

    const input = prompt('Enter amount to add:');
    const amount = parseFloat(input || '0');

    if (!amount || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:8080/api/users/${userId}/add-money`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        fetchBalance(userId);
        fetchTransactions(userId);
      } else {
        alert('Add money failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong while adding money.');
    }
  };

  const handleTransferMoney = async () => {
    if (!userId) return;

    const receiverId = prompt('Enter receiver ID:');
    const amountStr = prompt('Enter amount to transfer:');
    const amount = parseFloat(amountStr || '0');

    if (!receiverId || !amount || amount <= 0) {
      alert('Please enter valid receiver ID and amount.');
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:8080/api/users/${userId}/transfer?receiverId=${receiverId}&amount=${amount}`,
        { method: 'POST' }
      );

      const data = await res.text();

      if (res.ok) {
        alert(data);
        fetchBalance(userId);
        fetchTransactions(userId);
      } else {
        alert('Transfer failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong while transferring money.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
      {/* Header with Logout */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {username}</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Balance Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Wallet className="text-green-600 w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Account Balance</h2>
            <p className="text-2xl font-bold text-green-600">
              ₹ {balance !== null ? balance.toFixed(2) : 'Loading...'}
            </p>
          </div>
        </div>

        {/* Actions Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between gap-4">
          <button
            onClick={handleAddMoney}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <PlusCircle className="w-5 h-5" /> Add Money
          </button>
          <button
            onClick={handleTransferMoney}
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            <Send className="w-5 h-5" /> Transfer Money
          </button>
        </div>

        {/* Transactions Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <History className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-700">Last 5 Transactions</h2>
          </div>
          <ul className="text-sm space-y-3">
            {transactions.length === 0 ? (
              <p className="text-gray-500">No transactions found.</p>
            ) : (
              transactions.map((txn) => (
                <li key={txn.id} className="border-b pb-2">
                  <p className="text-gray-800">
                    <span className="font-medium">To:</span> {txn.receiverId} &nbsp;
                    <span className="font-medium text-blue-600">₹{txn.amount}</span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(txn.timestamp).toLocaleString()}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
