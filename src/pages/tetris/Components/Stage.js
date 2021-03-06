import React from "react";
import Cell from "./Cell";
import PropTypes from "prop-types";
import { StyledStage } from "./styles/StyledStage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0].toString()} />))}
  </StyledStage>
);

Stage.propTypes = {
  stage: PropTypes.array,
};

export default Stage;
