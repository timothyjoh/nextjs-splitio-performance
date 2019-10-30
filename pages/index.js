import React, { Component } from 'react';
import { Split } from "react-splitio";
import SplitProvider, {
  anonymousCookie
} from "../components/SplitProvider";

export default class Index extends Component {
  render() {
    return (
      <div>
        <style jsx>
        {`
          h1 {
            font-family: 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 25em;
            margin: 0px; padding: 0px;
          }
        `}
        </style>
        <h1>Control</h1>
      </div>
    )
  }
}
