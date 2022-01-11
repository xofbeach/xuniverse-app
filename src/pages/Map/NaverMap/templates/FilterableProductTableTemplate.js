import React, { Fragment } from 'react';

import SearchBar from 'pages/Map/NaverMap/templates/SearchBar';
import ProductTableTemplate from 'pages/Map/NaverMap/templates/ProductTableTemplate';

class FilterableProductTableTemplate extends React.Component {
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.props.filterText}
            inStockOnly={this.props.inStockOnly}
            onFilterTextChange={(t) => this.props.handleFilterTextChange(t)}
            onInStockChange={(t) => this.props.handleInStockChange(t)}
          />
          <ProductTableTemplate
            products={this.props.products}
            filterText={this.props.filterText}
            inStockOnly={this.props.inStockOnly}
            handlePanToTarget={(x, y) => this.props.handlePanToTarget(x, y)}
          />
        </div>
      );
    }
  }

  export default FilterableProductTableTemplate;