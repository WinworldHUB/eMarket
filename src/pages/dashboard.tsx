import React, { useState, useRef, useEffect } from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import Chart from "chart.js/auto";
import dummyOrders, { Order } from "../lib/data/dummyData";
import PageLayout from "../lib/components/page-layout";

const Dashboard: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string>("Card 1");
  const [data, setData] = useState<Order[]>([]);
  const chartRef = useRef<Chart<"line"> | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
    let filteredData: Order[] = [];
    if (card === "Card 1") {
      filteredData = dummyOrders.filter((order) => order.status === "Sold");
    } else if (card === "Card 2") {
      filteredData = dummyOrders.filter(
        (order) => order.status === "On the way"
      );
    } else if (card === "Card 3") {
      filteredData = dummyOrders.filter(
        (order) => order.status === "Payment Pending"
      );
    }
    setData(filteredData);
    updateChart(filteredData);
  };

  const updateChart = (data: Order[]) => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.itemName),
        datasets: [
          {
            label: "Price", // Label as price
            data: data.map((item) => item.price),
            fill: false,
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
    });
  };

  useEffect(() => {
    handleCardClick(selectedCard);
  }, []);

  return (
    <PageLayout isShowSideMenu>
      <div className="dashboard-content ">
        <Row className="justify-content-center" style={{ marginTop: "20px" }}>
          <Col>
            <Card
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => handleCardClick("Card 1")}
            >
              <Card.Body>
                <Card.Title>Items Sold</Card.Title>
                <Card.Text>Click to see sold items</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => handleCardClick("Card 2")}
            >
              <Card.Body>
                <Card.Title>Items on the way</Card.Title>
                <Card.Text>Click to see items on the way</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => handleCardClick("Card 3")}
            >
              <Card.Body>
                <Card.Title>Payment Pending</Card.Title>
                <Card.Text>Click to see pending payments</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginRight: "40px", marginTop: "20px" }}>
          <Col xs={6}>
            <div>
              <h2>{selectedCard}</h2>
              <canvas id="myChart" width={600} height={400}></canvas>
            </div>
          </Col>
          <Col xs={6}>
            {selectedCard && (
              <div>
                <h2>{selectedCard}</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Status</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((order, index) => (
                      <tr key={index}>
                        <td>{order.id}</td>
                        <td>{order.itemName}</td>
                        <td>{order.status}</td>
                        <td>${order.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
