import Header from "./components/Header";
import CardComp from "./components/Card";
import Footer from "./components/Footer";
import Row from "react-bootstrap/Row";
// create an array of 6 images with id, title, src and alt

const images = [
    { id: 1, title: "Image 1", src: "image1.webp", alt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis?" },
    { id: 2, title: "Image 2", src: "image2.jpg", alt: "Lorem ipsum dolor sit amet." },
    { id: 3, title: "Image 3", src: "image3.jpg", alt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, labore." },
    { id: 4, title: "Image 4", src: "image4.jpeg", alt: "Lorem ipsum dolor sit amet consectetur adipisicing." },
    { id: 5, title: "Image 5", src: "image5.jpeg", alt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit." },
    { id: 6, title: "Image 6", src: "image6.jpeg", alt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci alias." },
];

function App() {
    return (
        <div className="container">
            <Header title="Image Gallery with React JS" />
            <Row>
                {images.map((image) => (
                    <CardComp
                        key={image.id}
                        imgSrc={image.src}
                        title={image.title}
                        description={image.alt}
                    />
                ))}
            </Row>

            <Footer />
        </div>
    );
}

export default App;
