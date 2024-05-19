import React from "react";
import { sidebarData } from "../../util/sidebarData";

function Sidebar() {
  return (
    <div>
      <ul>
        {sidebarData.map((val, key) => {
          return (
            <>
              <li
                key={key}
                onClick={() => {
                  window.location.href = val.link;
                }}
              >
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
