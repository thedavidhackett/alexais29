import { Col } from "react-bootstrap";
export default function Suggestion({ name, text }) {
  return (
    <Col xs={12} md={6}>
      <figure className="p-2">
        <blockquote class="blockquote">
          <p class="mb-1">{text}</p>
        </blockquote>
        <figcaption class="blockquote-footer">{name}</figcaption>
      </figure>
    </Col>
  );
}
