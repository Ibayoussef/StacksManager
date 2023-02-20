import React from "react";
import StackInfo from "../../StackInfo/StackInfo";
import Grid from "../../ComponentGrid/ComponentGrid";
export interface ContentProps {
  collapse?: boolean;
  id: string;
  user: string;
  project: string;
  created: string;
}

const Content: React.FC<ContentProps> = ({
  collapse,
  id,
  user,
  project,
  created,
}) => {
  return (
    <div className={`content ${collapse ? "collapse" : "collapsed"}`}>
      {!collapse && <Grid id={id} />}
      {!collapse && (
        <StackInfo id={id} user={user} project={project} created={created} />
      )}
    </div>
  );
};

export default Content;
