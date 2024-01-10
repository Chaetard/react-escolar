import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


// https://recharts.org/


class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;
    return (
      <text x={x} y={y} dy={-4}  fontSize={10} textAnchor="middle"  fill={stroke}
     
      style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
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

export default class InformacionEscolar extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/line-chart-with-customized-label-hs5b7";

  render() {
    const { data } = this.props;

    let materia = data[0].materia;

    let Promedio = 0;
    for (let i = 0; i < data.length; i++) {
      Promedio = Promedio + data[i].Promedio;
    }
    Promedio = Promedio / data.length;

    return (
      <div style={styles}>
        <LineChart
          width={window.innerWidth  > 768 ? window.innerWidth / 3.2 : 390}
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
            dataKey="Promedio"
            stroke="#8884d8"
            strokeWidth={3}
            label={<CustomizedLabel />}
          />
          
        </LineChart>

        {materia !== "General" ? (
          <h6>
            Promedio General de {materia}: {Promedio}
          </h6>
        ) : (
          <h6>Promedio General: {Promedio} </h6>
        )}
      </div>
    );
  }
}
