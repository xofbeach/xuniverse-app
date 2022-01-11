import React, { Fragment } from 'react';

import ProductCategoryRowTemplate from 'pages/Map/NaverMap/templates/ProductCategoryRowTemplate';
import ProductRowTemplate from 'pages/Map/NaverMap/templates/ProductRowTemplate';

class ProductTableTemplate extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach((product) => {
        if (product.complexName.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.legalDistrict !== lastCategory) {
          rows.push(
            <ProductCategoryRowTemplate
              category={product.legalDistrict}
              key={product.legalDistrict} />
          );
        }
        rows.push(
          <ProductRowTemplate
            product={product}
            key={product.transactionId}
            handlePanToTarget={(x, y) => this.props.handlePanToTarget(x, y)}
          />
        );
        lastCategory = product.legalDistrict;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>아파트명(건축년도)</th>
              <th>전용면적m²(평)</th>
              <th>층</th>
              <th>거래금액(만원)</th>
              <th>계약일자</th>
              <th>위치</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default ProductTableTemplate;