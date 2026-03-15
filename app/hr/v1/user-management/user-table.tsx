import { TypeUser } from "@/dal/hr/user/get-users";
import Link from "next/link";

export type TypeSearchAndFilters = {
  searchLastName: string;
  searchFirstName: string;
  filters: string;
};

export default async function HrUserTable({
  searchAndFilters,
  users,
}: {
  searchAndFilters: Promise<TypeSearchAndFilters>;
  users: TypeUser[];
}) {
  const awaitedSearchAndFilters = await searchAndFilters;

  const lastNameSearch =
    awaitedSearchAndFilters.searchLastName?.toLowerCase() || "";
  const firstNameSearch =
    awaitedSearchAndFilters.searchFirstName?.toLowerCase() || "";
  const filters = awaitedSearchAndFilters.filters || "all";

  // const filteredUsers = users.filter((user: any) => {
  const filteredUsers = users.filter((user: TypeUser) => {
    const matchesLastNameSearch = user.last_name
      .toLowerCase()
      .includes(lastNameSearch);
    const matchesFirstNameSearch = user.first_name
      .toLowerCase()
      .includes(firstNameSearch);
    const matchesFilters = filters === "all" || user.role === filters;

    return matchesLastNameSearch && matchesFirstNameSearch && matchesFilters;
  });

  return (
    <div>
      {/* <h2>This is hr user table</h2> */}
      {/* {JSON.stringify(users)} */}
      <table>
        <thead>
          <tr>
            <th>Created</th>
            <th>DB created</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>SSS</th>
            <th>PagIbig</th>
            <th>PhilHealth</th>
            <th>TinNumber</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan={20} className="border">
                No other users yet
              </td>
            </tr>
          )}

          {filteredUsers.length > 0 &&
            filteredUsers.map((user: TypeUser) => (
              <tr key={user.id}>
                <td>{user.created_at.toString()}</td>
                <td>{user.db_created_at.toString()}</td>
                <td>
                  {user.last_name}, {user.first_name}
                </td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.sss}</td>
                <td>{user.pag_ibig}</td>
                <td>{user.phil_health}</td>
                <td>{user.tin_number}</td>
                <td>{user.contact_no}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <Link
                    href={`./user-management/${user.id}`}
                    className="text-blue-300 underline"
                  >
                    Manage
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
