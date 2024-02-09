import React, { useState, useRef, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Chart from "chart.js/auto";
import dummyOrders, { Order } from "../lib/data/dummyData";
import PageLayout from "../lib/components/page-layout";
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
  id: string;
  orderDate: string;
  status: string;
  orderValue: number;
}

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
        labels: data.map((item) => item.id),
        datasets: [
          {
            label: "Price", // Label as price
            data: data.map((item) => item.orderValue),
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

  const columns: TableColumn<DataRow>[] = [
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Order Date',
      selector: row => row.orderDate,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'Order Value',
      selector: row => row.orderValue,
      sortable: true,
    },
  ];
  const convertedData: DataRow[] = data.map((order) => ({
    id: order.id.toString(),
    orderDate: order.orderDate,
    status: order.status,
    orderValue: order.orderValue,
  }));
  
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
                <Card.Title>Orders (Today)</Card.Title>
                <Card.Text>Click to see orders placed today</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => handleCardClick("Card 2")}
            >
              <Card.Body>
                <Card.Title>All unpaid orders</Card.Title>
                <Card.Text>Click to see all unpaid orders</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => handleCardClick("Card 3")}
            >
              <Card.Body>
                <Card.Title>All orders</Card.Title>
                <Card.Text>Click to see all orders</Card.Text>
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
                <DataTable
                  columns={columns}
                  data={convertedData}
                  striped
                  highlightOnHover
                  pagination
                />
              </div>
            )}
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
