import { inject, observer } from 'mobx-react';
import React, { Fragment } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

@inject('mapStore')
@observer
class RenderAfterNavermapsLoadedTemplate extends React.Component {
    componentDidMount() {
      // this.setState({ initBounds: this.naverMapRef.instance.getBounds() })   
    }
  
    render() {
      const mapStore = this.props.mapStore;
      return (
        <div>
          <NaverMap 
            naverRef={(ref) => mapStore.setNaverMapRef(ref) }
            id='maps-getting-started-controlled' 
            style={{width: '100%', height: '800px'}}
            
            // uncontrolled zoom
            defaultZoom={mapStore.data.zoom}
  
            // controlled center
            // Not defaultCenter={this.state.center}
            center={mapStore.data.center}
            zoom={mapStore.data.zoom}
            onCenterChanged={center => mapStore.handleCenterChanged(center)}
            onZoomChanged={(zoom)=> mapStore.handleZoomChanged(zoom)}
            // onBoundsChanged={(bounds) => mapStore.handleBoundsChanged(bounds)}
            onDragend={(bounds) => mapStore.handleBoundsChanged(bounds)}
          >
            {mapStore.data.markers}
          </NaverMap>
          <p style={{textAlign: "right"}}>lat: {mapStore.data.center.y || mapStore.data.center.lat} / lng: {mapStore.data.center.x || mapStore.data.center.lng} / zoom: {mapStore.data.zoom}</p>
        </div>
      )
    }
}

export default RenderAfterNavermapsLoadedTemplate;