import { GET_PACKAGES_BY_NAME } from './constants';



export const getPackagesByName = (packageDetails) => dispatch => {
  return fetch('/api/packages/' + packageDetails.packageName + '/' + packageDetails.packageVersion)
    .then(res => res.json())
    .then(packages => dispatch({ type: GET_PACKAGES_BY_NAME, payload: packages !== undefined ? packages.dependencies || packages.devdependencies : null }))
}



