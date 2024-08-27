import React, { useEffect, useState } from "react";
import { useUsers } from "./useUsers.ts";

const UsersList = (): JSX.Element => {
  const [showUsers, setShowUsers] = useState(false);

  const { data, isFetching, isError } = useUsers(showUsers);

  useEffect(() => {
    console.log(data, isFetching, isError);
  }, [data]);

  const handleClick = () => {
    setShowUsers(true);
  };

  return (
    <>
      <h1 className="text-3xl">Users List</h1>
      <button className="bg-primary text-white rounded-sm p-1.5" onClick={handleClick}>Fetch User Posts</button>

    </>
  );
};

export default UsersList;
