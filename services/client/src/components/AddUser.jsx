import React from 'react';

const AddUser = (props) => {
  return (
    <form onSubmit={(event) => props.addUser(event)}>
      <div className="field">
        <input
          name="username"
          className="input is-large"
          type="text"
          placeholder="Ingrese un nombre de usuario"
          required
          value={props.username}
          onChange={props.handleChange}  // nuevo
        />
      </div>
      <div className="field">
        <input
          name="email"
          className="input is-large"
          type="email"
          placeholder="Ingrese una dirección email"
          required
          value={props.email}
          onChange={props.handleChange}  // nuevo
        />
      </div>
      <input
        type="submit"
        className="button is-link is-fullwidth"
        value="Enviar"
      />
    </form>
  )
};

export default AddUser;
