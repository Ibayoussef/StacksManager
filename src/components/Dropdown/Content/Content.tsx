import React from "react";
import StackInfo from "../../StackInfo/StackInfo";
import Grid from "../../ComponentGrid/ComponentGrid";
interface ContentProps {
  collapse: boolean;
}

const Content: React.FC<ContentProps> = ({ collapse }) => {
  return (
    <div className={`content ${collapse ? "collapse" : "collapsed"}`}>
      {!collapse && <Grid />}
      {!collapse && <StackInfo />}
    </div>
  );
};

export default Content;
