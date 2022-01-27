import React from "react";
import { Link } from "react-router-dom";
import { DEPARTAMENTS } from "../../shared/mocks/mocks";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

import "./UserItem.css";

const UserItem = props => {
    return (
        <li className="user-item">
          <Card className="user-item__content">
            <Link to={`/${props.id}/okrdashboard`}>
              <div className="user-item__image">
                <Avatar image={props.image} alt={props.name} />
              </div>
              <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>
                  {DEPARTAMENTS.find(f=> f.id===props.deptId).name}
                </h3>
              </div>
            </Link>
          </Card>
      </li>
    )
}

export default UserItem;