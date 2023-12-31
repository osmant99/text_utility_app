import React from "react";

export default function Alertarea(props) {
  return (
    <>
      <div style={{ height: "80px" }}>
        {props.message && (
          <div className="container text-center">
            <div className="row">
              <div
                style={{ fontSize: "1.5rem" }}
                class="alert alert-primary col-12 mx-auto my-5"
                role="alert"
              >
                {props.message}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
