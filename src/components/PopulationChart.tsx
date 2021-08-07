import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Chart
  } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';
import { ChartDataItem } from '../types/chartDataItem';
import '../css/chart.css';

const PopulationChart = (props:any) => {
    const chartData:ChartDataItem[] = props.chartData;
    return(
        <div className='item chart-box-container'>
            <h4>Population comparison</h4>
            {
                chartData.length>0
                ?
                <Chart data={chartData} >
                    <ValueScale name="population" />
                    <ArgumentAxis />
                    <ValueAxis scaleName="population" showGrid={true} showLine={true} showTicks={true} />
                    <BarSeries
                        name="country"
                        valueField="population"
                        argumentField="country"
                        scaleName="population"
                    />

                </Chart>
                :
                <div className='no-data'>No Countries selected</div>
            }
            
        </div>
    )
}

export default PopulationChart;