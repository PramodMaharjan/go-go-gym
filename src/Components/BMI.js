import { Button, Card, Col, Form, Input, Modal, Row, Tag } from "antd";
import { useEffect, useState } from "react";
import "../Styles/bmi.css";

const categories = [
    {
        id: 1,
        title: "UNDER WEIGHT",
        color: "lime",
        value: "< 18.5"

    },
    {
        id: 2,
        title: "NORMAL",
        color: "success",
        value: "18.5 - 24.9"

    },
    {
        id: 3,
        title: "OVER WEIGHT",
        color: "warning",
        value: "25 - 29.9"

    },
    {
        id: 4,
        title: "OBESITY",
        color: "error",
        value: "30 - 39.9"

    },
]

const About = () => {
    const [result, setResult] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const [status, setStatus] = useState()

    const onFinish = (values) => {
        const weight = values.weight
        const feetToMeter = values.heightFeet * 0.3048
        const inchToMeter = values.heightInches * 0.0254
        const totalHeightMeter = feetToMeter + inchToMeter
        const calculate = (weight / (totalHeightMeter * totalHeightMeter)).toFixed(2)
        setResult(calculate);
        setModalOpen(true);
    }

    useEffect(() => {
        switch (true) {
            case (result < 18.5):
                setStatus("You don't weigh enough!")
                break;
            case (result >= 18.5 && result <= 24.4):
                setStatus("You weigh a healthy weight!")
                break;
            case (result >= 25 && result <= 29.9):
                setStatus("You're overweight!")
                break;
            default:
                setStatus("You are too big!")
        }
    }, [result])

    const handleCancel = () => {
        setModalOpen(false);
    }

    return (
        <div className="bmi">
            <h2 style={{ textAlign: "center" }}>Body Mass Index</h2>
            <Row>
                <Col span={8} offset={5}>
                    <Form
                        name="bmi"
                        style={{ fontFamily: "Alata', sans-serif" }}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Height"
                            name="heightFeet"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your height!"
                                }
                            ]}
                            tooltip="This is a required field"
                        >
                            <Input placeholder="Feet" type="number" />
                        </Form.Item>
                        <Form.Item
                            label=""
                            name="heightInches"
                            style={{ maxWidth: "250px" }}
                            tooltip="This is a required field"
                        >
                            <Input placeholder="Inches" type="number" />
                        </Form.Item>
                        <Form.Item
                            label="Weight (KG)"
                            name="weight"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your weight!"
                                }
                            ]}
                            tooltip="This is a required field"
                        >
                            <Input type="number" placeholder="Weight" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Calculate BMI
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8}>
                    <Card
                        title="Body Mass Index (BMI)"
                        style={{ width: 300 }}
                    >
                        {categories.map((item) => (
                            <Row key={item.id} style={{ padding: "10px" }} >
                                <Col span={8}>
                                    <Tag bordered={true} color={item.color}>{item.title}</Tag>
                                </Col>
                                <Col span={8} offset={8}>
                                    <Tag bordered={true} color={item.color}>{item.value}</Tag>
                                </Col>
                            </Row>
                        ))}
                    </Card>
                </Col>
            </Row>
            <Modal
                open={modalOpen}
                title={status}
                onCancel={handleCancel}
                footer={[
                    <Button key="ok" type="primary" onClick={() => setModalOpen(false)}>
                        OK
                    </Button>
                ]}
                className="custom-modal"
            >
                <h2>
                    {result}
                </h2>
            </Modal>
        </div>
    );
}

export default About;