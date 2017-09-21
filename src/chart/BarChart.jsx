import React from 'react'
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTheme
} from 'victory'

const BarChart = (props) => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      polar={props.polar}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
    >
      <VictoryStack
        colorScale={'warm'}
      >
        {props.data.map((dataSubset, idx) => {
          return <VictoryBar
            data={dataSubset}
            key={idx}
            x={props.x}
            y={props.y}
          />
        })}
      </VictoryStack>
    </VictoryChart>
  )
}

export default BarChart
