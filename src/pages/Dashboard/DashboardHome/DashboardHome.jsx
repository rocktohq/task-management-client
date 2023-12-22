import { Helmet } from "react-helmet-async";
import { Chart } from "react-google-charts";
import Title from "../../../components/shared/Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/shared/Loader";

const DashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [], isPending } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stats?email=${user?.email}`);
      return res.data;
    },
  });

  const options = {
    title: "Publisher Statistics",
  };

  if (isPending) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Title heading="Todos Statistics" big center />
      <div className="max-w-md mx-auto overflow-hidden mt-5">
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={stats}
          options={options}
        />
      </div>
    </>
  );
};

export default DashboardHome;
