import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchDashboardData = async (token: string) => {
  try {
    const [summary, attendance, stats] = await Promise.all([
      axios.get(`${API_BASE_URL}/dashboard/summary`, {
        headers: { Authorization: `Bearer ${token}` }
      }),
      axios.get(`${API_BASE_URL}/dashboard/attendance`, {
        headers: { Authorization: `Bearer ${token}` }
      }),
      axios.get(`${API_BASE_URL}/dashboard/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      })
    ]);
    
    return {
      summary: summary.data,
      attendance: attendance.data,
      stats: stats.data
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};