import React from 'react'

const Chart = () => {
    return (
        <div className="chart-header mt-2">
            <div className="row">
                <hr/>
                <div className="col">
                    <p><strong>City</strong></p>
                </div>

                <div className="col">
                    <p><strong>Temperature (F)</strong></p>
                </div>

                <div className="col">
                    <p><strong>Pressure (hPa)</strong></p>
                </div>

                <div className="col">
                    <p><strong>Humidity (%)</strong></p>
                </div>
                <hr/>
            </div>
        </div>
    );
}

export default Chart;
