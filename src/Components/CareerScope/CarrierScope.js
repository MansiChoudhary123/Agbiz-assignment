import React from "react";
import "./../../Style/CarrierScope.css";
import Card from "react-bootstrap/Card";

export default function CarrerScope() {
  return (
    <div className="carrer">
      <div>
        <h1 className="carrer-heading">
          Career Scopes For <br />
          Students
          <br />
        </h1>

        <p className="carrer-description">
          There are lots of career scopes for students who completed their
          degrees in India. Students can choose any of the courses from
          different
          <br />
          programs in management, engineering, medical, etc. We have mentioned
          below the scope for students after completing the degree in
          <br />
          India from popular colleges of the country.
        </p>

        <div className="cards">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="card-body">
              <Card.Title>
                <strong> Management</strong>
              </Card.Title>
              <Card.Text>
                Supervisor/Front-line manager/Senior Manager/Board of
                Director/CEO/President of the Organisation
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body className="card-body">
              <Card.Title>
                <strong>Engineering</strong>
              </Card.Title>
              <Card.Text>
                Students can start working to build a better future and can
                apply for ME/M.Tech/M.S.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body className="card-body">
              <Card.Title>
                <strong>Computer Science</strong>{" "}
              </Card.Title>
              <Card.Text>
                Software Developer, Engineer s/and Prpgrammers
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body className="card-body">
              <Card.Title>
                <strong>Medical</strong>
              </Card.Title>
              <Card.Text>
                Medical specialist,Open personal clinic,join major hospitals and
                private
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
