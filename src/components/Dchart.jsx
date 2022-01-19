import React, { Fragment } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// const data = {
//     labels: ["Red","Blue","Green","Yellow"],
//     datasets:[{
//         data:[12,18,25,45]
//     }]
// };

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dchart = () => {

    return (
        <Fragment>
            <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx={210}
          cy={170}
          innerRadius={80}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
        </Fragment>
    )
}

export default Dchart
