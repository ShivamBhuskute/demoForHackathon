import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Aug', hours: 32 },
  { name: 'Sept', hours: 42 },
  { name: 'Oct', hours: 50 },
  { name: 'Nov', hours: 62 },
  // Add more data points here
];

function Chart() {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="hours" stroke="#8884d8" />
    </LineChart>
  );
}

export default Chart;
