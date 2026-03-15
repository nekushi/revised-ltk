import HrManageDeleteUser from "@/components/hr/manage/delete-user";
import HrManageEditUser from "@/components/hr/manage/edit-user";
import { getUser, TypeSelectedUserKey } from "@/dal/hr/user/manage/get-user";
import Link from "next/link";

export default async function HrUserData({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: TypeSelectedUserKey | null = await getUser(id);
  //   const user = await getUser();

  if (!user) {
    return (
      <div className="p-2">
        <Link href={"./"} className="text-blue-300 underline">
          go back
        </Link>
        <div>User not found. Try refreshing. Idk</div>
      </div>
    );
  }

  return (
    <div className="p-2">
      <Link href={"./"} className="text-blue-300 underline">
        go back
      </Link>
      <br />
      <HrManageEditUser user={user} />
      <HrManageDeleteUser id={user.id} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

// remove password field in rendering
