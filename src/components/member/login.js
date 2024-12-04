import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  function handleChange(event) {
    // console.log(event);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="contents_body">
      <div id="login">
        <div class="login_body">
          <div>
            <div>ID</div>
            <div className="input_area">
              <input
                type="text"
                id=""
                className="input"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>PASSWORD</div>
            <div className="input_area">
              <input
                type="password"
                id=""
                className="input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
