import React, { Component } from 'react'
import { maxBy } from 'lodash/math'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import LineChart from './chart/LineChart'
import DataGrid from './grid/DataGrid'

const data = [
  {id: 1, season: 1, deaths: 59},
  {id: 2, season: 2, deaths: 130},
  {id: 3, season: 3, deaths: 87},
  {id: 4, season: 4, deaths: 182},
  {id: 5, season: 5, deaths: 246},
  {id: 6, season: 6, deaths: 540}
]

class App extends Component {
  constructor (props) {
    super(props)

    const max = maxBy(data, 'deaths').deaths

    this.state = {
      data: data,
      max
    }

    this.handleGridUpdate = this.handleGridUpdate.bind(this)
  }

  handleGridUpdate (evt) {
    const id = evt.fromRowId
    const deaths = parseInt(evt.updated.deaths, 10)

    const data = this.state.data.map((row) => {
      if (row.id !== id) return row
      return {
        id: row.id,
        season: row.season,
        deaths
      }
    })

    this.setState({
      ...this.state,
      data
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>Game Of Throne: deaths by season</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div>
            <DataGrid
              columns={[
                {key: 'season', name: 'Season'},
                {key: 'deaths', name: 'Deaths', editable: true}
              ]}
              rows={this.state.data}
              rowGetter={(i) => { return this.state.data[i] }}
              handleGridRowsUpdated={this.handleGridUpdate}
            />
          </div>
          <div>
            <LineChart
              data={this.state.data}
              x='season'
              y='deaths'
              max={this.state.max}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
