import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './packagesList.css';
import { getPackagesByName } from '../../store/actions/packagesActions';
import PackageRow from "./PackageRow";


class PackagesList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      packageName: "",
      packageVersion: "latest"

    }
    this.onNameChanges = this.onNameChanges.bind(this);
    this.onVersionChanges = this.onVersionChanges.bind(this);
    this.getPackagesByName = this.getPackagesByName.bind(this);

  }

  static propTypes = {
    packageName: PropTypes.string,
    packageVersion: PropTypes.string,
    packages: PropTypes.array.isRequired,
    getPackagesByName: PropTypes.func.isRequired
  }



  static defaultProps = {
    packages: [],
    packageName: "",
    packageVersion: "latest"

  }


  onNameChanges(eventName) {
    this.setState({
      packageName: eventName.target.value,
    })
  }

  onVersionChanges(eventVersion) {
    this.setState({
      packageVersion: eventVersion.target.value,
    })
  }


  getPackagesByName() {
    if (this.state.packageName !== "" && this.state.packageVersion !== undefined) {
      this.props.getPackagesByName({ packageName: this.state.packageName.trim(), packageVersion: this.state.packageVersion.trim() });

    }
  }

  render() {
    return (
      <div>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Package Name: </span>
        </div>
        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={(eventName) => this.onNameChanges(eventName)} value={this.state.packageName} ></input>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Package Version: </span>
        </div>
        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={(eventVersion) => this.onVersionChanges(eventVersion)} value={this.state.packageVersion} ></input>
        <div className="searchFieldWrapper">
          <input type="submit"
            value="Search"
            onClick={this.getPackagesByName} />
        </div>
        <h2>{this.state.packageName}</h2>
        <h2>{this.state.packageVersion}</h2>
        <ul>
          {this.props.packages.map(devPackage =>
            <PackageRow value={devPackage}></PackageRow>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  packages: Object.entries(state.packages),
  packageName: state.packageName,
  packageVersion: state.packageVersion
})

const dispatchToProps = (dispatch) => ({
  getPackagesByName: (packageName, packageVersion) => dispatch(getPackagesByName(packageName, packageVersion))
})

export default connect(mapStateToProps, dispatchToProps)(PackagesList);
