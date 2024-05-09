import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
// import axios from 'axios';

interface Data {
  count: number;
  results: { name: string; url: string }[];
}

interface RequestParams {
  method?: string;
  url?: string;
}

function App(): React.ReactElement {
  const [data, setData] = useState<Data | null>(null);
  const [requestParams, setRequestParams] = useState<RequestParams>({});

  const callApi = (requestParams: RequestParams) => {
    // mock output
    const newData: Data = {
      count: 2,
      results: [
        // maybe change these urls
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(newData);
    setRequestParams(requestParams);
  }

  
    return (
        <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
}

export default App;
