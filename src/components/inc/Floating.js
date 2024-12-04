import React from "react";

import {
  faPersonHarassing,
  faPersonFallingBurst,
  faPaw,
  faHandMiddleFinger,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Floating() {
  return (
    <div id="Floating">
      <div className="floating_body">
        <div className="main_float">
          <FontAwesomeIcon icon={faPersonHarassing} size="2x" />
        </div>

        <div className="floating_side">
          <FontAwesomeIcon icon={faPersonFallingBurst} size="2x" />
        </div>

        <div className="floating_side">
          <FontAwesomeIcon icon={faPaw} size="2x" />
        </div>

        <div className="floating_side">
          <FontAwesomeIcon icon={faHandMiddleFinger} size="2x" />
        </div>
        <div className="floating_side">
          <FontAwesomeIcon icon={faStreetView} size="2x" />
        </div>
      </div>
    </div>
  );
}

export default Floating;
