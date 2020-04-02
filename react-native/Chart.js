import * as React from 'react'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import styled from 'styled-components/native'
import { darken } from 'polished'
import axios from 'axios'
import dayjs from 'dayjs'

const SChart = styled.View`
  background: ${darken(0.5, 'dodgerblue')};
  flex: 1;
  align-items: center;
  justify-content: center;
`

function ChartScreen() {
  const [dates, setDates] = React.useState([])
  const [deaths, setDeaths] = React.useState([])

  React.useEffect(() => {
    axios
      .get('https://pomber.github.io/covid19/timeseries.json')
      .then(res => {
        const polandTimeSeries = Object.entries(res.data)
          .filter(x => x[0] === 'Poland')[0][1]
        setDates(polandTimeSeries.map(x => dayjs(x.date).format('MM-DD')))
        setDeaths(polandTimeSeries.map(x => x.deaths))
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <SChart>
      {!!dates.length && !!deaths.length && (
        <LineChart
          data={{
            labels: dates.slice(-7).map(x => x.substring(x.length - 4, x.length)),
            datasets: [
              {
                data: deaths.slice(-7)
              }
            ]
          }}
          width={Dimensions.get('window').width - 20} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#08130D',
            backgroundGradientToOpacity: 0.5,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726'
            }
          }}
          // bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      )}

    </SChart>
  )
}

export default ChartScreen
