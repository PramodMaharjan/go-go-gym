import { Row, Col, Divider, Card, Spin, Result } from "antd";
import useFetch from "./useFetch";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../Styles/exercise.css";
import { Link } from "react-router-dom";

const Exercise = () => {
    const { Meta } = Card
    const url = "/data/db.json"
    const { data, isLoading, error } = useFetch(url)
    const upperBody = data && data.exercise.slice(0, 5)
    const lowerBody = data && data.exercise.slice(5, 9)
    return (
        <div>
            {error ?
                <Result
                    status="404"
                    title={error}
                /> : isLoading ?
                    <Spin
                        size="large"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 20
                        }}
                    /> :
                    <>
                        <Divider orientation="left">Upper Body</Divider>
                        <Row justify="center">
                            {upperBody && upperBody.map((item) => (
                                <Col
                                    offset={1}
                                    span={6}
                                    key={item.id}
                                >
                                    <Link to={`/exercise/${item.id}`}>
                                        <Card
                                            hoverable
                                            className="card"
                                            cover={
                                                <LazyLoadImage
                                                    src={item.imageUrl}
                                                    alt="Image"
                                                    effect="blur"
                                                />}
                                        >
                                            <Meta title={item.title} description="" />
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                        <Divider orientation="left">Lower Body</Divider>
                        <Row justify="center">
                            {lowerBody && lowerBody.map((item) => (
                                <Col
                                    offset={1}
                                    span={6}
                                    key={item.id}
                                >
                                    <Link to={`/exercise/${item.id}`}>
                                        <Card
                                            hoverable
                                            className="card"
                                            cover={
                                                <LazyLoadImage
                                                    src={item.imageUrl}
                                                    alt="Image"
                                                />}
                                        >
                                            <Meta title={item.title} description="" />
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </>}
        </div>
    );
}

export default Exercise;