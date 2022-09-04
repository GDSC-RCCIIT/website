import React from "react";

export default function Form(props) {
  return (
    <>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder={props.placeholder}
            className="form-control"
            style={{ height: "50px" }}
          />
        </div>
      </form>
    </>
  );
}
