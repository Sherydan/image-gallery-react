import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="text-center">
                    <div className="row ">
                        <p className=" text-muted">© 2022 Luis Tobar</p>
                    </div>

                    <div className="row mb-3">
                            <Button variant="primary">
                                Trucks <Badge bg="secondary">6</Badge>
                            </Button>
                        
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
