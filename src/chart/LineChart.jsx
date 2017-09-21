import React from 'react'
import {
  VictoryLine,
  VictoryChart
} from 'victory'

const LineChart = (props) => {
  return (
    <VictoryChart
      width={600}
      height={470}
      domain={{x: [1, props.data.length], y: [0, props.max]}}
      domainPadding={20}
      padding={40}
      animate={{ duration: 500 }}
    >
      <VictoryLine
        style={{
          data: {stroke: 'tomato'}
        }}
        labels={(datum) => parseInt(datum.y, 10)}
        data={props.data}
        x={props.x}
        y={props.y}
      />
    </VictoryChart>
  )
}

export default LineChart
