import {useSelector} from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const { currentUser, isVendor } = useSelector((state) => state.user);
console.log(isVendor);
  if (currentUser) {
    if (isVendor) {
      // Redirect to vendor home page if the user is a vendor
      return <Navigate to='/vendor-home' />;
    } else {
      // Redirect to regular user home page
      return <Navigate to='/user-home' />;
    }
  }

  // Redirect to sign-in page if the user is not authenticated
  return <Navigate to='/sign-in' />;
};
export default PrivateRoute;