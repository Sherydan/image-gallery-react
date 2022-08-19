import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComp = ({ imgSrc, title, description }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default CardComp
