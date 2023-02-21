import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StackInfo from "../../StackInfo/StackInfo";
import Grid from "../../ComponentGrid/ComponentGrid";
const Content = ({ collapse, id, user, project, created, }) => {
    return (_jsxs("div", { className: `content ${collapse ? "collapse" : "collapsed"}`, children: [!collapse && _jsx(Grid, { id: id }), !collapse && (_jsx(StackInfo, { id: id, user: user, project: project, created: created }))] }));
};
export default Content;
