'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = isAdmin
      ? 'http://localhost:8080/api/admin/login'
      : 'http://localhost:8080/api/users/login';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        alert('Login failed');
        return;
      }

      if (isAdmin) {
        const text = await res.text();
        if (text.includes('Admin login successful')) {
          localStorage.setItem('adminLoggedIn', 'true');
          alert('Admin login successful');
          router.push('/AdminDashboard');
        } else {
          alert('Invalid admin credentials');
        }
      } else {
        const data = await res.json();
        localStorage.setItem('userId', data.id);
        localStorage.setItem('username', data.username);
        alert('User login successful');
        router.push('/userdashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://wallpaperbat.com/img/168147-open-banking-around-the-world-global-law-firm-norton-rose.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          {isAdmin ? 'Admin Login' : 'User Login'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {isAdmin ? 'Login as Admin' : 'Login'}
          </button>
        </form>

        {!isAdmin && (
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a
              href="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </a>
          </p>
        )}

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsAdmin(!isAdmin)}
            className="text-xs text-gray-500 hover:text-blue-600 underline transition"
          >
            {isAdmin ? 'Login as User instead' : 'Login as Admin'}
          </button>
        </div>
      </div>
    </div>
  );
}
