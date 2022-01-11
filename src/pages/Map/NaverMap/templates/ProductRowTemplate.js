import React, { Fragment } from 'react';
import * as convUtil from 'utils/convUtil.js';

class ProductRowTemplate extends React.Component {
    render() {
      const product = this.props.product;
  
      return (
        <tr>
          <a href="#" onClick={() => this.props.handlePanToTarget(product.x, product.y)}>{product.complexName}('{(product.constructionYeae).substr(-2)})</a>
          <td>{product.exclusiveArea}({(product.exclusiveArea/3.3).toFixed(2)})</td>
          <td>{product.floor}</td>
          <td>{convUtil.numberWithCommas(product.transactionAmount)}</td>
          <td>{product.dealYearMonth}{product.dealDay}</td>
          <td>{product.administrativeDistrictLev2} {product.administrativeDistrictLev3}</td>
        </tr>
      );
    }
  }

  export default ProductRowTemplate;