import React, { useState } from 'react';
import './Form.scss';

export type FormData = {
  method: string;
  url: string;
};

export type FormProps = {
  handleApiCall: (formData: FormData) => void;
};

function Form(props: FormProps): React.ReactElement {
  // State to track the selected method CHATGPT
  const [selectedMethod, setSelectedMethod] = useState<string>('GET');
  // State to track the URL input value CHATGPT
  const [url, setUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData: FormData = {
      method: selectedMethod,
      url: url,
    };
    props.handleApiCall(formData);
  };

  const handleMethodSelect = (method: string): void => {
    setSelectedMethod(method);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          {/* Render method selection buttons */}
          {['GET', 'POST', 'PUT', 'DELETE'].map((method) => (
            <span key={method} id={method.toLowerCase()} className={selectedMethod === method ? 'active' : ''} onClick={() => handleMethodSelect(method)}>
              {method}
            </span>
          ))}
        </label>
      </form>
    </>
  );
}

export default Form;