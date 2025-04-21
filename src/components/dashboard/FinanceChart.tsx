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

const data = [
  {
    name: "Jan",
    receitas: 4000,
    despesas: 2400,
  },
  {
    name: "Feb",
    receitas: 3000,
    despesas: 1398,
  },
  {
    name: "Mar",
    receitas: 2000,
    despesas: 9800,
  },
  {
    name: "Apr",
    receitas: 2780,
    despesas: 3908,
  },
  {
    name: "May",
    receitas: 1890,
    despesas: 4800,
  },
  {
    name: "Jun",
    receitas: 2390,
    despesas: 3800,
  },
  {
    name: "Jul",
    receitas: 3490,
    despesas: 4300,
  },
  {
    name: "Aug",
    receitas: 3490,
    despesas: 4300,
  },
  {
    name: "Sep",
    receitas: 3490,
    despesas: 4300,
  },
  {
    name: "Oct",
    receitas: 3490,
    despesas: 4300,
  },
  {
    name: "Nov",
    receitas: 3490,
    despesas: 4300,
  },
  {
    name: "Dec",
    receitas: 3490,
    despesas: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finanças</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="receitas"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="despesas" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
