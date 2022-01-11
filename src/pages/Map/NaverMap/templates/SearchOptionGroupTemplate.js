import { inject, observer } from 'mobx-react';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as dummyOptions from 'utils/dataUtil.js';

@inject('mapStore')
@observer
class SearchOptionGroupTemplate extends React.Component {
    render() {
        const mapStore = this.props.mapStore;

        const rows = [];
        const dtlOptions = [];
        const options = mapStore.data.searchOptions.options;
        options.forEach(element => {
            rows.push(
                <button onClick={() => mapStore.handleShowSearchOptionDtl(element.key)}>{element.selected ? "♥" : ""}{element.name}</button>
            );
            if (element.isShowDtl) {
                dummyOptions.dummyOptions.forEach(dummyOption => {
                    if (dummyOption.key === element.key) {
                        const optionValuekeys = Object.keys(dummyOption.value);
                        // 상세 선택값이 없을 경우 : default 전체
                        if (element.value === null) {
                            optionValuekeys.forEach(valueKey => {
                                dtlOptions.push(
                                    <button onClick={() => mapStore.handleSelectSearchOption(dummyOption.key, valueKey)}>
                                        {valueKey === "0" ? "♥" : ""}{dummyOption.value[valueKey]}
                                    </button>
                                );
                            })
                        } else {
                            optionValuekeys.forEach(valueKey => {
                                dtlOptions.push(
                                    <button onClick={() => mapStore.handleSelectSearchOption(dummyOption.key, valueKey)}>
                                        {element.value === valueKey ? "♥" : ""}{dummyOption.value[valueKey]}
                                    </button>
                                );
                            })
                        }
                    }
                })
            }
        });

        return (
            <div id="container">
                <div class="scene-apt">
                    <div class="apt-detail">
                        <fieldset class="search-group except-content">
                            {/* <legend>검색</legend> */}
                            <div class="keyword-group">
                                <div>
                                    <input type="text" class="keyword" placeholder="아파트, 지역 또는 학교명으로 검색" data-ga-event="search,input" value=""/>
                                    <button type="submit" class="btn-search disabled" data-ga-event="search,searchBtn">검색하기</button>
                                    <Link to="/board/postList">goto board</Link>
                                </div>
                            </div>
                                <div class="header-info">
                            </div>
                            <div>
                                <ul class="search-select-group">
                                    <div>
                                        {rows}
                                        <ul class="list-layer">
                                            <hr/>
                                            {dtlOptions}
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </fieldset>

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchOptionGroupTemplate;