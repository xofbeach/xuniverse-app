import React, { Fragment } from 'react';

import SideInfomationAptTransDataTemplate from 'pages/Map/NaverMap/templates/SideInfomationAptTransDataTemplate';

import { inject, observer } from 'mobx-react';

@inject('mapStore')
@observer
class SideInfomationTemplate extends React.Component {
    render() {
      const mapStore = this.props.mapStore;

      if (mapStore.data.sideInfomation.visible) {
        const rows = [];
        const aptTransDataHeader = mapStore.data.sideInfomation.header;
        const sideInfomationData = mapStore.data.sideInfomation.data;
        sideInfomationData.forEach((data) => {
          rows.push(
            <SideInfomationAptTransDataTemplate
              data={data}
            />
          );
        });
        return (
          <div id="container">
            <div class="scene-poi">
              <div class="poi-detail">
                <a href="#" class="btn-close" data-ga-event="apt,closeBtn" onClick={() => mapStore.handleCloseSideInfomation()}><span>닫기</span></a>
                {/* <table> */}
                  <p>{aptTransDataHeader.complexName}</p>
                  <p>{aptTransDataHeader.administrativeDistrictLev1} {aptTransDataHeader.administrativeDistrictLev2} {aptTransDataHeader.administrativeDistrictLev3} {aptTransDataHeader.roadName}</p>
                {/* </table> */}
                <table>
                  <thead>
                    <tr>
                      <th>계약일자</th>
                      <th>거래금액(만원)</th>
                      <th>전용면적m²(평)</th>
                      <th>층</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </table>
              </div>
            </div>
          </div>
        )
      } else {
        return(null)
      }
    }
  }

export default SideInfomationTemplate;