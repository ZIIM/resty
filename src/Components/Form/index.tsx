import React from 'react';

import './Form.scss';

export type formData = {
  method: string;
  url: string;
}

export type FormProps = {
  handleApiCall: (arg0: formData) => void;
}

function Form(props: FormProps): React.ReactElement {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
