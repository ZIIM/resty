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
  data: Data
}

function Results(props: ResultsProps): React.ReactElement {
    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
}

export default Results;
