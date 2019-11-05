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
      packageName: this.props.value !== undefined ? this.props.value[0] : "",
      packageVersion: this.props.value !== undefined ? this.props.value[1] : "latest",
      mainPackage: this.props.mainPackage

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
      this.props.getPackagesByName({ packageName: this.state.packageName.trim(), packageVersion: this.state.packageVersion.trim().replace('^', "") });

    }
  }

  render() {
    return (
      <div>
        {this.state.mainPackage === undefined &&
          <div>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Package Name: </span>
            </div>
            <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={(eventName) => this.onNameChanges(eventName)} value={this.state.packageName} ></input>
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Package Version: </span>
            </div>
            <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={(eventVersion) => this.onVersionChanges(eventVersion)} value={this.state.packageVersion} ></input>
          </div>
        }
        <div >
          <span className="searchFieldWrapper">
            <input type="submit"
              value="Search"
              onClick={this.getPackagesByName} />
          </span>
          <span>
            Dependecy package name: {this.state.packageName}, version: {this.state.packageVersion}
          </span>
        </div>
        <ul>
          {this.props.packages.map(devPackage =>
            <li className="package_details" key={devPackage}>
              <PackagesList value={devPackage} getPackagesByName={this.props.getPackagesByName} mainPackage={false}></PackagesList>
            </li>
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
