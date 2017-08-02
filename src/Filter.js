import React, { Component } from 'react';

export default class Filter extends Component {
  selectFilter = e => {
    this.props.onFilterSelect(e.target.value);
  };

  render() {
    const { filterSelections } = this.props;

    const optionElements = [];
    filterSelections.forEach(selection => {
      optionElements.push(
        <option key={selection} value={selection}>
          {selection}
        </option>
      );
    });

    return (
      <select className="filter" onClick={this.selectFilter}>
        <option value="">Filter by size</option>
        {optionElements}
      </select>
    );
  }
}
