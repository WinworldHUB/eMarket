import PageLayout from "../lib/components/page-layout";
import DataTable from "react-data-table-component";

// A super simple expandable component.
const ExpandedComponent = ({ data }: { data: any }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const Home = () => {
  const columns = [
    {
      name: "Title",
      selector: (row: any) => row.title,
    },
    {
      name: "Year",
      selector: (row: any) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <PageLayout>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </PageLayout>
  );
};

export default Home;
