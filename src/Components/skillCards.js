import { ProgressBar } from "react-bootstrap";
import { Col } from "react-bootstrap";

const SkillCards = (props) => {
  return (
    <Col sm={6} xs={12} xl={3} className="mb-3">
      <h4>{props.tool}</h4>
      <ProgressBar animated now={props.percentage} />
    </Col>
  );
};
export default SkillCards;
