import React from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

import classes from './Spinner.module.css'

const override = css`
  display: block;
`;

const Spinner: React.FC = () => (
  <div className={classes.Spinner}>
    <div>
      <CircleLoader color={"#212120"} loading={true} css={override} size={65} />
    </div>
    <div>
      <p>I'm getting ready, hold on.</p>
    </div>
  </div>
);

export default Spinner;