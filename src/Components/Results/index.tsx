import React from 'react';
import "./Results.scss";
// import { prettyPrintJson } from 'pretty-print-json';

export type ArrayItems = {
  name: string;
  url: string;
}

export type Data = {
  count:number;
  results:Array<ArrayItems>;
}

export interface ResultsProps{
  data: Data | null; //let data be null to handle loading state!!!
}

function Results(props: ResultsProps): React.ReactElement {
  // added this below to check that data is null for loading state 
  const isLoading = props.data === null; 

  //pretty json
  const prettyPrintJson = (data: Data) =>{
    return JSON.stringify(data, undefined, 2);
  }
  
    return (
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          //pretty json
          <pre>{prettyPrintJson(props.data)}</pre>
          // <pre>{JSON.stringify(props.data, undefined, 2)}</pre>
        )}
      </section>
    );
}

export default Results;

