import React from 'react';
import Chart from './Chart';
import { getData } from './utils';

import { TypeChooser } from 'react-stockcharts/lib/helper';
// import { defaultScaleProvider } from 'react-stockcharts/lib/scale';

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <TypeChooser>
        {(type) => <Chart type={type} data={this.state.data} />}
      </TypeChooser>
    );
  }
}
export default ChartComponent;
