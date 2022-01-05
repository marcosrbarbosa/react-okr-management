import React from "react";
import UsersList from "../components/UsersList";
import {USERS} from  "../../shared/mocks/mocks";

const Users = () => {
    return <UsersList items={USERS} />;
}

export default Users;