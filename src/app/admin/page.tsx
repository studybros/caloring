import type { Metadata } from "next";
import { AdminPage } from "./AdminPage";
import { AdminAuth } from "./AdminAuth";

export const metadata: Metadata = {
  title: "상품 관리",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AdminAuth>
      <AdminPage />
    </AdminAuth>
  );
}
