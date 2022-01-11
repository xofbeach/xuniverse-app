import React, { Fragment } from 'react';
import { Marker } from 'react-naver-maps';
import * as convUtil from 'utils/convUtil.js';

class MarkerTemplate extends React.Component {
    render() {
      const navermaps = window.naver.maps;
      const markerData = this.props.markerData;
      const zoom = this.props.zoom;
      const displayTrade = this.props.displayTrade;

      return (
        <Marker
          // key={markerData.transactionId} // transactionId 없음 
          // title={'90000_markerTitle'}
          position={new navermaps.LatLng(markerData.y, markerData.x)}
          animation={0}
          onClick={() => this.props.onMarkerClicked(markerData)}
          icon={{                
            content:  [
              '<div style="display:none">',
                convUtil.markerTooltip(markerData, zoom, displayTrade),
              '</div>',
              '<div class="cs_mapbridge" onmouseover=(this.previousElementSibling.style.display="block") onmouseout=(this.previousElementSibling.style.display="none")>',
                '<div class="map_group _map_group crs">',
                    '<div class="map_marker _marker num1 num1_big"> ',
                        '<p class="ico _icon markerInfoArea">'+convUtil.markerInfomationArea(markerData, zoom, displayTrade)+'</p>',
                        '<p class="markerInfoAmount">'+convUtil.markerInfomationAmount(markerData, zoom, displayTrade)+'</p>',
                        '<span class="shd"></span>',
                    '</div>',
                '</div>',
              '</div>'
            ].join(''),
            size:{width:32,height:32},
            scaledSize:{width:24,height:32},
            anchor: {x:12, y:32}
          }}
          draggable={false}
        />
      )
    }
  }

  export default MarkerTemplate;