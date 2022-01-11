import React, { Fragment } from 'react';
import * as convUtil from 'utils/convUtil.js';

class SideInfomationAptTransDataTemplate extends React.Component {
    render() {
      const data = this.props.data;
  
      return (
        <tr>
          <td>{convUtil.getStrDateToFormatStrData(data.dealYearMonth, data.dealDay)}</td>
          <td>{convUtil.numberWithCommas(data.transactionAmount)}</td>
          <td>{data.exclusiveArea}({(data.exclusiveArea/3.3).toFixed(2)})</td>
          <td>{data.floor}</td>
        </tr>
      );
    }
}

export default SideInfomationAptTransDataTemplate;