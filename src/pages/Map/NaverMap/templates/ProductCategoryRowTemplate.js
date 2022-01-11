import React, { Fragment } from 'react';

class ProductCategoryRowTemplate extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="6">
            {category}
          </th>
        </tr>
      );
    }
  }

  export default ProductCategoryRowTemplate;