import React, { useEffect, useState } from "react";

import { getUserById } from "../../services/userService";

function FetchUser({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const data = await getUserById(userId);
      setUser(data);
    }
    fetchUserData();
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}

export default FetchUser;
