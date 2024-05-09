import React, { useState } from 'react';
import './Form.scss';

export type FormData = {
  method: string;
  url: string;
  body?: string;
};

export type FormProps = {
  handleApiCall: (formData: FormData) => void;
};

function Form(props: FormProps): React.ReactElement {
  // State to track the selected method CHATGPT
  const [selectedMethod, setSelectedMethod] = useState<string>('GET');
  // State to track the URL input value CHATGPT
  const [url, setUrl] = useState<string>('');
  const [body, setBody] = useState<string>('');// 28

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData: FormData = {
      method: selectedMethod,
      url: url,
      body: body, // 28
    };
    props.handleApiCall(formData);
  };

  const handleMethodSelect = (method: string): void => {
    setSelectedMethod(method);
  };

  // 43-47 body added 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <label>
          {/* <span>Request Body: </span> */}
          {/* <textarea name='body' value={body} onChange={(e) => setBody(e.target.value)}></textarea> */}
        </label>
        <button type="submit">GO!</button>
        <label className="methods">
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