// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 1 },
//   { name: 'Group B', value: 5 },

// ];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`promedio ${value}`}</text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// export default class InformacionEscolar extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

//   state = {
//     activeIndex: 0,
//   };

//   onPieEnter = (_, index) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={700} height={700}>
//           <Pie
//             activeIndex={this.state.activeIndex}
//             activeShape={renderActiveShape}
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={60}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             onMouseEnter={this.onPieEnter}
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }

// //en este componente necesitamos hacer una peticion a la api para obtener los datos del alumno, seria una version mas detallada de las asistencias, podrian ser gradicas o tablas, tambien se podria mostrar el promedio de calificaciones, el promedio de asistencias, el promedio de tareas entregadas, etc.

// // Styles definidos dentro del componente para el componente para no generar conflictos con otros componentes

// // export default InformacionEscolar;

import React, { PureComponent } from "react";
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
    name: "Bimestre 1",
    asistencias: 30,
    promedio: 80,
  },
  {
    name: "Bimestre 2",
    asistencias: 30,
    promedio: 75,
  },
  {
    name: "bimestre 3",
    asistencias: 27,
    promedio: 92,
  },
{
  name:"Bimestre 4",
  asistencias: 30,
  promedio:65
}
];

let promedio = 0;

for (let i = 0; i <data.length; i++){
 promedio = promedio + data[i].promedio;
}

promedio = promedio / data.length;

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const styles = {
  width: "33vw !important",
  
};

let medida = window.innerWidth;


console.log(medida);


if(medida < 768){
   medida = medida * 3
}






export default class InformacionEscolar extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/line-chart-with-customized-label-hs5b7";

  render() {
    return (
      <div style={styles}>
        <LineChart
          width={medida /3}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="promedio"
            stroke="#8884d8"
            label={<CustomizedLabel />}
          />
          <Line type="monotone" dataKey="asistencias" stroke="#82ca9d" />
        </LineChart>

        <h6>Promedio General: {promedio} </h6> 
      </div>
    );
  }
}
