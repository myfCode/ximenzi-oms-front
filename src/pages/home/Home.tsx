import { useCheckLogin } from "@/common/hooks/useCheckLogin";
import { Redirect } from "react-router";

type Props = {};

export const Home = (props: Props) => {
  const [hasLogin] = useCheckLogin();
  /**
   * other logic
   */

  const target = hasLogin ? "/order/list" : "/login";

  console.log(" >>>> ", props);

  return <Redirect to={target} />;
};
