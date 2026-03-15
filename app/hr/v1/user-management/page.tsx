export const dynamic = "force-dynamic";

import { fetchUsers, TypeUser } from "@/dal/hr/user/get-users";
import SearchAndFilters from "./search-and-filters";
import HrUserTable, { TypeSearchAndFilters } from "./user-table";
import HrAddUser from "@/components/hr/add-user";

export default async function HrUserManagement({
  searchParams,
}: {
  searchParams: Promise<TypeSearchAndFilters>;
}) {
  const users: TypeUser[] = await fetchUsers();

  // console.log(users);

  return (
    <div className="p-2">
      <h1>This is hr user management</h1>
      <SearchAndFilters />

      <HrAddUser />

      <HrUserTable searchAndFilters={searchParams} users={users} />
    </div>
  );
}
