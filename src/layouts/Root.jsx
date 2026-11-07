import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="max-w-360 mx-auto">
      <Outlet />
    </div>
  );
};

export default Root;
