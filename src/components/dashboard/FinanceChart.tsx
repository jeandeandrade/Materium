"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface FinancialData {
  name: string;
  receitas: number;
  despesas: number;
}

interface FinanceChartProps {
  data?: FinancialData[];
  loading: boolean; 
}

const FinanceChart = ({ data, loading }: FinanceChartProps) => {
  const defaultData = Array.from({ length: 12 }).map((_, i) => ({
    name: new Date(0, i).toLocaleString('default', { month: 'short' }),
    receitas: 0,
    despesas: 0
  }));

  const chartData = loading ? [] : data?.length ? data : defaultData;

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finanças</h1>
        <Image src="/moreDark.png" alt="Mais opções" width={20} height={20} />
      </div>
      
      {loading ? (
        <div className="h-[90%] flex items-center justify-center">
          <div className="animate-pulse">Carregando dados financeiros...</div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db", fontSize: 12 }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis 
              axisLine={false} 
              tick={{ fill: "#d1d5db", fontSize: 12 }} 
              tickLine={false}
              tickMargin={20}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip 
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, value === 1 ? 'Receita' : 'Despesa']}
            />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ 
                paddingTop: "10px", 
                paddingBottom: "30px",
                fontSize: "12px"
              }}
              formatter={(value) => <span className="text-gray-600">{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="receitas"
              stroke="#C3EBFA"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1000}
            />
            <Line 
              type="monotone" 
              dataKey="despesas" 
              stroke="#CFCEFF" 
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default FinanceChart;