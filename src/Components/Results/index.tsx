import React from 'react';
import "./Results.scss";

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
  
  return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
    // return (
    //   <section>
    //     {isLoading ? (
    //       <p>Loading...</p>
    //     ) : (
    //       <pre>{JSON.stringify(props.data, undefined, 2)}</pre>
    //     )}
    //   </section>
    // );
}

export default Results;
