import AdminPanelStatisticCard from "./adminPanelStatisticCard";
import st from "./style.module.sass";
import { HiUser, HiUserGroup, HiUserRemove } from "react-icons/hi";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getUsers } from "../../../api";

const PanelStatistic = () => {
  const [users, setUsers] = useState<any>([]);
  const [online, setOnline] = useState<any>([]);
  const [offline, setOffline] = useState<any>([]);
  const redirect = useNavigate();

  useEffect(() => {
    getUsers().then((res: any) => {
      setUsers(res.filter((data: any) => !data.admin));
      const onlineUsers = res.filter((data: any) => data.online && !data.admin);
      const offlineUsers = res.filter(
        (data: any) => !data.online && !data.admin
      );

      setOnline(onlineUsers);
      setOffline(offlineUsers);
    });
  }, []);

  console.log(online);

  return (
    <div className={st.Panel}>
      <div className={st.Panel__Stats}>
        <AdminPanelStatisticCard
          click={() => redirect("/admin-page/statistic/all-users")}
          count={users.length}
          title="Всего сотрудников"
        >
          <HiUserGroup color="#f0f0f0" size={40} />
        </AdminPanelStatisticCard>
        <AdminPanelStatisticCard
          click={() => redirect("/admin-page/statistic/online")}
          count={online.length}
          title="Всего сотрудников онлайн"
        >
          <HiUser color="#f0f0f0" size={40} />
        </AdminPanelStatisticCard>
        <AdminPanelStatisticCard
          click={() => redirect("/admin-page/statistic/offline")}
          count={offline.length}
          title="Всего сотрудников оффлайн"
        >
          <HiUserRemove color="#f0f0f0" size={40} />
        </AdminPanelStatisticCard>
      </div>
    </div>
  );
};

export default PanelStatistic;
