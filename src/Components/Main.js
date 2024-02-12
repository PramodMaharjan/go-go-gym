import { Layout } from "antd";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Exercise from "./Exercise"
import BMI from "./BMI";
import Detail from "./Detail";
import "../Styles/navbar.css"
import "../Styles/footer.css"

const Main = () => {
    const { Content, Footer } = Layout
    return (
        <div>
            <div className="header">
                <NavLink style={{ color: "black", textDecoration: "none" }} to="/" exact={true}>
                    <h1>GOGO GYM</h1>
                </NavLink>
                <div className="myCustomAnchor">
                    <NavLink
                        to="/"
                        exact
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#1677ff" : "black",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/exercise"
                        exact
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#1677ff" : "black",
                            };
                        }}
                    >
                        Tutorial
                    </NavLink>
                    <NavLink
                        to="/bmi"
                        exact
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#1677ff" : "black",
                            };
                        }}
                    >
                        BMI
                    </NavLink>
                </div>
            </div>
            <Content className="content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/exercise" element={<Exercise />} />
                    <Route path="/bmi" element={<BMI />} />
                    <Route path={"/exercise/:id"} element={<Detail />} />
                </Routes>
            </Content>
            <Footer
                className="footer"
            >
                Copyright ©2024 All rights reserved | @gogogym
            </Footer>
        </div>
    );
}

export default Main;