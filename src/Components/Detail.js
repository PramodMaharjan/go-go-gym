import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Result, Spin, Tabs } from "antd";
import "../Styles/detail.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const Detail = () => {
    const { id } = useParams()
    const url = "/data/db.json"
    const { data, isLoading, error } = useFetch(url)
    let item = null;
    if (!isLoading && data) {
        item = data.exercise.find(item => item.id === id)
    }
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
                    <Tabs
                        defaultActiveKey="1"
                        type="card"
                        size="middle"
                        centered
                        items={item && item.types.map((item) => {
                            return {
                                label: item.title,
                                key: item.id,
                                children:
                                    <div className="detail-tab">
                                        <img
                                            src={item.imageUrl}
                                            alt={`Img${item.id}`}
                                        />
                                        <div style={{ width: "30%", textAlign: "justify" }}>
                                            <h2>{item.title}</h2>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                            };
                        })}
                    />
            }
        </div>
    );
}

export default Detail;