import React from "react";

import {
  faUser,
  faBars,
  faRunning,
  faHeadset,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function TabBar() {
  return (
    <div id="TabBar">
      <ul>
        <li>
          <div>
            <FontAwesomeIcon icon={faRunning} size="2x" />
          </div>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faComment} size="2x" />
          </div>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faHeadset} size="2x" />
          </div>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TabBar;
