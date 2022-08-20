import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CardComp = ({ imgSrc, title, description }) => {
    return (
        <>
            <Col md={4}>
                <Card className="m-1">
                    <Card.Img
                        variant="top"
                        src={require(".././img/" + imgSrc)}
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <div className="text-center">
                            <Button variant="primary">Go somewhere</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardComp;
